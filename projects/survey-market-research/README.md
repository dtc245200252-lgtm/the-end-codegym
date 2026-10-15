# [Bài tập] Tạo Form Lấy Survey Khách Hàng

Bài tập thực hành xây dựng giao diện **Form Survey Khách Hàng (Market Research Survey)** theo đúng giao diện mẫu của CodeGym và Wufoo.

---

## 📌 Các Thành Phần Chính Trong Form

1. **Tiêu đề & Giới thiệu:**
   - Tiêu đề: `Market Research Survey`
   - Mô tả: `Please take a few moments to complete this satisfaction survey.`

2. **Các câu hỏi khảo sát:**
   - **What is your age range?**: Danh sách chọn thả xuống (`<select>`) với các mức: `18-24`, `25-34`, `35-50`, `50+`.
   - **What is your yearly income range?**: Danh sách chọn thả xuống (`<select>`) với các mức thu nhập: `$0 - $25,000`, `$25,001 - $50,000`, `$50,001 - $100,000`, `$100,000+`.
   - **Gender Identity**: Các lựa chọn Radio button (`Male`, `Female`, `Nonbinary`, `Other`) kèm ô nhập chữ khi chọn `Other`.
   - **Which of the following products have your purchased in the last 2 months. Please check all that apply.**: Các ô chọn nhiều Checkbox (`Product 1`, `Product 2`, `Product 3`).
   - **How often would you use our new product?**: Các lựa chọn Radio button tần suất sử dụng (`Daily`, `Weekly`, `Monthly`).
   - **What would you pay for the new product?**: Ô nhập số tiền với định dạng Dollars và Cents.
   - **What features would you like to see in the new product.**: Ô nhập văn bản nhiều dòng (`<textarea>`).
   - **Please rate your level of agreement with the following statements.**: Bảng thang đo Likert (Likert Scale Table) 4 mức độ:
     - `Strongly Disagree` (1)
     - `Disagree` (2)
     - `Agree` (3)
     - `Strongly Agree` (4)
     Cho 3 nhận định đánh giá sản phẩm.

3. **Nút gửi biểu mẫu:**
   - Nút `Submit` dạng nút bấm đẹp mắt, chuẩn giao diện.

---

## 🚀 Hướng Dẫn Sử Dụng
1. Clone mã nguồn về máy:
   ```bash
   git clone https://github.com/dtc245200252-lgtm/survey-form.git
   ```
2. Mở file `index.html` trực tiếp bằng trình duyệt (Chrome, Edge, Firefox, ...) để xem và tương tác với form.
