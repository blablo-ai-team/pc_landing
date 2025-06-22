# Sticky Header Debug Tests

Folder này chứa các test files để debug vấn đề sticky header không hoạt động.

## Files

### 1. `sticky-test.html`
- **Pure HTML/CSS/JS test** - không phụ thuộc vào React/Next.js
- **5 test modes khác nhau**:
  - Basic Sticky: `position: sticky` đơn giản
  - Advanced Sticky: Sticky với backdrop filter
  - Fixed Fallback: `position: fixed` để so sánh
  - iOS Fix: Sticky với hardware acceleration cho Safari
  - Problematic Container: Test với container có `min-height: 100vh`

### 2. `StickyHeaderTestPage.tsx`
- **React/Next.js component** để test trong môi trường thực tế
- **Interactive controls** để switch giữa các test modes
- **Real-time debug info** hiển thị scroll position và sticky state
- **Responsive design** với Tailwind CSS

## Cách sử dụng

### Test HTML thuần:
```bash
# Mở file trong browser
start test/sticky-header/sticky-test.html
```

### Test trong Next.js:
1. Import component vào page:
```tsx
import StickyHeaderTestPage from '@/test/sticky-header/StickyHeaderTestPage'

export default function TestPage() {
  return <StickyHeaderTestPage />
}
```

2. Hoặc tạo route mới: `/app/test-sticky/page.tsx`

## Debug Features

### Real-time monitoring:
- **Scroll position** theo thời gian thực
- **Browser detection** (iOS, Safari, Chrome, etc.)
- **Sticky support** check CSS.supports()
- **Container mode** tracking

### Test scenarios:
- ✅ **Normal flow** - header hoạt động như mong đợi
- ❌ **Problematic container** - parent có `min-height: 100vh, overflow: hidden`
- 🔧 **iOS Safari fixes** - hardware acceleration và -webkit-sticky
- 📱 **Mobile testing** - touch scroll behavior

## Expected Results

### ✅ Working scenarios:
- Basic sticky với `position: sticky`
- Fixed positioning (always works)
- iOS fix với hardware acceleration

### ❌ Problematic scenarios:
- Container với `min-height: 100vh` + `overflow: hidden`
- Conflicting CSS từ parent elements
- Z-index issues

## Troubleshooting

Nếu sticky header không hoạt động:

1. **Check browser support**:
   ```js
   console.log('Sticky support:', CSS.supports('position', 'sticky'));
   ```

2. **Check parent containers**:
   - Không có `overflow: hidden` trên parent
   - Không có `min-height: 100vh` conflict
   - Z-index đủ cao

3. **iOS Safari specific**:
   - Thêm `-webkit-sticky`
   - Force hardware acceleration với `transform: translateZ(0)`
   - Sử dụng `will-change: transform`

4. **Alternative solutions**:
   - Intersection Observer API
   - Fixed positioning với scroll detection
   - Position switching based on scroll

## Debug Commands

```js
// Trong browser console:

// Check CSS support
CSS.supports('position', 'sticky')
CSS.supports('position', '-webkit-sticky')

// Get computed styles
const header = document.querySelector('header');
console.log(getComputedStyle(header).position);

// Check for problematic parents
let element = header.parentElement;
while (element) {
  const styles = getComputedStyle(element);
  if (styles.overflow !== 'visible') {
    console.log('Problematic parent:', element, styles.overflow);
  }
  element = element.parentElement;
}
```

## Solutions Applied

Dựa trên test results, chúng ta sẽ apply fix phù hợp vào main Header component.
