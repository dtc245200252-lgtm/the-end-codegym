# [Bài tập] Sử dụng Box Model 1 - Xây dựng bố cục với Mô hình hộp CSS

## Mô tả bài tập
Áp dụng kiến thức về **Mô hình hộp (Box Model)** trong CSS để xây dựng và so sánh bố cục thực tế giữa 2 giá trị của thuộc tính `box-sizing`:
- `box-sizing: content-box` (mặc định)
- `box-sizing: border-box`

---

## Cấu trúc thư mục
```
box model 1/
├── index.html
├── style.css
└── README.md
```

---

## Chi tiết các quy tắc CSS đã áp dụng
Mỗi thẻ `.card` được định nghĩa với các thuộc tính cơ bản:
- `width: 280px`
- `height: 150px`
- `padding: 20px` (ở tất cả các cạnh)
- `border: 5px solid #3498db` (đường viền xanh dương)
- `margin: 20px` (tạo khoảng cách xung quanh)

### Phân biệt 3 thẻ:
1. **Thẻ 1 (`.card:nth-child(1)`)**:
   - `box-sizing: content-box`
   - `background-color: #2ecc71` (xanh lá cây)
   - **Kích thước thực tế trên màn hình:**
     - Chiều rộng tổng = $280 + 2 \times 20 (\text{padding}) + 2 \times 5 (\text{border}) = \mathbf{330px}$
     - Chiều cao tổng = $150 + 2 \times 20 (\text{padding}) + 2 \times 5 (\text{border}) = \mathbf{200px}$

2. **Thẻ 2 (`.card:nth-child(2)`)**:
   - `box-sizing: border-box`
   - `background-color: #f1c40f` (vàng)
   - **Kích thước thực tế trên màn hình:**
     - Chiều rộng tổng = $\mathbf{280px}$ (cố định, vùng nội dung bên trong co lại thành $280 - 40 - 10 = 230\text{px}$)
     - Chiều cao tổng = $\mathbf{150px}$ (cố định, vùng nội dung bên trong co lại thành $150 - 40 - 10 = 100\text{px}$)

3. **Thẻ 3 (`.card:nth-child(3)`)**:
   - `box-sizing: border-box`
   - `background-color: #e74c3c` (đỏ)
   - **Kích thước thực tế trên màn hình:**
     - Chiều rộng tổng = $\mathbf{280px}$
     - Chiều cao tổng = $\mathbf{150px}$
