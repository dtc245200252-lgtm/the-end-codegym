/**
 * MASTER PORTFOLIO LOGIC — VINH.DEV
 * Author: Thào Quang Vinh
 * Design System: Oxblood × Warm White (Editorial Founder Aesthetic)
 */

// ========================================================
// 1. DATA: 20 COMPREHENSIVE COURSEWORK PROJECTS
// ========================================================
const projectsData = [
    {
        id: "book-landing-page",
        title: "Landing Page Giới Thiệu Sách (Bootstrap 5 Bestseller)",
        category: "featured",
        categoryName: "Đồ Án Bootstrap 5",
        badgeClass: "badge-featured",
        icon: "fa-solid fa-book-bookmark",
        summary: "Trang web tĩnh giới thiệu sách 'Kiến Trúc Web Hiện Đại' đáp ứng trọn vẹn 7 phần: Header, Book Overview, Author, Features, Prices, Download, Reader’s Say và Footer. Kèm hiệu ứng 3D xoay sách, Dark Mode, giỏ hàng tính voucher và tải bản đọc thử PDF.",
        url: "projects/book-landing-page/index.html",
        tags: ["Bootstrap 5", "HTML5 Semantic", "CSS 3D Transforms", "Responsive", "Interactive JS"],
        highlights: "Cải tiến toàn diện từ hoanv7169/bootstrap-demo, thiết kế đẳng cấp, modal đặt mua tự tính voucher CODEGYM2026, tải PDF trực tiếp và responsive đa thiết bị."
    },
    {
        id: "landing-page-cg-lms",
        title: "Landing Page CodeGym Career (Capstone)",
        category: "featured",
        categoryName: "Đồ Án Tốt Nghiệp",
        badgeClass: "badge-featured",
        icon: "fa-solid fa-graduation-cap",
        summary: "Trang đích tuyển sinh Coding Bootcamp hoàn chỉnh với Material Design Bootstrap 4, thanh menu cố định, form đăng ký kèm modal xác nhận, accordion câu hỏi và responsive đa nền tảng.",
        url: "projects/landing-page-cg-lms/index.html",
        tags: ["Bootstrap 4", "MDBootstrap", "JavaScript", "Modal", "Responsive", "Capstone"],
        highlights: "Tích hợp thư viện hiện đại, hiệu ứng sóng nước Material Waves, modal xác nhận tức thì, tối ưu cấu trúc SEO."
    },
    {
        id: "card-list-flexbox",
        title: "Lưới Sản Phẩm & Thẻ Card với Flexbox",
        category: "featured",
        categoryName: "Flexbox Layout",
        badgeClass: "badge-featured",
        icon: "fa-solid fa-table-cells-large",
        summary: "Thiết kế lưới danh sách thẻ sản phẩm đa cột tự động co giãn linh hoạt bằng CSS Flexbox (flex-wrap, justify-content, gap), tối ưu hoàn hảo trên mobile và desktop.",
        url: "projects/card-list-flexbox/index.html",
        tags: ["CSS Flexbox", "Card UI", "Media Queries", "Hover Effect"],
        highlights: "Giải quyết triệt để bài toán dàn hàng ngang, căn đều khoảng cách giữa các phần tử card mà không dùng float."
    },
    {
        id: "survey-market-research",
        title: "Khảo Sát Khách Hàng (Market Research Survey)",
        category: "featured",
        categoryName: "Biểu Mẫu Chuyên Sâu",
        badgeClass: "badge-featured",
        icon: "fa-solid fa-clipboard-list",
        summary: "Giao diện khảo sát nghiên cứu thị trường chuyên nghiệp với đầy đủ kiểu dữ liệu: Radio matrix, Checkboxes, Dropdown, Textarea và CSS phân tầng bảng khảo sát chuẩn mực.",
        url: "projects/survey-market-research/index.html",
        tags: ["HTML5 Forms", "Radio Matrix", "CSS Variables", "UX Design"],
        highlights: "Tối ưu tương tác form survey, bảng đánh giá ma trận hài lòng người dùng và màu sắc hài hòa."
    },
    {
        id: "emerald-music-ui",
        title: "Giao Diện Phát Nhạc Emerald UI",
        category: "featured",
        categoryName: "Thẩm Mỹ & Màu Sắc",
        badgeClass: "badge-featured",
        icon: "fa-solid fa-compact-disc",
        summary: "Trình phát nhạc chủ đề Emerald tinh tế kết hợp font chữ nghệ thuật Pacifico, kỹ thuật background-image đa tầng, nút điều khiển và phối màu xanh ngọc bích sang trọng.",
        url: "projects/emerald-music-ui/emerald.html",
        tags: ["Emerald Palette", "Custom Fonts", "Music Player UI", "CSS Gradients"],
        highlights: "Phối hợp bảng màu xanh ngọc bích tự nhiên, font typography tùy biến và sắp xếp nút bấm điều hướng."
    },
    {
        id: "css-perfect-center",
        title: "Căn Giữa Phần Tử Hoàn Hảo (3 Dòng CSS)",
        category: "layout",
        categoryName: "Layout & Bố Cục",
        badgeClass: "badge-layout",
        icon: "fa-solid fa-arrows-to-dot",
        summary: "Minh họa kỹ thuật kinh điển của lập trình viên hiện đại: Căn giữa phần tử cả chiều dọc và chiều ngang chỉ với 3 dòng mã CSS Flexbox & CSS Grid.",
        url: "projects/css-perfect-center/index.html",
        tags: ["CSS Centering", "Flexbox", "Modern CSS", "Best Practice"],
        highlights: "display: flex, justify-content: center, align-items: center hoặc place-items: center trong CSS Grid."
    },
    {
        id: "fixed-header-footer",
        title: "Bố Cục Cố Định Fixed Header & Fixed Footer",
        category: "layout",
        categoryName: "Layout & Bố Cục",
        badgeClass: "badge-layout",
        icon: "fa-solid fa-arrows-up-down",
        summary: "Xây dựng khung giao diện chuẩn cho các ứng dụng web: Header và Footer luôn ghim chặt cố định ở 2 đầu màn hình khi cuộn nội dung ở giữa.",
        url: "projects/fixed-header-footer/index.html",
        tags: ["Position Fixed", "Z-index", "Layout Scrolling", "App Shell"],
        highlights: "Làm chủ position: fixed, top/bottom 0, kiểm soát thứ tự hiển thị z-index và padding bù trừ tránh che khuất."
    },
    {
        id: "box-model-1",
        title: "Thực Hành Box Model 1 (Margin & Padding)",
        category: "layout",
        categoryName: "Mô Hình Hộp",
        badgeClass: "badge-layout",
        icon: "fa-solid fa-vector-square",
        summary: "Khám phá nguyên lý hoạt động của 4 lớp trong Box Model: Content, Padding, Border và Margin. Khắc phục hiện tượng margin collapsing.",
        url: "projects/box-model-1/index.html",
        tags: ["Box Model", "box-sizing", "Border", "Spacing"],
        highlights: "Nắm vững box-sizing: border-box và sự khác biệt giữa khoảng cách trong (padding) và ngoài (margin)."
    },
    {
        id: "box-model-2",
        title: "Thực Hành Box Model 2 (Khung Ảnh & Thẻ Bài)",
        category: "layout",
        categoryName: "Mô Hình Hộp",
        badgeClass: "badge-layout",
        icon: "fa-solid fa-image",
        summary: "Ứng dụng mô hình hộp để căn chỉnh khung hình ảnh, bo góc border-radius và căn lề tự động auto margin để canh giữa khối nội dung.",
        url: "projects/box-model-2/index.html",
        tags: ["Box Model", "Image Frame", "Auto Margin", "Border Radius"],
        highlights: "Kiểm soát kích thước ảnh, chống vỡ layout với max-width 100% và canh lề giữa margin 0 auto."
    },
    {
        id: "box-model-3",
        title: "Thực Hành Box Model 3 (Card Profile Đa Lớp)",
        category: "layout",
        categoryName: "Mô Hình Hộp",
        badgeClass: "badge-layout",
        icon: "fa-solid fa-id-card",
        summary: "Thiết kế thẻ hồ sơ cá nhân hoàn chỉnh áp dụng kỹ thuật padding đa chiều, viền kép và hiệu ứng đổ bóng box-shadow tinh tế.",
        url: "projects/box-model-3/index.html",
        tags: ["Card UI", "Box Shadow", "Spacing Mastery", "CSS Borders"],
        highlights: "Tạo chiều sâu cho giao diện bằng sự kết hợp giữa border mờ và bóng đổ mềm mại."
    },
    {
        id: "vertical-nav-menu",
        title: "Thanh Điều Hướng Dọc (Vertical Navigation)",
        category: "layout",
        categoryName: "Điều Hướng",
        badgeClass: "badge-layout",
        icon: "fa-solid fa-bars-staggered",
        summary: "Thiết kế menu dạng cột dọc thích hợp cho thanh Sidebar bảng điều khiển quản trị (Dashboard) với hiệu ứng hover và active nổi bật.",
        url: "projects/vertical-nav-menu/index.html",
        tags: ["Sidebar Menu", "Hover Transition", "Navigation", "CSS Links"],
        highlights: "Chuyển đổi thẻ inline <a> thành block để mở rộng toàn bộ diện tích click cho người dùng."
    },
    {
        id: "register-form",
        title: "Form Đăng Ký Tài Khoản (Registration Form)",
        category: "forms",
        categoryName: "Biểu Mẫu",
        badgeClass: "badge-forms",
        icon: "fa-solid fa-user-plus",
        summary: "Xây dựng biểu mẫu tạo tài khoản người dùng đầy đủ các trường: Họ tên, Email, Mật khẩu, Xác nhận mật khẩu, Giới tính và Điều khoản sử dụng.",
        url: "projects/register-form/index.html",
        tags: ["HTML Form", "Validation", "Input Password", "Form UX"],
        highlights: "Ứng dụng các thuộc tính HTML5: required, type=password, placeholder, label for matching."
    },
    {
        id: "html-forms-collection",
        title: "Bộ Sưu Tập Biểu Mẫu HTML Toàn Diện",
        category: "forms",
        categoryName: "Biểu Mẫu",
        badgeClass: "badge-forms",
        icon: "fa-solid fa-keyboard",
        summary: "Tổng hợp các bài thực hành form cơ bản và nâng cao: Form tìm kiếm Google Search, Simple Form, Phân chia fieldset và legend logic.",
        url: "projects/html-forms-collection/index.html",
        tags: ["Fieldset", "Legend", "Google Search Form", "Input Controls"],
        highlights: "Nhóm các trường dữ liệu bằng fieldset, chú thích legend và cấu hình phương thức GET/POST chuẩn xác."
    },
    {
        id: "table-timetable",
        title: "Thời Khóa Biểu & Quản Lý Dữ Liệu Lớp Học",
        category: "tables",
        categoryName: "Bảng Biểu",
        badgeClass: "badge-tables",
        icon: "fa-solid fa-calendar-days",
        summary: "Bảng thời khóa biểu tuần chuẩn mực với cấu trúc ngữ nghĩa table, thead, tbody, th, td kết hợp CSS border-collapse và màu xen kẽ zebra striping.",
        url: "projects/table-timetable/thoi_khoa_bieu.html",
        tags: ["Table HTML", "border-collapse", "Zebra Striping", "Schedule"],
        highlights: "Trình bày thông tin dạng bảng trực quan, căn giữa nội dung và tạo màu nền phân biệt giữa các buổi học."
    },
    {
        id: "table-row-col",
        title: "Kỹ Thuật Gộp Hàng & Gộp Cột (Rowspan & Colspan)",
        category: "tables",
        categoryName: "Bảng Biểu",
        badgeClass: "badge-tables",
        icon: "fa-solid fa-border-all",
        summary: "Thực hành cấu trúc bảng phức tạp nhiều cấp độ bằng cách kết hợp chính xác thuộc tính rowspan và colspan mà không làm lệch trục ma trận bảng.",
        url: "projects/table-row-col/index.html",
        tags: ["Rowspan", "Colspan", "Advanced Tables", "Data Matrix"],
        highlights: "Tính toán chính xác số ô bị chiếm dụng theo cả hai chiều để bảng luôn vuông vắn, không tràn lề."
    },
    {
        id: "custom-list-css",
        title: "Danh Sách Tùy Biến Với Icon SVG (List CSS)",
        category: "styles",
        categoryName: "CSS & Thẩm Mỹ",
        badgeClass: "badge-styles",
        icon: "fa-solid fa-list-check",
        summary: "Thay thế các dấu chấm bullet mặc định nhàm chán của thẻ <ul> bằng file đồ họa vector SVG tùy biến, tạo nên danh sách tính năng cực kỳ bắt mắt.",
        url: "projects/custom-list-css/index.html",
        tags: ["List Styling", "SVG Bullet", "Pseudo-elements", "Icon List"],
        highlights: "Sử dụng list-style-image hoặc ::before pseudo-element với background SVG để căn lề hoàn hảo."
    },
    {
        id: "background-styling",
        title: "Thiết Kế Nền Với Màu Sắc & Hình Nền (Backgrounds)",
        category: "styles",
        categoryName: "CSS & Thẩm Mỹ",
        badgeClass: "badge-styles",
        icon: "fa-solid fa-panorama",
        summary: "Làm chủ trọn bộ thuộc tính background trong CSS: background-image, background-size: cover, background-position: center và lớp phủ gradient overlay chống lóa mắt chữ.",
        url: "projects/background-styling/index.html",
        tags: ["Background Image", "Cover", "Color Overlay", "Visual Design"],
        highlights: "Xử lý tương phản chữ trên nền ảnh phong cảnh để người dùng luôn đọc được nội dung rõ nét."
    },
    {
        id: "css-embedding-methods",
        title: "3 Phương Pháp Nhúng CSS Vào HTML",
        category: "styles",
        categoryName: "CSS Cơ Bản",
        badgeClass: "badge-styles",
        icon: "fa-solid fa-code-merge",
        summary: "Phân tích và thực hành 3 kỹ thuật áp dụng CSS: Inline CSS (thẻ style trực tiếp), Internal CSS (<style> trong head), và External CSS (<link rel=stylesheet>).",
        url: "projects/css-embedding-methods/index.html",
        tags: ["Inline CSS", "Internal CSS", "External CSS", "Specificity"],
        highlights: "Hiểu rõ mức độ ưu tiên (Specificity cascade) và lý do External CSS luôn là chuẩn mực ngành."
    },
    {
        id: "css-text-formatting",
        title: "Định Dạng Văn Bản & Nghệ Thuật Chữ (Typography)",
        category: "styles",
        categoryName: "CSS Cơ Bản",
        badgeClass: "badge-styles",
        icon: "fa-solid fa-font",
        summary: "Khám phá thế giới typography trong CSS: font-family, font-size rem/px, font-weight, line-height chuẩn công thái học, text-transform và text-align.",
        url: "projects/css-text-formatting/index.html",
        tags: ["Typography", "Line Height", "Font Weights", "Readability"],
        highlights: "Tối ưu khả năng đọc bài viết dài với tỉ lệ line-height 1.6 và hệ thống phân cấp heading rõ ràng."
    },
    {
        id: "halong-bay-article",
        title: "Bài Báo Thuyết Minh Thắng Cảnh Vịnh Hạ Long",
        category: "styles",
        categoryName: "HTML Cơ Bản",
        badgeClass: "badge-basic",
        icon: "fa-solid fa-mountain-sun",
        summary: "Thực hành xây dựng bài viết chuẩn cấu trúc ngữ nghĩa HTML: các thẻ đề mục h1-h3, đoạn văn <p>, nhúng hình ảnh danh lam thắng cảnh và trích dẫn.",
        url: "projects/halong-bay-article/halong_bay.html",
        tags: ["HTML Semantic", "Images", "Article Layout", "Typography"],
        highlights: "Bài tập rèn luyện bố cục tài liệu web đầu tiên, tối ưu alt text cho khả năng tiếp cận (Accessibility)."
    },
    {
        id: "hyperlinks-demo",
        title: "Hệ Thống Liên Kết Siêu Văn Bản & Trang Con",
        category: "styles",
        categoryName: "HTML Cơ Bản",
        badgeClass: "badge-basic",
        icon: "fa-solid fa-link",
        summary: "Xây dựng hệ thống điều hướng đa trang (index.html và about.html), liên kết tuyệt đối, liên kết tương đối, mở tab mới với target=_blank và bảo mật rel=noopener.",
        url: "projects/hyperlinks-demo/index.html",
        tags: ["Anchor Links", "target=_blank", "Navigation", "Multi-page"],
        highlights: "Nguyên lý định tuyến trang tĩnh, liên kết neo cuộn tại chỗ và an toàn bảo mật liên kết ngoài."
    }
];

