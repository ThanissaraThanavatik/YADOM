# Design Specification — ImageWithFallback Component (Node 5021-321)

## Source Information

| Property    | Value                                        |
|-------------|----------------------------------------------|
| Figma File  | `IasfDpqUwtRZOaWQ6C5Mtn`                    |
| Node ID     | `5021:321`                                   |
| Node Name   | ImageWithFallback                            |
| Parent Node | `5021:320` (Card Container in Product Card) |
| File Name   | Joo shadcn_ui components with variables & Tailwind classes Copy |
| Section     | Our Products (สินค้าของเรา) - Yadom Homepage |
| Screenshot  | https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85d6439b-f95b-496d-bfb7-7591799ac139 |

---

## Component Overview

The **ImageWithFallback** component (Node 5021-321) is a product image container used within the "Our Products" section cards. It displays a product image with a subtle gradient overlay and rounded top corners, designed to showcase Yadom herbal inhaler products.

**Screenshot:** ![ImageWithFallback Component](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85d6439b-f95b-496d-bfb7-7591799ac139)

---

## Container Specifications

| Property        | Value                  |
|-----------------|------------------------|
| Type            | FRAME                  |
| Layout Mode     | VERTICAL               |
| Width           | 270px                  |
| Height          | 256px                  |
| Layout Sizing   | Fixed width, Fixed height |
| Layout Grow     | 0                      |
| Layout Align    | STRETCH (horizontal)   |

### Absolute Position
| Property    | Value    |
|-------------|----------|
| X           | 1040px   |
| Y           | 3284px   |
| Width       | 270px    |
| Height      | 256px    |

---

## Background & Fill

### Image Layer (Primary)
| Property        | Value                        |
|-----------------|------------------------------|
| Type            | IMAGE                        |
| Scale Mode      | FILL                         |
| Image Ref       | `ca7ece4b244b9ccdca95ebbb0eb5a748e29912f0` |
| Blend Mode      | NORMAL                       |

### Overlay Layer (Secondary)
| Property        | Value                  |
|-----------------|------------------------|
| Type            | SOLID color            |
| Color            | Black (R:0, G:0, B:0)  |
| Opacity         | 20% (0.2)              |
| Blend Mode      | NORMAL                 |

---

## Border Radius (Corners)

| Corner         | Radius (px) | Variable Alias           |
|----------------|-------------|-------------------------|
| Top Left       | 0           | -                       |
| Top Right      | 0           | -                       |
| Bottom Left    | 0           | -                       |
| Bottom Right   | 0           | -                       |

**Note:** The rounded corners are applied at the parent container level (Node 5021:320), with 6px radius on top-left and top-right corners.

---

## Effects (Shadows/Effects)

| Effect Type | Visible | Color                    | Offset | Radius | Spread | Blend Mode |
|-------------|---------|-------------------------|--------|--------|--------|------------|
| None        | -       | -                       | -      | -      | -      | -          |

**Note:** Shadow effects are applied at the parent Card level (Node 5021:319), not on this component.

---

## Layout Behavior

| Property              | Value    |
|-----------------------|----------|
| Clips Content         | Yes      |
| Scroll Behavior       | SCROLLS  |
| Constraints Vertical  | TOP      |
| Constraints Horizontal| LEFT     |
| Layout Positioning    | ABSOLUTE |
| Layout Sizing Horizontal| FILL   |
| Layout Sizing Vertical  | FIXED  |

---

## Parent Context

### Where This Component Is Used

The ImageWithFallback component is used as the **image container** within product cards in the "Our Products" section:

**Parent Hierarchy:**
```
Frame 1000003408 (5021:220) - "Our Products" Section
└── Frame 1000003404 (5021:224) - Card Row (4 cards)
    └── Card (5021:319) - Product Card
        └── Container (5021:320) - Image Container
            └── ImageWithFallback (5021:321) ← THIS COMPONENT
```

### Card Container Specifications (Parent)

| Property        | Value                              |
|-----------------|------------------------------------|
| Width           | 270px                              |
| Height          | 256px                              |
| Corner Radius   | 6px (top-left, top-right only)     |
| Background      | Gradient (see below)               |

### Card Container Gradient Background

The parent container (5021:320) has a gradient background as fallback:

| Property        | Value                  |
|-----------------|------------------------|
| Type            | GRADIENT_LINEAR       |
| Direction       | Diagonal (0,0 to 1,1)  |
| Gradient Stops: |                        |
| Stop 1          | Color: `#a8e6cf` (R:0.659, G:0.902, B:0.812) at 0%, Opacity: 20% |
| Stop 2          | Color: `#ffd3b6` (R:1.0, G:0.827, B:0.714) at 100%, Opacity: 20% |

**Hex Colors:**
- Start color: `rgba(168, 230, 207, 0.2)` → Light teal/green
- End color: `rgba(255, 211, 182, 0.2)` → Light peach/peach

