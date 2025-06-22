# CSS Priority Test

Folder này chứa các file test để kiểm tra mức độ ưu tiên CSS và debug vấn đề responsive background.

## Files

### 1. `test-priority.html`
- File HTML thuần để test CSS variables và utilities
- Không phụ thuộc vào Tailwind hay Next.js
- Chạy trực tiếp bằng browser

### 2. `TestPriorityPage.tsx`
- Component Next.js để test trong môi trường thực tế
- Bao gồm debug info real-time
- Test nhiều cách implement khác nhau

## Cách sử dụng

### Test HTML thuần:
1. Mở file `test-priority.html` trực tiếp bằng browser
2. Resize cửa sổ để kiểm tra responsive
3. Xem debug info ở góc phải trên

### Test trong Next.js:
1. Import component `TestPriorityPage` vào page hoặc route
2. Kiểm tra DevTools để xem computed styles
3. So sánh kết quả với HTML thuần

## Kết quả mong đợi

- **Mobile (<768px)**: Background màu xanh lá (#00FF00)
- **Desktop (≥768px)**: Background màu đỏ (#FF0000)
- Debug info hiển thị giá trị CSS variable hiện tại

## Troubleshooting

Nếu màu không đổi:
1. Kiểm tra CSS variable có đúng giá trị không
2. Kiểm tra có CSS nào override không
3. Kiểm tra Tailwind plugin có build đúng không
4. Kiểm tra specificity và !important
