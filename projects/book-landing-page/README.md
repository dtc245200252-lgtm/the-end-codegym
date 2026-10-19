# 📚 Đồ Án: Landing Page Giới Thiệu Sách (Book Landing Page)
> **Dự án thực hành chuyên sâu Bootstrap 5, HTML5 & CSS3**  
> Tác phẩm giới thiệu: **"Kiến Trúc Web Hiện Đại: Từ Số 0 Đến Tech Lead"**  
> Đơn vị đào tạo: **CodeGym** | Học viên thực hiện: **Thào Quang Vinh**

---

## 🌟 1. Giới Thiệu & Bối Cảnh Cải Thiện
Dự án được xây dựng và nâng cấp toàn diện dựa trên yêu cầu bài học và mã nguồn tham khảo `https://github.com/hoanv7169/bootstrap-demo`.

### ⚡ Các điểm cải tiến vượt trội so với mã nguồn tham khảo:
1. **Hoàn thiện 100% nội dung thay vì bản thảo dở dang**: Mã nguồn tham khảo bị ngắt giữa chừng ở dòng 78 HTML và thiếu hầu hết các section quan trọng. Dự án này xây dựng đầy đủ toàn bộ cấu trúc chuẩn thương mại.
2. **Nâng cấp lên Bootstrap 5.3.3 mới nhất**: Loại bỏ hoàn toàn sự phụ thuộc vào jQuery, tận dụng CSS Custom Properties (CSS Variables) và hệ sinh thái tiện ích hiện đại.
3. **Thiết kế 3D Book Mockup tương tác**: Sử dụng CSS 3D Transforms (`preserve-3d`, `rotateX`, `rotateY`, `translateZ`) mô phỏng chân thực gáy sách, mép trang giấy và bìa mạ kim loại có thể xoay theo vị trí con trỏ chuột.
4. **Hỗ trợ 2 chế độ Dark Mode & Light Mode**: Tự động nhận diện thiết lập hệ điều hành và lưu trạng thái vào `localStorage`.
5. **Đầy đủ 7 phần cốt lõi theo đề bài**:
   - `Header & Navigation`: Menu cố định, thương hiệu rõ nét, hiệu ứng cuộn mượt (Scrollspy), nút đặt mua nhanh.
   - `Book Overview`: Phần giới thiệu hào hứng, chỉ số ấn tượng, đánh giá sao, nút kêu gọi hành động (CTA).
   - `Author`: Giới thiệu tác giả uy tín, tiểu sử, thành tựu, triết lý nghề nghiệp và mạng xã hội.
   - `Features`: 6 đặc điểm nổi bật kèm accordion mục lục chi tiết 24 chương sách.
   - `Prices`: Bảng giá 3 phiên bản (E-Book, Bìa Mềm, Hộp Quà VIP) kèm modal tính giá động và mã giảm giá `CODEGYM2026`.
   - `Download`: Form nhận 3 chương đọc thử (120 trang) miễn phí kèm file tải demo trực tiếp.
   - `Reader's Say`: Đánh giá chân thực từ chuyên gia, sinh viên và form gửi nhận xét cập nhật trực tiếp lên giao diện.
   - `Footer`: Thông tin nhà xuất bản, chính sách đổi trả, bản tin công nghệ và liên kết hữu ích.
6. **Responsive 100%**: Tối ưu hiển thị hoàn hảo trên Mobile (320px - 480px), Tablet (768px - 1024px) và Desktop (> 1200px).

---

## 🛠️ 2. Công Nghệ Sử Dụng
- **HTML5 Ngữ nghĩa (Semantic HTML5)**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`.
- **CSS3 Hiện đại**:
  - CSS Variables & Design Tokens cho 2 chế độ màu.
  - CSS 3D Perspective & Hover Micro-interactions.
  - Glassmorphism & Backdrop Blur.
  - Flexbox & CSS Grid linh hoạt.
- **Bootstrap 5.3.3**:
  - Grid 12 cột & Breakpoints (`col-12`, `col-md-6`, `col-lg-4`, v.v.).
  - Các components: Navbar, Cards, Accordion, Modal, Toast Notification, Badges, Progress Bars.
  - Bootstrap ScrollSpy tự động đánh dấu link menu khi cuộn trang.
- **JavaScript ES6+**:
  - Tính toán giá tiền tự động (Subtotal, Discount, Grand Total).
  - Trình đọc thử sách mini (Sample Book Reader Modal).
  - Hiệu ứng con trỏ chuột xoay sách 3D thời gian thực.
  - Thông báo đơn hàng trực tiếp (Social Proof Toasts).
- **Bộ icon & Font chữ**:
  - Google Fonts: **Outfit** & **Plus Jakarta Sans**.
  - Font Awesome 6.5.1 Pro-grade icons.

---

## 📂 3. Cấu Trúc Thư Mục
```text
projects/book-landing-page/
├── index.html        # Trang giao diện chính đầy đủ 7 section + modals
├── style.css         # Hệ thống giao diện, hiệu ứng 3D, Dark Mode, responsive
├── script.js         # Toàn bộ logic tương tác, giỏ hàng, đọc thử, đánh giá
└── README.md         # Tài liệu kỹ thuật chi tiết
```

---

## 🚀 4. Hướng Dẫn Sử Dụng & Trải Nghiệm
1. Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox, Safari).
2. Thử nghiệm các tính năng:
   - **Xoay sách 3D**: Rê chuột qua bìa sách ở phần Hero để thấy chiều sâu 3D.
   - **Đổi theme**: Nhấp vào nút mặt trăng/mặt trời trên thanh điều hướng.
   - **Đặt mua sách**: Nhấp "Mua Sách Ngay" -> Chọn số lượng -> Nhập mã giảm giá `CODEGYM2026` -> Nhấn áp dụng để giảm 15%.
   - **Tải bản đọc thử**: Điền form ở mục "Đọc Thử" hoặc bấm "Tải trực tiếp ngay về máy".
   - **Gửi đánh giá**: Nhấp "Viết Nhận Xét Của Bạn" ở mục Độc Giả Nói để tự thêm review mới vào trang web.
