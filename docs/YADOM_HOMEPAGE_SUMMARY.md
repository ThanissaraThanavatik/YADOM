# Yadom Herbal Inhaler Landing Page

## สรุปงานที่ทำเสร็จแล้ว ✅

### 1. ดึง Design Tokens จาก Figma
- **File ID:** `IasfDpqUwtRZOaWQ6C5Mtn`
- **Node ID:** `5024-368`
- **File:** `lib/design-tokens.ts`

**Design Tokens ที่ดึงมา:**
- **Primary Color:** `#009689` (Teal/Green - สีแบรนด์ Yadom)
- **Text Colors:** `#0a0a0a` (primary), `#525252` (secondary), `#737373` (muted)
- **Typography:** Inter font family
- **Font Sizes:** 14px (button), 16px (body), 20px (logo)
- **Font Weights:** 500 (medium - nav/buttons), 600 (semibold - logo)
- **Spacing:** 8px, 16px, 32px (จาก Figma variables)
- **Border Radius:** 8px (button radius)
- **Shadows:** `0 1px 2px 0 rgb(0 0 0 / 0.1)` (button shadow)

### 2. ดึงรูปภาพจาก Figma
- **Location:** `public/images/yadom/`
- **Files:**
  - `5024-368.png` - Main Homepage (Full page design)
  - `5024-728.png` - Header section
  - `5024-729.png` - Container/Logo section

### 3. สร้าง Homepage Landing Page
- **File:** `app/Homepage-test/page.tsx`
- **Sections:**
  1. **Navigation Header** - Sticky header พร้อม logo, navigation menu, CTA button
  2. **Hero Section** - พร้อมรูปภาพสินค้า, badge, benefits list
  3. **Stats Section** - แสดงตัวเลขสำคัญ (ขายแล้ว 1M+, 98% พึงพอใจ)
  4. **Features Section** - 4 จุดเด่นของสินค้า (สมุนไพร, หายใจสะดวก, ปลอดภัย, ขายดี)
  5. **Product Details Section** - รายละเอียดส่วนผสม
  6. **Testimonials Section** - 3 รีวิวจากลูกค้า
  7. **CTA Section** - Call to action พร้อมส่วนลด
  8. **Footer** - ข้อมูลติดต่อ, ลิงก์, ใบอนุญาต

### 4. Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px)
- ✅ Navigation: Hamburger menu บน mobile
- ✅ Grid layouts ที่ปรับตามขนาดหน้าจอ
- ✅ Typography ที่ responsive

### 5. shadcn UI Components ที่ใช้
- `Button` - ปุ่ม CTA และ navigation
- `Card` - Cards สำหรับ features และ testimonials
- `CardHeader`, `CardContent`, `CardTitle`, `CardDescription`
- `Badge` - Badges สำหรับ labels
- `Separator` - แยก sections ใน footer

## วิธีการดูหน้าเว็บ

### 1. รัน Development Server
```bash
npm run dev
```

### 2. เปิด Browser
```
http://localhost:3000/Homepage-test
```

## โครงสร้างไฟล์

```
app/Homepage-test/
└── page.tsx              # หน้า Landing Page หลัก

public/images/yadom/
├── 5024-368.png          # รูป Full page
├── 5024-728.png          # รูป Header
└── 5024-729.png          # รูป Logo/Container

lib/
└── design-tokens.ts      # Design tokens จาก Figma
```

## Design System

### Colors
```typescript
Primary: #009689 (Teal)
Text Primary: #0a0a0a
Text Secondary: #525252
Background: #ffffff
Background Muted: #fafafa
```

### Typography
```typescript
Font Family: Inter
Logo: 20px, SemiBold (600)
Nav Items: 16px, Medium (500)
Buttons: 14px, Medium (500)
Body: 16px, Normal (400)
```

### Spacing
```typescript
Button Padding: 8px 16px (py-2 px-4)
Nav Item Spacing: 32px (gap-8)
Card Padding: 20px (p-5)
Section Padding: 64px-96px (py-16 lg:py-24)
```

## หมายเหตุ
- รูปภาพทั้งหมดดึงมาจาก Figma โดยตรง
- Design tokens ใช้ค่าจาก Figma variables
- รองรับทั้งภาษาไทยและ responsive design
- ใช้ shadcn UI components ตามมาตรฐาน