// ========================================================
// 2. DOM ELEMENTS SELECTION
// ========================================================
const header = document.getElementById("header");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");
const projectsGrid = document.getElementById("projectsGrid");
const filterTabs = document.getElementById("filterTabs");
const projectSearchInput = document.getElementById("projectSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const noResultsState = document.getElementById("noResultsState");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Modals
const previewModal = document.getElementById("previewModal");
const previewIframe = document.getElementById("previewIframe");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalProjectTag = document.getElementById("modalProjectTag");
const modalExternalLink = document.getElementById("modalExternalLink");
const closePreviewModalBtn = document.getElementById("closePreviewModalBtn");
const iframeWrapper = document.getElementById("iframeWrapper");
const viewportBtns = document.querySelectorAll(".vp-btn");

const netlifyGuideBtn = document.getElementById("netlifyGuideBtn");
const netlifyModal = document.getElementById("netlifyModal");
const closeNetlifyModalBtn = document.getElementById("closeNetlifyModalBtn");
const openNetlifyModalBtn = document.getElementById("openNetlifyModalBtn");
const heroQuickDemoBtn = document.getElementById("heroQuickDemoBtn");

// Contact Form & Toast
const contactForm = document.getElementById("contactForm");
const toastNotification = document.getElementById("toastNotification");
const toastIcon = document.getElementById("toastIcon");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
const toastCloseBtn = document.getElementById("toastCloseBtn");

// ========================================================
// 3. RENDER PROJECTS CARDS (CLEAN EDITORIAL CARDS)
// ========================================================
function renderProjects(projects) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";

    if (projects.length === 0) {
        noResultsState.classList.remove("hidden");
        return;
    } else {
        noResultsState.classList.add("hidden");
    }

    projects.forEach((proj) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.setAttribute("data-category", proj.category);

        const tagsHtml = proj.tags
            .map((tag) => `<span class="tag-pill">${tag}</span>`)
            .join("");

        card.innerHTML = `
            <div class="project-thumbnail">
                <span class="card-category-badge ${proj.badgeClass}">${proj.categoryName}</span>
                <div class="thumb-icon-wrapper">
                    <i class="${proj.icon}"></i>
                </div>
            </div>
            <div class="project-body">
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-summary">${proj.summary}</p>
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                <div class="project-footer-actions">
                    <button class="btn-card-action btn-card-preview preview-trigger-btn" data-id="${proj.id}">
                        <i class="fa-solid fa-eye"></i> Xem Live Demo
                    </button>
                    <a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-newtab" title="Mở trang trong tab mới">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Mở Tab Mới
                    </a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(card);
    });

    // Attach click listeners to Live Demo buttons
    const previewBtns = projectsGrid.querySelectorAll(".preview-trigger-btn");
    previewBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const target = projectsData.find((p) => p.id === id);
            if (target) {
                openProjectPreview(target);
            }
        });
    });
}

// ========================================================
// 4. FILTER & SEARCH LOGIC
// ========================================================
let activeFilter = "all";
let searchQuery = "";

function applyFilters() {
    let filtered = projectsData;

    // Filter by Category
    if (activeFilter !== "all") {
        if (activeFilter === "featured") {
            filtered = filtered.filter((p) => p.category === "featured");
        } else {
            filtered = filtered.filter((p) => p.category === activeFilter);
        }
    }

    // Filter by Search Text
    if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter((p) => {
            const titleMatch = p.title.toLowerCase().includes(q);
            const summaryMatch = p.summary.toLowerCase().includes(q);
            const tagMatch = p.tags.some((t) => t.toLowerCase().includes(q));
            return titleMatch || summaryMatch || tagMatch;
        });
    }

    renderProjects(filtered);
}

// Event Listeners for Filters
if (filterTabs) {
    const btns = filterTabs.querySelectorAll(".filter-btn");
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            applyFilters();
        });
    });
}

// Search Input Listener
if (projectSearchInput) {
    projectSearchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery.length > 0) {
            clearSearchBtn.classList.add("visible");
        } else {
            clearSearchBtn.classList.remove("visible");
        }
        applyFilters();
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
        projectSearchInput.value = "";
        searchQuery = "";
        clearSearchBtn.classList.remove("visible");
        applyFilters();
        projectSearchInput.focus();
    });
}

if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
        activeFilter = "all";
        searchQuery = "";
        projectSearchInput.value = "";
        clearSearchBtn.classList.remove("visible");
        const allBtn = filterTabs.querySelector('[data-filter="all"]');
        if (allBtn) {
            filterTabs.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
            allBtn.classList.add("active");
        }
        applyFilters();
    });
}

// ========================================================
// 5. LIVE PROJECT PREVIEW MODAL LOGIC
// ========================================================
function openProjectPreview(project) {
    if (!previewModal) return;
    modalProjectTitle.textContent = project.title;
    modalProjectTag.textContent = project.categoryName;
    modalExternalLink.href = project.url;
    previewIframe.src = project.url;

    // Reset to desktop viewport
    if (iframeWrapper) {
        iframeWrapper.className = "iframe-container viewport-desktop";
    }
    viewportBtns.forEach((b) => {
        if (b.getAttribute("data-viewport") === "desktop") {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });

    previewModal.classList.add("open");
    previewModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProjectPreview() {
    if (!previewModal) return;
    previewModal.classList.remove("open");
    previewModal.setAttribute("aria-hidden", "true");
    previewIframe.src = "about:blank";
    document.body.style.overflow = "";
}

if (closePreviewModalBtn) {
    closePreviewModalBtn.addEventListener("click", closeProjectPreview);
}

if (previewModal) {
    previewModal.addEventListener("click", (e) => {
        if (e.target === previewModal) {
            closeProjectPreview();
        }
    });
}

// Viewport Switcher Controls
viewportBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        viewportBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const vp = btn.getAttribute("data-viewport");
        if (iframeWrapper) {
            iframeWrapper.className = `iframe-container viewport-${vp}`;
        }
    });
});

// Direct Preview Buttons (Hero & Capstone)
document.querySelectorAll(".preview-project-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-url");
        const target = projectsData.find((p) => p.url === url);
        if (target) {
            openProjectPreview(target);
        } else {
            openProjectPreview({
                title: btn.getAttribute("data-title") || "Demo Dự Án",
                categoryName: "Demo",
                url: url
            });
        }
    });
});

if (heroQuickDemoBtn) {
    heroQuickDemoBtn.addEventListener("click", () => {
        const lms = projectsData.find((p) => p.id === "landing-page-cg-lms");
        if (lms) openProjectPreview(lms);
    });
}

// ========================================================
// 6. NETLIFY GUIDE MODAL LOGIC
// ========================================================
function openNetlifyGuide() {
    if (!netlifyModal) return;
    netlifyModal.classList.add("open");
    netlifyModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeNetlifyGuide() {
    if (!netlifyModal) return;
    netlifyModal.classList.remove("open");
    netlifyModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (netlifyGuideBtn) netlifyGuideBtn.addEventListener("click", openNetlifyGuide);
if (openNetlifyModalBtn) openNetlifyModalBtn.addEventListener("click", openNetlifyGuide);
if (closeNetlifyModalBtn) closeNetlifyModalBtn.addEventListener("click", closeNetlifyGuide);

if (netlifyModal) {
    netlifyModal.addEventListener("click", (e) => {
        if (e.target === netlifyModal) closeNetlifyGuide();
    });
}

// Close modals on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeProjectPreview();
        closeNetlifyGuide();
    }
});

// ========================================================
// 7. TYPEWRITER EFFECT IN HERO
// ========================================================
const typewriterPhrases = [
    "Frontend Developer",
    "Chuyên Gia HTML5 & CSS3",
    "Học Viên Tốt Nghiệp CodeGym",
    "Người Yêu Thích Thiết Kế Giao Diện UI/UX"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterSpeed = 100;
const typewriterPause = 1800;
const typewriterElement = document.getElementById("typewriterText");

function handleTypewriter() {
    if (!typewriterElement) return;

    const currentPhrase = typewriterPhrases[phraseIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 50 : typewriterSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
        delay = typewriterPause;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        delay = 400;
    }

    setTimeout(handleTypewriter, delay);
}

// ========================================================
// 8. ANIMATED STAT COUNTERS
// ========================================================
let countersAnimated = false;

function animateCounters() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = Math.ceil(target / 40);

        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = count;
            }
        }, 35);
    });
}

// Intersection Observer for Counters
const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        });
    },
    { threshold: 0.5 }
);

const statsBar = document.querySelector(".stats-ruled-bar, .stats-glass-card");
if (statsBar) statsObserver.observe(statsBar);

// ========================================================
// 9. THEME TOGGLE (WARM WHITE / INK EVENING)
// ========================================================
function initTheme() {
    const savedTheme = localStorage.getItem("vinh-portfolio-theme") || "light";
    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("vinh-portfolio-theme", "light");
            showToast("Giao diện Warm White", "Đã đổi sang chế độ Warm White Editorial.");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("vinh-portfolio-theme", "dark");
            showToast("Giao diện Ink Evening", "Đã đổi sang chế độ Ink Evening.");
        }
    });
}

// ========================================================
// 10. SCROLL EVENTS: STICKY HEADER & SCROLL-TO-TOP
// ========================================================
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Header Shadow
    if (header) {
        if (scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // Scroll to Top visibility
    if (scrollToTopBtn) {
        if (scrollY > 400) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    }

    // Active Navigation Highlighting
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ========================================================
// 11. MOBILE MENU TOGGLE
// ========================================================
if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.contains("open");
        if (isOpen) {
            navMenu.classList.remove("open");
            mobileMenuBtn.classList.remove("active");
            mobileMenuBtn.setAttribute("aria-expanded", "false");
        } else {
            navMenu.classList.add("open");
            mobileMenuBtn.classList.add("active");
            mobileMenuBtn.setAttribute("aria-expanded", "true");
        }
    });

    const links = navMenu.querySelectorAll(".nav-link");
    links.forEach((l) => {
        l.addEventListener("click", () => {
            navMenu.classList.remove("open");
            mobileMenuBtn.classList.remove("active");
            mobileMenuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

// ========================================================
// 12. CONTACT FORM & TOAST NOTIFICATION
// ========================================================
function showToast(title, message, isError = false) {
    if (!toastNotification) return;

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    if (isError) {
        toastIcon.innerHTML = '<i class="fa-solid fa-circle-exclamation text-oxblood"></i>';
        toastNotification.style.borderColor = "var(--color-error)";
    } else {
        toastIcon.innerHTML = '<i class="fa-solid fa-circle-check text-oxblood"></i>';
        toastNotification.style.borderColor = "var(--color-oxblood)";
    }

    toastNotification.classList.add("show");

    setTimeout(() => {
        toastNotification.classList.remove("show");
    }, 4000);
}

if (toastCloseBtn) {
    toastCloseBtn.addEventListener("click", () => {
        toastNotification.classList.remove("show");
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("senderName");
        const emailInput = document.getElementById("senderEmail");
        const messageInput = document.getElementById("senderMessage");

        let isValid = true;

        document.querySelectorAll(".form-group").forEach((fg) => fg.classList.remove("has-error"));

        if (!nameInput.value.trim()) {
            nameInput.closest(".form-group").classList.add("has-error");
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
            emailInput.closest(".form-group").classList.add("has-error");
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            messageInput.closest(".form-group").classList.add("has-error");
            isValid = false;
        }

        if (isValid) {
            const senderName = nameInput.value.trim();
            contactForm.reset();
            showToast(
                "Đã gửi tin nhắn thành công",
                `Cảm ơn ${senderName}! Tôi sẽ sớm phản hồi qua email của bạn.`
            );
        } else {
            showToast("Lỗi nhập liệu", "Vui lòng kiểm tra lại các trường bắt buộc.", true);
        }
    });
}

// ========================================================
// 13. INITIALIZATION ON DOM READY
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderProjects(projectsData);
    handleTypewriter();
    console.log("Thào Quang Vinh Portfolio Loaded Successfully — Oxblood × Warm White System.");
});
