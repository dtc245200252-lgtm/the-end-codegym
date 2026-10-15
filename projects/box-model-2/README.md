# [Bài tập] Sử dụng Box Model 2 - Open Source Records

## Mô tả bài tập
Hoàn thiện CSS cho trang web **Open Source Records** để hiển thị đúng bố cục và kiểu dáng yêu cầu bằng cách áp dụng các kiến thức về **CSS Box Model** (`margin`, `padding`, `border`, `width`, `box-sizing`).

---

## Chi tiết các thuộc tính CSS Box Model đã áp dụng:

1. **CSS Reset:**
   - Đặt `margin: 0; padding: 0; border: 0;` cho toàn bộ các phần tử (`html, body, h1, h2, h3, h4, ul, ol, li, p, a`) để đồng nhất hiển thị trên mọi trình duyệt.
   - Thêm `box-sizing: border-box` giúp tính toán kích thước bao gồm cả padding và border.

2. **Cấu trúc thân trang (`body`):**
   - Thiết lập `max-width: 720px; margin: 30px auto;` để căn giữa trang gọn gàng.
   - Áp dụng `padding: 30px 40px;` tạo khoảng cách đệm bên trong.
   - Thêm `border: 1px solid #e1e4e8; border-radius: 8px; box-shadow` tạo khung trang nhã.

3. **Menu điều hướng (`ul`, `li`, `a`):**
   - Menu ngang với `list-style: none`.
   - Các thẻ `li` dạng `display: inline-block; margin-right: 18px;`.
   - Định dạng liên kết `a` với padding, hover background rõ ràng.

4. **Tiêu đề `h1`, `h2`, `h3`:**
   - `h1`: Tiêu đề lớn màu `#1a1a1a`, có đường gạch chân phân cách (`border-bottom: 3px solid #222`).
   - `h2`: Màu `#000000`, có đường viền đáy mờ (`border-bottom: 2px solid #eaeaea`).
   - `h3`: Màu `#333333`, viết hoa (`uppercase`) và có khoảng cách lề trên dưới hợp lý.

5. **Đoạn văn `p` và liên kết `a`:**
   - Đoạn văn `p`: Màu `#444444`, `margin-bottom: 12px`.
   - Thẻ liên kết `a`: Màu `#440000`.

6. **Lịch biểu diễn (`Tour Dates`):**
   - Mỗi lịch trình là một thẻ `li` có khung viền `border: 1px solid #e1e4e8`, điểm nhấn viền trái `border-left: 4px solid #440000`.
   - Khoảng cách đệm trong `padding: 12px 16px` và cách nhau bằng `margin-bottom: 12px`.
