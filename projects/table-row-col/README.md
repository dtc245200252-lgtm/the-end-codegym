# [Bài tập] Gộp ô trong bảng với rowspan và colspan

## Mục tiêu
Luyện tập sử dụng `rowspan` và `colspan` để gộp ô trong bảng HTML và trình bày dữ liệu hợp lý hơn.

## Mô tả bài tập
1. Tạo một file mới có tên `index.html`.
2. Thêm vào trong thẻ `<body>`:
   - Một tiêu đề `<h1>`, nội dung: **"Lịch họp công ty"**.
   - Một bảng hiển thị thông tin lịch họp, gồm các cột: **Ngày**, **Giờ**, **Nội dung cuộc họp**.
   - Sử dụng `rowspan` để gộp các ô trong cột **Ngày** khi có nhiều cuộc họp trong cùng một ngày.
   - Sử dụng `colspan` để gộp ô nếu một cuộc họp kéo dài nhiều giờ.

## Triển khai
- File chính: [index.html](index.html)
- Ứng dụng `rowspan` tại các ngày có từ 2 cuộc họp trở lên (Thứ Hai, Thứ Ba, Thứ Năm, Thứ Sáu).
- Ứng dụng `colspan` tại các ô sự kiện/cuộc họp kéo dài nhiều giờ (Thứ Tư và chiều Thứ Sáu).
