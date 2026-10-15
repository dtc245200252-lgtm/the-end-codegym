# [Bài tập] Tạo Giao Diện Form Đăng Ký Người Dùng

Bài tập thực hành xây dựng giao diện **Form Đăng Ký Người Dùng** theo chuẩn yêu cầu bài tập của CodeGym (Module 1 - HTML & CSS).

---

## 📌 Yêu Cầu Kỹ Thuật

Form được cấu hình chính xác theo đặc tả của bài học:
- **Địa chỉ gửi dữ liệu (action)**: `http://demo.codegym.vn/6/registration_form/register.php`
- **Phương thức gửi (method)**: `POST`
- **Trường Họ và tên**: `name="name"`
- **Trường Email**: `name="email"`
- **Trường Số điện thoại**: `name="phone"`
- **Trường Giới tính**: `name="gender"` (Radio button: Nam, Nữ, Khác)
- **Nút gửi & đặt lại**: Nút "Đăng ký" (`type="submit"`) và Nút "Làm mới" (`type="reset"`)

---

## 💻 Cấu Trúc Mã Nguồn

```html
<form action="http://demo.codegym.vn/6/registration_form/register.php" method="POST">
    <!-- Họ và tên -->
    <input type="text" name="name" required>

    <!-- Email -->
    <input type="email" name="email" required>

    <!-- Số điện thoại -->
    <input type="tel" name="phone" required>

    <!-- Giới tính -->
    <input type="radio" name="gender" value="male" checked> Nam
    <input type="radio" name="gender" value="female"> Nữ
    <input type="radio" name="gender" value="other"> Khác

    <!-- Nút hành động -->
    <input type="reset" value="Làm mới">
    <input type="submit" value="Đăng ký">
</form>
```

---

## 🚀 Hướng Dẫn Sử Dụng
1. Clone repository về máy:
   ```bash
   git clone https://github.com/dtc245200252-lgtm/form-login.git
   ```
2. Mở file `index.html` trực tiếp bằng trình duyệt bất kỳ (Chrome, Edge, Firefox, Cốc Cốc) để trải nghiệm giao diện.
