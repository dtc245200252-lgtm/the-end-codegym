# Tuyệt chiêu căn giữa phần tử hoàn hảo chỉ với 3 dòng CSS

## Mục tiêu
Luyện tập kỹ thuật căn giữa phần tử hoàn hảo (theo cả chiều ngang và chiều dọc) trong CSS bằng Flexbox.

## 3 Dòng CSS cốt lõi trong Flexbox
```css
.container {
  display: flex;
  justify-content: center; /* Căn giữa theo trục ngang */
  align-items: center;     /* Căn giữa theo trục dọc */
}
```

Kết hợp với `min-height: 100vh;` trên container để bao phủ toàn bộ chiều cao màn hình hiển thị.