**CSS Gradient:**
```css
background: linear-gradient(135deg, rgba(168, 230, 207, 0.2) 0%, rgba(255, 211, 182, 0.2) 100%);
```

---

## Complete Product Card Context

The ImageWithFallback is part of a complete product card structure:

### Full Card Structure

```
Card (5021:319)
├── Container (5021:320) - Image area (270x256px)
│   └── ImageWithFallback (5021:321) ← Product image with overlay
│
└── Container content (5021:322) - Content area
    ├── Frame 1000003413 - Product info
    │   ├── Title: "ยาดมขวดคลาสสิก" (24px, Inter SemiBold)
    │   └── Description: "กลิ่นหอมสดชื่น สูตรดั้งเดิม" (16px, Inter Regular)
    │
    └── Frame 1000003412 - Price & Action
        ├── Price: "฿59" (30px, Inter SemiBold, #009689)
        └── Button: "สั่งซื้อ" (16px, white background, #009689 text)
```

---

## Section Context (Our Products)

### Section Specifications

| Property        | Value                              |
|-----------------|------------------------------------|
| Section Title   | สินค้าของเรา (Our Products)      |
| Section Subtitle| เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ |
| Background Color| `#f2fbf9` (Light mint)             |
| Padding         | 96px top/bottom, 144px left/right |
| Max Content Width| 1152px                            |
| Number of Cards | 4 (horizontal layout)              |
| Card Spacing    | 24px between cards                 |

### Card Layout

| Property        | Value              |
|-----------------|--------------------|
| Layout          | Horizontal (HORIZONTAL) |
| Item Spacing    | 24px               |
| Counter Axis    | CENTER (vertically centered) |
| Card Width      | 270px each         |
| Card Height     | 432px each         |

---

## Typography (Context - Card Content)

### Product Card Title

| Property        | Value                        |
|-----------------|------------------------------|
| Text            | `ยาดมขวดคลาสสิก` (Classic Bottle) |
| Font Family     | Inter                        |
| Font Size       | 24px                         |
| Font Weight     | 600 (Semi-bold)              |
| Color           | `#2d3436` (Dark gray)         |

### Product Card Description

| Property        | Value                                          |
|-----------------|------------------------------------------------|
| Text            | `กลิ่นหอมสดชื่น สูตรดั้งเดิม` (Refreshing scent, original formula) |
| Font Family     | Inter                                          |
| Font Size       | 16px                                           |
| Font Weight     | 400 (Regular)                                  |
| Color           | `#636e72` (Gray)                               |

### Price Text

| Property        | Value                        |
|-----------------|------------------------------|
| Text            | `฿59` (Price in Thai Baht)   |
| Font Family     | Inter                        |
| Font Size       | 30px                         |
| Font Weight     | 600 (Semi-bold)              |
| Color           | `#009689` (Primary teal)     |

---

## Color Palette (Complete Section)

| Hex       | Role                    | CSS Variable     | Tailwind Approx      |
|-----------|-------------------------|------------------|----------------------|
| `#f2fbf9` | Section background      | --bg-mint        | `bg-[#f2fbf9]`       |
| `#009689` | Primary / Title / Price | --primary        | `text-[#009689]`     |
| `#ffffff` | Card background         | --background     | `bg-white`           |
| `#2d3436` | Card title text         | --foreground     | `text-[#2d3436]`     |
| `#636e72` | Subtitle / Description  | --muted-foreground | `text-[#636e72]`    |
| `#a8e6cf` | Gradient start (light teal) | -           | `rgba(168, 230, 207, 0.2)` |
| `#ffd3b6` | Gradient end (light peach)  | -           | `rgba(255, 211, 182, 0.2)` |

---

## Responsive Behavior

The ImageWithFallback component should respond to different screen sizes:

### Desktop (≥1024px)
- Width: 270px (fixed or flex-1 in 4-column grid)
- Height: 256px (fixed or aspect-ratio)

### Tablet (768–1023px)
- Width: 100% (in 2-column grid)
- Height: Maintain aspect ratio or 256px

### Mobile (<768px)
- Width: 100% (full width)
- Height: Auto or maintain aspect ratio

---

## Tailwind Implementation Reference

```tsx
// ImageWithFallback Component
<div className="relative w-full h-64 bg-gradient-to-br from-teal-200/20 to-orange-200/20 rounded-t-lg overflow-hidden">
  {/* Fallback gradient background */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, rgba(168, 230, 207, 0.2) 0%, rgba(255, 211, 182, 0.2) 100%)'
    }}
  />

  {/* Product Image */}
  <Image
    src="/products/yadom-classic.png"
    alt="ยาดมขวดคลาสสิก"
    fill
    className="object-cover"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  />

  {/* Optional overlay */}
  <div className="absolute inset-0 bg-black/10" />
</div>
```

