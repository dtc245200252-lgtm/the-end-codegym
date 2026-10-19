/**
 * ========================================================
 * LOGIC JAVASCRIPT — BOOK LANDING PAGE
 * Title: Kiến Trúc Web Hiện Đại: Từ Số 0 Đến Tech Lead
 * Author: Thào Quang Vinh
 * Features: 3D Tilt, Theme Switcher, Order Calculation, Form Validation, Live Reviews
 * ========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ========================================================
    // 1. THEME SWITCHER (DARK / LIGHT MODE)
    // ========================================================
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const htmlElement = document.documentElement;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('techbook_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        htmlElement.setAttribute('data-bs-theme', savedTheme);
    } else if (systemPrefersDark) {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('techbook_theme', newTheme);
        });
    }

    // ========================================================
    // 2. NAVBAR SCROLL EFFECT & MOBILE COLLAPSE
    // ========================================================
    const mainNavbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.modern-navbar .nav-link');
    const navbarCollapse = document.getElementById('navbarMainContent');

    const handleNavbarScroll = () => {
        if (window.scrollY > 30) {
            mainNavbar.classList.add('scrolled');
        } else {
            mainNavbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();

    // Auto-close mobile navbar on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // ========================================================
    // 3. 3D INTERACTIVE BOOK TILT ON MOUSEMOVE
    // ========================================================
    const bookStage = document.querySelector('.book-stage');
    const bookWrapper = document.getElementById('interactiveBook');

    if (bookStage && bookWrapper) {
        const book3D = bookWrapper.querySelector('.book-3d');

        bookStage.addEventListener('mousemove', (e) => {
            const rect = bookStage.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Sensitivity multipliers
            const rotateX = -(y / (rect.height / 2)) * 18 + 5;
            const rotateY = (x / (rect.width / 2)) * 25 - 20;

            if (book3D) {
                book3D.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            }
        });

        bookStage.addEventListener('mouseleave', () => {
            if (book3D) {
                book3D.style.transform = `rotateY(-26deg) rotateX(8deg) translateY(0)`;
            }
        });
    }

    // ========================================================
    // 4. ORDER MODAL LOGIC & PRICING CALCULATOR
    // ========================================================
    const orderModalEl = document.getElementById('orderModal');
    const editionCards = document.querySelectorAll('.edition-selector-card');
    const orderQuantityInput = document.getElementById('orderQuantity');
    const btnQtyMinus = document.getElementById('btnQtyMinus');
    const btnQtyPlus = document.getElementById('btnQtyPlus');
    const shippingAddressRow = document.getElementById('shippingAddressRow');
    const orderAddressInput = document.getElementById('orderAddress');
    const orderPromoCode = document.getElementById('orderPromoCode');
    const btnApplyPromo = document.getElementById('btnApplyPromo');
    const promoFeedback = document.getElementById('promoFeedback');

    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryDiscountRow = document.getElementById('summaryDiscountRow');
    const summaryDiscount = document.getElementById('summaryDiscount');
    const summaryTotal = document.getElementById('summaryTotal');

    const orderForm = document.getElementById('orderForm');
    const orderCompletedView = document.getElementById('orderCompletedView');
    const orderIdDisplay = document.getElementById('orderIdDisplay');

    let currentPrice = 349000;
    let currentEdition = 'paperback';
    let discountPercent = 0;

    const pricesByEdition = {
        'ebook': 199000,
        'paperback': 349000,
        'hardcover': 599000
    };

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
            .format(number)
            .replace('₫', 'đ');
    };

    const updateOrderSummary = () => {
        const qty = parseInt(orderQuantityInput.value) || 1;
        const subtotal = currentPrice * qty;
        let discountAmount = 0;

        if (discountPercent > 0) {
            discountAmount = Math.round(subtotal * (discountPercent / 100));
            summaryDiscountRow.classList.remove('d-none');
            summaryDiscount.textContent = `-${formatCurrency(discountAmount)}`;
        } else {
            summaryDiscountRow.classList.add('d-none');
        }

        const grandTotal = Math.max(0, subtotal - discountAmount);

        summarySubtotal.textContent = formatCurrency(subtotal);
        summaryTotal.textContent = formatCurrency(grandTotal);
    };

    // Listen to Edition Selectors
    editionCards.forEach(card => {
        card.addEventListener('click', () => {
            editionCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const radio = card.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;

            currentEdition = card.getAttribute('data-edition') || 'paperback';
            currentPrice = pricesByEdition[currentEdition] || 349000;

            // If Ebook, shipping address is optional or hidden
            if (currentEdition === 'ebook') {
                if (shippingAddressRow) shippingAddressRow.classList.add('d-none');
                if (orderAddressInput) orderAddressInput.removeAttribute('required');
            } else {
                if (shippingAddressRow) shippingAddressRow.classList.remove('d-none');
                if (orderAddressInput) orderAddressInput.setAttribute('required', 'required');
            }

            updateOrderSummary();
        });
    });

    // Handle Edition pre-selected from external buttons (data-edition="...")
    if (orderModalEl) {
        orderModalEl.addEventListener('show.bs.modal', (event) => {
            const button = event.relatedTarget;
            if (button) {
                const targetEdition = button.getAttribute('data-edition');
                if (targetEdition && pricesByEdition[targetEdition]) {
                    const matchedCard = document.querySelector(`.edition-selector-card[data-edition="${targetEdition}"]`);
                    if (matchedCard) {
                        matchedCard.click();
                    }
                }
            }
            // Reset to form view if closed earlier
            if (orderForm) orderForm.classList.remove('d-none');
            if (orderCompletedView) orderCompletedView.classList.add('d-none');
        });
    }

    // Quantity buttons
    if (btnQtyMinus && orderQuantityInput) {
        btnQtyMinus.addEventListener('click', () => {
            let val = parseInt(orderQuantityInput.value) || 1;
            if (val > 1) {
                orderQuantityInput.value = val - 1;
                updateOrderSummary();
            }
        });
    }

    if (btnQtyPlus && orderQuantityInput) {
        btnQtyPlus.addEventListener('click', () => {
            let val = parseInt(orderQuantityInput.value) || 1;
            if (val < 50) {
                orderQuantityInput.value = val + 1;
                updateOrderSummary();
            }
        });
    }

    if (orderQuantityInput) {
        orderQuantityInput.addEventListener('change', () => {
            let val = parseInt(orderQuantityInput.value);
            if (isNaN(val) || val < 1) orderQuantityInput.value = 1;
            if (val > 50) orderQuantityInput.value = 50;
            updateOrderSummary();
        });
    }

    // Apply Coupon Code
    if (btnApplyPromo && orderPromoCode) {
        btnApplyPromo.addEventListener('click', () => {
            const code = orderPromoCode.value.trim().toUpperCase();
            if (code === 'CODEGYM2026' || code === 'VINHDEV' || code === 'SALE30') {
                discountPercent = 15;
                promoFeedback.className = 'small mt-1 text-success';
                promoFeedback.innerHTML = `<i class="fa-solid fa-tag me-1"></i> Áp dụng thành công mã <strong>${code}</strong> (Giảm 15%)!`;
                promoFeedback.classList.remove('d-none');
            } else if (code === '') {
                discountPercent = 0;
                promoFeedback.classList.add('d-none');
            } else {
                discountPercent = 0;
                promoFeedback.className = 'small mt-1 text-danger';
                promoFeedback.innerHTML = `<i class="fa-solid fa-circle-exclamation me-1"></i> Mã giảm giá "${code}" không hợp lệ hoặc đã hết hạn!`;
                promoFeedback.classList.remove('d-none');
            }
            updateOrderSummary();
        });
    }

    // Order Form Submit
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (!orderForm.checkValidity()) {
                orderForm.classList.add('was-validated');
                return;
            }

            const btnSubmit = document.getElementById('btnSubmitOrder');
            if (btnSubmit) {
                btnSubmit.disabled = true;
                btnSubmit.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Đang xử lý đơn hàng...`;
            }

            setTimeout(() => {
                const randomId = Math.floor(1000 + Math.random() * 9000);
                if (orderIdDisplay) {
                    orderIdDisplay.textContent = `#TB-2026-${randomId}`;
                }

                orderForm.classList.add('d-none');
                if (orderCompletedView) {
                    orderCompletedView.classList.remove('d-none');
                }

                if (btnSubmit) {
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = `<i class="fa-solid fa-shield-check me-2"></i> Xác Nhận Đặt Hàng Ngay`;
                }

                orderForm.reset();
                orderForm.classList.remove('was-validated');
                discountPercent = 0;
                if (promoFeedback) promoFeedback.classList.add('d-none');
                updateOrderSummary();
            }, 1000);
        });
    }

    // ========================================================
    // 5. DOWNLOAD FORM & DIRECT MOCK DOWNLOAD
    // ========================================================
    const downloadForm = document.getElementById('downloadForm');
    const downloadSuccessAlert = document.getElementById('downloadSuccessAlert');
    const directDownloadLink = document.getElementById('directDownloadLink');

    if (downloadForm) {
        downloadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (!downloadForm.checkValidity()) {
                downloadForm.classList.add('was-validated');
                return;
            }

            const submitBtn = document.getElementById('downloadSubmitBtn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Đang chuẩn bị file gửi...`;
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane me-2"></i> Gửi Bản Đọc Thử Cho Tôi Ngay`;
                }

                if (downloadSuccessAlert) {
                    downloadSuccessAlert.classList.remove('d-none');
                    downloadSuccessAlert.classList.add('d-flex');
                }

                downloadForm.reset();
                downloadForm.classList.remove('was-validated');

                // Trigger mock download
                triggerSampleDownload();
            }, 900);
        });
    }

    const triggerSampleDownload = () => {
        const sampleText = `========================================================
KIẾN TRÚC WEB HIỆN ĐẠI: TỪ SỐ 0 ĐẾN TECH LEAD
Tác giả: Thào Quang Vinh
Bản đọc thử miễn phí 3 chương đầu (Chương 1 - Chương 3)
========================================================

CHƯƠNG 1: BỨC TRANH TOÀN CẢNH TRÌNH DUYỆT WEB
- Hiểu về cách trình duyệt phân tích mã HTML tạo thành DOM Tree.
- Hiểu về cách CSS tạo thành CSSOM Tree.
- Sự phối hợp kỳ diệu để xây dựng Render Tree và quá trình Painting.

CHƯƠNG 2: SEMANTIC HTML5 CHUẨN SEO
- header, nav, main, article, section, aside, footer.
- Cách Google Bot quét cấu trúc ngữ nghĩa để xếp hạng Top 1.

CHƯƠNG 3: XÂY DỰNG BIỂU MẪU CHUẨN QUỐC TẾ
- Form Validation với Bootstrap 5.
- Thiết kế trải nghiệm Responsive trên Smartphone.

Để sở hữu trọn vẹn 24 chương sách và toàn bộ 50+ Source Code mẫu,
vui lòng truy cập trang chính thức để đặt mua ấn bản in màu hoặc E-Book!
Trân trọng cảm ơn bạn đã quan tâm!`;

        const blob = new Blob([sampleText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Kien-Truc-Web-Hien-Dai-Ban-Doc-Thu.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    if (directDownloadLink) {
        directDownloadLink.addEventListener('click', (e) => {
            e.preventDefault();
            triggerSampleDownload();
            if (downloadSuccessAlert) {
                downloadSuccessAlert.classList.remove('d-none');
                downloadSuccessAlert.classList.add('d-flex');
                downloadSuccessAlert.innerHTML = `<i class="fa-solid fa-circle-check fs-4"></i><div><strong>Đang tải xuống!</strong> File đọc thử đang được lưu về thiết bị của bạn.</div>`;
            }
        });
    }

    // ========================================================
    // 6. READER REVIEW FORM & DYNAMIC CARD INJECTION
    // ========================================================
    const reviewForm = document.getElementById('reviewForm');
    const ratingInputStars = document.getElementById('ratingInputStars');
    const reviewRatingVal = document.getElementById('reviewRatingVal');
    const ratingTextDesc = document.getElementById('ratingTextDesc');
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    const reviewModalEl = document.getElementById('reviewModal');

    const ratingDescriptions = {
        1: 'Không hài lòng (1/5 sao)',
        2: 'Tạm ổn (2/5 sao)',
        3: 'Bình thường (3/5 sao)',
        4: 'Rất tốt (4/5 sao)',
        5: 'Rất xuất sắc (5/5 sao)'
    };

    if (ratingInputStars && reviewRatingVal) {
        const stars = ratingInputStars.querySelectorAll('.star-rate');

        stars.forEach(star => {
            star.addEventListener('mouseenter', () => {
                const val = parseInt(star.getAttribute('data-val'));
                highlightStars(val);
                if (ratingTextDesc) ratingTextDesc.textContent = ratingDescriptions[val] || '';
            });

            star.addEventListener('click', () => {
                const val = parseInt(star.getAttribute('data-val'));
                reviewRatingVal.value = val;
                highlightStars(val);
            });
        });

        ratingInputStars.addEventListener('mouseleave', () => {
            const currentVal = parseInt(reviewRatingVal.value) || 5;
            highlightStars(currentVal);
            if (ratingTextDesc) ratingTextDesc.textContent = ratingDescriptions[currentVal] || '';
        });

        function highlightStars(count) {
            stars.forEach(s => {
                const val = parseInt(s.getAttribute('data-val'));
                if (val <= count) {
                    s.classList.remove('fa-regular');
                    s.classList.add('fa-solid');
                } else {
                    s.classList.remove('fa-solid');
                    s.classList.add('fa-regular');
                }
            });
        }
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (!reviewForm.checkValidity()) {
                reviewForm.classList.add('was-validated');
                return;
            }

            const authorName = document.getElementById('reviewAuthorName').value.trim();
            const authorRole = document.getElementById('reviewAuthorRole').value.trim() || 'Độc giả';
            const reviewContent = document.getElementById('reviewContent').value.trim();
            const rating = parseInt(reviewRatingVal.value) || 5;

            // Generate initials for avatar
            const names = authorName.split(' ');
            const initials = names.length > 1
                ? (names[0][0] + names[names.length - 1][0]).toUpperCase()
                : authorName.substring(0, 2).toUpperCase();

            // Stars HTML
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    starsHtml += '<i class="fa-solid fa-star"></i>';
                } else {
                    starsHtml += '<i class="fa-regular fa-star"></i>';
                }
            }

            // Create new testimonial card
            const newCol = document.createElement('div');
            newCol.className = 'col-md-6 col-lg-4';
            newCol.innerHTML = `
                <div class="testimonial-card h-100 p-4 rounded-4 bg-body border shadow-sm d-flex flex-column" style="animation: fadeInUp 0.5s ease;">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="stars-group text-warning small">
                            ${starsHtml}
                        </div>
                        <span class="badge bg-primary-subtle text-primary small"><i class="fa-solid fa-clock-rotate-left me-1"></i> Vừa gửi</span>
                    </div>
                    <p class="testimonial-text flex-grow-1 text-muted">
                        "${reviewContent}"
                    </p>
                    <div class="d-flex align-items-center gap-3 pt-3 border-top">
                        <div class="reviewer-avatar-circle bg-primary-subtle text-primary fw-bold">
                            ${initials}
                        </div>
                        <div>
                            <h6 class="mb-0 fw-bold">${authorName}</h6>
                            <span class="small text-muted">${authorRole}</span>
                        </div>
                    </div>
                </div>
            `;

            if (testimonialsGrid) {
                testimonialsGrid.prepend(newCol);
            }

            // Close modal
            if (reviewModalEl) {
                const bsModal = bootstrap.Modal.getInstance(reviewModalEl);
                if (bsModal) bsModal.hide();
            }

            reviewForm.reset();
            reviewForm.classList.remove('was-validated');
            if (reviewRatingVal) reviewRatingVal.value = 5;
        });
    }

    // ========================================================
    // 7. NEWSLETTER FORM
    // ========================================================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('newsletterEmail');
            if (input && input.value) {
                alert(`Cảm ơn bạn! Email ${input.value} đã được thêm vào danh sách nhận bản tin kỹ thuật hàng tuần.`);
                newsletterForm.reset();
            }
        });
    }

    // ========================================================
    // 8. SOCIAL PROOF LIVE ORDER TOAST NOTIFICATION
    // ========================================================
    const liveOrderToastEl = document.getElementById('liveOrderToast');
    const toastCustomerName = document.getElementById('toastCustomerName');
    const toastBookAction = document.getElementById('toastBookAction');
    const toastTimeAgo = document.getElementById('toastTimeAgo');

    const fakePurchases = [
        { name: "Minh Đức (Hà Nội)", action: "vừa đặt mua cuốn <strong>Paperback Deluxe</strong>", time: "Cách đây 2 phút" },
        { name: "Ngọc Lan (TP. Hồ Chí Minh)", action: "vừa tải bản đọc thử <strong>PDF Miễn Phí</strong>", time: "Cách đây 5 phút" },
        { name: "Quang Huy (Đà Nẵng)", action: "vừa đặt mua bản <strong>Hardcover VIP Box</strong>", time: "Cách đây 8 phút" },
        { name: "Thanh Thảo (Cần Thơ)", action: "vừa đặt mua gói <strong>E-Book Standard</strong>", time: "Cách đây 12 phút" },
        { name: "Việt Anh (Hải Phòng)", action: "vừa đặt mua cuốn <strong>Paperback Deluxe</strong>", time: "Cách đây 15 phút" }
    ];

    let toastIndex = 0;
    if (liveOrderToastEl && window.bootstrap) {
        const orderToast = new bootstrap.Toast(liveOrderToastEl, { delay: 6000 });

        const showNextToast = () => {
            const data = fakePurchases[toastIndex];
            if (toastCustomerName) toastCustomerName.textContent = data.name;
            if (toastBookAction) toastBookAction.innerHTML = data.action;
            if (toastTimeAgo) toastTimeAgo.innerHTML = `<i class="fa-solid fa-bolt me-1"></i> ${data.time}`;

            orderToast.show();
            toastIndex = (toastIndex + 1) % fakePurchases.length;
        };

        // Show first notification after 6 seconds, then recurring every 22 seconds
        setTimeout(showNextToast, 6000);
        setInterval(showNextToast, 22000);
    }

    // ========================================================
    // 9. BACK TO TOP BUTTON
    // ========================================================
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
