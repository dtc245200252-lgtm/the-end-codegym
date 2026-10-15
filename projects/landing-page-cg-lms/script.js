/**
 * CodeGym Career Landing Page JavaScript
 * Material Design Interactivity & Polish
 */

$(document).ready(function () {
    'use strict';

    // 1. Navbar Scrolled Effect
    const $navbar = $('#mainNavbar');
    const $backToTop = $('#btnBackToTop');

    function checkScroll() {
        const scrollTop = $(window).scrollTop();
        
        // Add shadow and reduce padding on scroll
        if (scrollTop > 50) {
            $navbar.addClass('scrolled');
        } else {
            $navbar.removeClass('scrolled');
        }

        // Show / hide Back To Top FAB
        if (scrollTop > 400) {
            $backToTop.addClass('show');
        } else {
            $backToTop.removeClass('show');
        }
    }

    $(window).on('scroll', checkScroll);
    checkScroll(); // Initial run

    // 2. Smooth Scroll for Anchor Links & Mobile Menu Close
    $('a[href^="#"]').on('click', function (e) {
        const targetId = $(this).attr('href');
        
        if (targetId && targetId !== '#') {
            const $target = $(targetId);
            if ($target.length) {
                e.preventDefault();

                // Close mobile navbar collapse if open
                if ($('.navbar-collapse').hasClass('show')) {
                    $('.navbar-collapse').collapse('hide');
                }

                const navHeight = $navbar.outerHeight() || 76;
                $('html, body').stop().animate({
                    scrollTop: $target.offset().top - navHeight + 5
                }, 700, 'swing');
            }
        }
    });

    // 3. Back To Top Button Click
    $backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: 0 }, 600, 'swing');
    });

    // 4. Pre-select Course in Form when Clicking Course CTA
    $('.btn-course-cta').on('click', function () {
        const course = $(this).data('course');
        if (course) {
            if (course.includes('Java')) {
                $('#formCourse').val('CodeGym Career - Java Full-stack');
            } else if (course.includes('PHP')) {
                $('#formCourse').val('CodeGym Career - PHP Full-stack');
            }
        }
    });

    // 5. Animated Number Counters
    let countersStarted = false;
    const $counters = $('.counter');

    function startCounters() {
        if (countersStarted || !$counters.length) return;

        const windowTop = $(window).scrollTop();
        const windowBottom = windowTop + $(window).height();
        const elementTop = $counters.first().offset().top;

        if (elementTop <= windowBottom && elementTop >= windowTop - 200) {
            countersStarted = true;

            $counters.each(function () {
                const $this = $(this);
                const target = parseInt($this.data('target'), 10);
                if (isNaN(target)) return;

                $({ countNum: 0 }).animate({ countNum: target }, {
                    duration: 1800,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }

    $(window).on('scroll', startCounters);
    startCounters(); // Initial check

    // 6. Handle Form Submission
    $('#consultationForm').on('submit', function (e) {
        e.preventDefault();

        const fullName = $('#formFullName').val().trim();
        const phone = $('#formPhone').val().trim();
        const email = $('#formEmail').val().trim();
        const location = $('#formLocation').val();
        const course = $('#formCourse').val();

        if (!fullName || !phone || !email || !location || !course) {
            alert('Vui lòng điền đầy đủ các thông tin bắt buộc (*)!');
            return;
        }

        // Simulate successful registration
        const successMsg = `Chào <strong>${fullName}</strong>! CodeGym đã nhận được thông tin đăng ký tư vấn cho chương trình <strong>${course}</strong> tại <strong>${location}</strong>. Chuyên viên sẽ gọi điện thoại theo số <strong>${phone}</strong> để tư vấn chi tiết cho bạn trong ít phút tới.`;
        
        $('#modalSuccessMessage').html(successMsg);
        $('#successModal').modal('show');

        // Reset form
        this.reset();
    });
});