---

## Complete Card Implementation

```tsx
// Full Product Card with ImageWithFallback
<div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
  {/* Image Container with ImageWithFallback */}
  <div className="relative w-full aspect-[270/256] bg-gradient-to-br from-teal-200/20 to-orange-200/20 rounded-t-lg overflow-hidden">
    <Image
      src="/products/yadom-classic.png"
      alt="ยาดมขวดคลาสสิก"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
  </div>

  {/* Card Content */}
  <div className="p-6 flex flex-col gap-6">
    {/* Product Info */}
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-semibold text-[#2d3436] font-['Inter']">
        ยาดมขวดคลาสสิก
      </h3>
      <p className="text-base text-[#636e72] font-['Inter']">
        กลิ่นหอมสดชื่น สูตรดั้งเดิม
      </p>
    </div>

    {/* Price & Button */}
    <div className="flex items-center justify-between gap-[147px]">
      <span className="text-[30px] font-semibold text-[#009689] font-['Inter'] leading-none">
        ฿59
      </span>
      <button className="flex items-center gap-2 bg-[#009689] text-white py-2 px-4 rounded-2xl shadow-lg font-['Inter'] text-base font-semibold">
        <ShoppingCart className="w-5 h-5" />
        <span>สั่งซื้อ</span>
      </button>
    </div>
  </div>
</div>
```

---

## Image Asset Recommendations

Based on the user's request for "รูปด้วยๆใส่ๆทุกๆcard" (clear, clean images for every card), here are the recommended image specifications:

### Product Image Specifications

| Property        | Value                      |
|-----------------|----------------------------|
| Format          | PNG or WebP (with transparency) |
| Min Width       | 540px (2x for retina)      |
| Min Height      | 512px (2x for retina)      |
| Aspect Ratio    | ~1.05:1 (270:256)          |
| Background      | Transparent or clean solid color |
| Style           | Product photography on clean background |
| Lighting        | Bright, even lighting      |
| Shadows         | Minimal or soft            |

### Recommended Product Images

For the 4 product cards, the following types of images are recommended:

1. **Card 1: ยาดมขวดคลาสสิก (Classic Bottle)**
   - Image: Traditional Yadom glass bottle with green cap
   - Background: Clean white or subtle gradient
   - Style: Classic product photography

2. **Card 2: ยาดมพกพา (Pocket Size)**
   - Image: Compact/pocket-sized Yadom inhaler
   - Background: Clean white or subtle gradient
   - Style: Modern, portable design

3. **Card 3: ยาดมพรีเมียม (Premium)**
   - Image: Premium Yadom bottle with special packaging
   - Background: Clean white or subtle gradient
   - Style: Premium, elegant

4. **Card 4: ชุดของขวัญ (Gift Set)**
   - Image: Gift box with multiple Yadom products
   - Background: Clean white or subtle gradient
   - Style: Gift packaging

---

## Design Tokens Summary

| Token Category | Variable ID               | Value      |
|----------------|---------------------------|------------|
| Card Width     | -                         | 270px      |
| Card Height    | -                         | 256px      |
| Corner Radius  | VariableID:90:554         | 6px        |
| Card Spacing   | VariableID:455:677        | 24px       |
| Card BG        | VariableID:373:398        | #ffffff    |
| Card Stroke    | VariableID:374:417        | #e5e5e5    |
| Section BG     | VariableID:1046:3847      | #f2fbf9    |
| Primary Color  | VariableID:5018:3573      | #009689    |

---

## CSS Variables (from globals.css / theme)

```css
:root {
  /* Colors */
  --primary: #009689;
  --primary-foreground: #ffffff;
  --background: #ffffff;
  --bg-mint: #f2fbf9;
  --foreground: #2d3436;
  --muted-foreground: #636e72;

  /* Card */
  --card-radius: 6px;
  --card-bg: #ffffff;
  --card-border: #e5e5e5;
  --card-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1);

  /* Spacing */
  --section-padding-y: 96px;
  --section-padding-x: 144px;
  --card-padding: 24px;
  --gap-cards: 24px;

  /* Image Container */
  --image-container-width: 270px;
  --image-container-height: 256px;
  --image-gradient-start: rgba(168, 230, 207, 0.2);
  --image-gradient-end: rgba(255, 211, 182, 0.2);
}
```

---

## Notes

- The ImageWithFallback component is designed to display product images with a 20% black overlay for subtle depth
- The parent container provides a gradient fallback background when images are loading or unavailable
- All 4 product cards in the "Our Products" section use this component for image display
- For best results, use high-quality product images with transparent or clean backgrounds
- The component is designed to work with Next.js Image component for optimized loading

---

## Screenshot URL

The screenshot of this component can be accessed at:
https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85d6439b-f95b-496d-bfb7-7591799ac139
