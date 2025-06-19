# BlaBlo Landing Page - Data Structure & Components

## Cấu trúc dữ liệu đã được tối ưu hóa

### 📁 /data - Chứa tất cả dữ liệu content

#### `/data/features.ts`
- **FeatureCard Interface**: Định nghĩa cấu trúc dữ liệu cho các card tính năng
- **featureCards**: Dữ liệu cho 4 tính năng chính (Listen & Repeat, Flash Cards, Joyful Role play, Speed Challenge)
- **galleryCards**: Dữ liệu cho gallery cards (7 character cards)
- **timeTagColors**: Mapping màu sắc cho các time tags
- **statusStyles**: Styling cho trạng thái (available/launching-soon)

#### `/data/hero.ts`
- **HeroContent Interface**: Định nghĩa cấu trúc cho hero section
- **heroContent**: Tất cả content của hero section (branding, headline, subtext, CTA, app stores)
- **heroAnimations**: Animation variants cho Framer Motion

### 🧩 Components được cải thiện

#### `/components/sections/FeaturesSection.tsx` (MỚI)
- Section hiển thị 4 tính năng chính của BlaBlo
- Responsive grid layout (1-2-4 columns)
- Time tags với màu sắc khác nhau
- Status indicators (Available/Launching soon)
- Smooth animations với Framer Motion
- Modern card design với hover effects

#### `/components/sections/HeroSection.tsx` (ĐÃ CẬP NHẬT)
- Sử dụng dữ liệu từ `/data/hero.ts`
- Props interface đơn giản hóa
- Tách biệt content khỏi component logic

#### `/components/sections/Card3DSection.tsx` (ĐÃ CẬP NHẬT)  
- Sử dụng dữ liệu từ `/data/features.ts`
- Type safety với FeatureCard interface
- Proper null checking cho optional properties

### 🌐 Internationalization (i18n)

#### Cập nhật locales
- **EN**: `/locales/en/common.json` - Content tiếng Anh cho tất cả sections
- **VI**: `/locales/vi/common.json` - Content tiếng Việt đầy đủ

### 📄 Page Structure `/app/page.tsx`
```tsx
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />           {/* Hero với CTA */}
      <FeaturesSection />       {/* 4 tính năng chính */}
      <Card3DSection />         {/* Gallery 3D cards */}
      {/* Additional sections */}
    </div>
  );
}
```

## Tính năng chính đã implement

### 🎯 Features Section
1. **Listen & Repeat** (Morning commute) - Green tag - Available
2. **Flash Cards** (Mid-day break) - Blue tag - Launching soon  
3. **Joyful Role play** (Before bedtime) - Purple tag - Launching soon
4. **Speed Challenge** (Later days) - Red tag - Launching soon

### 🎨 Design Features
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Rounded corners, shadows, hover effects
- **Animations**: Framer Motion với staggered animations
- **Color Coding**: Time tags với màu sắc phân biệt
- **Typography**: Font Bricolage Grotesque
- **Accessibility**: Proper ARIA labels và semantic HTML

### 🔧 Technical Improvements
- **Type Safety**: TypeScript interfaces cho tất cả dữ liệu
- **Code Organization**: Tách biệt data khỏi components
- **Maintainability**: Dễ dàng cập nhật content mà không cần thay đổi code
- **Performance**: Optimized images với Next.js Image component
- **SEO Ready**: Semantic HTML structure

## Usage Examples

### Thêm tính năng mới
```typescript
// Trong /data/features.ts
const newFeature: FeatureCard = {
  id: 5,
  type: 'feature',
  title: 'New Feature',
  subtitle: 'Subtitle',
  description: 'Description...',
  duration: '7 mins',
  status: 'launching-soon',
  timeTag: 'Afternoon',
  timeTagColor: 'green',
  icon: '/icons/new-icon.svg',
  iconAlt: 'New feature icon'
}
```

### Cập nhật hero content
```typescript
// Trong /data/hero.ts
export const heroContent: HeroContent = {
  headline: {
    mainText: 'New headline',
    highlightText: 'New highlight',
    // ...
  }
  // ...
}
```

### Thay đổi ngôn ngữ
```json
// Trong /locales/[lang]/common.json
{
  "features": {
    "title": "New title",
    "subtitle": "New subtitle"
  }
}
```

## Next Steps
1. Tích hợp i18n hook để switch giữa các ngôn ngữ
2. Thêm animations phức tạp hơn
3. Implement lazy loading cho images
4. Thêm testing cho components mới
5. Optimize performance với code splitting
