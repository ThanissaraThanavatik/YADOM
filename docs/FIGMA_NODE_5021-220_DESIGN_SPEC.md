# Design Specification — Yadom "Our Products" Section

## Source Information

| Property    | Value                                        |
|-------------|----------------------------------------------|
| Figma File  | `IasfDpqUwtRZOaWQ6C5Mtn`                    |
| Node ID     | `5021:220`                                   |
| Node Name   | Frame 1000003408                             |
| File Name   | Joo shadcn_ui components with variables & Tailwind classes Copy |
| Section     | Our Products (สินค้าของเรา) - Yadom Homepage |
| Screenshot  | https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/495e59a7-06a5-461c-8929-b9432024e716 |

---

## Section Overview

A product showcase section displaying 4 product cards in a horizontal grid. The section features a section header with title and subtitle, followed by a row of product cards each displaying an image, product name, description, price, and purchase button.

---

## Overall Container

| Property              | Value                                     |
|-----------------------|-------------------------------------------|
| Type                  | FRAME                                     |
| Layout Mode           | VERTICAL                                  |
| Primary Axis Align    | None (default top)                        |
| Counter Axis Align    | CENTER                                    |
| Item Spacing          | 40px (between title block and card row)   |
| Padding               | 96px top, 144px right, 96px bottom, 144px left |
| Background Color      | `#f2fbf9` (Light teal/mint background)    |

---

## Background Style

| Property | Value                |
|----------|----------------------|
| Type     | SOLID color          |
| Color    | `#f2fbf9` (R:242, G:251, B:249) |
| Hex      | #f2fbf9              |

---

## Typography Specifications

### Section Title

| Property        | Value                        |
|-----------------|------------------------------|
| Text            | `สินค้าของเรา` (Our Products) |
| Font Family     | Inter                        |
| Font Size       | 60px                         |
| Font Weight     | 600 (Semi-bold)              |
| Color           | `#009689` (Primary teal)     |
| Alignment       | Left/Center                  |

### Section Subtitle

| Property        | Value                                          |
|-----------------|------------------------------------------------|
| Text            | `เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ` (Choose the inhaler that suits your lifestyle) |
| Font Family     | Inter                                          |
| Font Size       | 24px                                           |
| Font Weight     | 500 (Medium)                                   |
| Color           | `#636e72` (Gray)                               |
| Alignment       | Left/Center                                    |

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

### Button Text

| Property        | Value                        |
|-----------------|------------------------------|
| Text            | `สั่งซื้อ` (Purchase/Buy)     |
| Font Family     | Inter                        |
| Font Size       | 16px                         |
| Font Weight     | 600 (Semi-bold)              |
| Color           | `#ffffff` (White)            |

---

## Color Palette

| Hex       | Role                    | CSS Variable     | Tailwind Approx      |
|-----------|-------------------------|------------------|----------------------|
| `#f2fbf9` | Section background      | --bg-mint        | `bg-[#f2fbf9]`       |
| `#009689` | Primary / Title / Price | --primary        | `text-[#009689]`     |
| `#ffffff` | Card background / Button text | --background | `bg-white` / `text-white` |
| `#2d3436` | Card title text         | --foreground     | `text-[#2d3436]`     |
| `#636e72` | Subtitle / Description  | --muted-foreground | `text-[#636e72]`    |

---

## Layout Structure

### Title Block (Frame 1000003396)

| Property     | Value              |
|--------------|--------------------|
| Layout       | VERTICAL           |
| Item Spacing | 24px (between title and subtitle) |
| Padding      | None (inherits parent) |

### Card Row (Frame 1000003404)

| Property       | Value                          |
|----------------|--------------------------------|
| Layout         | HORIZONTAL                     |
| Item Spacing   | 24px (between cards)           |
| Counter Axis   | CENTER (vertical centering)    |
| Border Radius  | 6px                            |
| Shadows        | `0 2px 4px rgba(0,0,0,0.1)`    |
|                | `0 4px 6px rgba(0,0,0,0.1)`    |

---

## Product Card Component

### Card Container

| Property        | Value                  |
|-----------------|------------------------|
| Type            | FRAME                  |
| Layout          | VERTICAL               |
| Background      | `#ffffff` (White)      |
| Border Radius   | 6px                    |
| Shadow          | `0 2px 4px rgba(0,0,0,0.1)` |
|                | `0 4px 6px rgba(0,0,0,0.1)` |

### Card Content Container

| Property        | Value                  |
|-----------------|------------------------|
| Layout          | VERTICAL               |
| Item Spacing    | 24px                   |
| Padding         | 24px all sides         |

### Product Info Section

| Property        | Value                  |
|-----------------|------------------------|
| Layout          | VERTICAL               |
| Item Spacing    | 8px (between title and description) |

### Price & Button Row

| Property        | Value                  |
|-----------------|------------------------|
| Layout          | HORIZONTAL             |
| Item Spacing    | 147px (space between price and button) |

### Purchase Button

| Property        | Value                            |
|-----------------|----------------------------------|
| Layout          | HORIZONTAL                       |
| Item Spacing    | 8px (between icon and text)      |
| Padding         | 8px top, 16px right, 8px bottom, 16px left |
| Background      | `#009689` (Primary teal)         |
| Text Color      | `#ffffff` (White)                |
| Border Radius   | 16px                             |
| Shadow          | `0 4px 4px rgba(0,0,0,0.25)`     |
| Icon            | shopping-cart                    |

---

## Spacing Summary

| Element              | Spacing (px)           | Tailwind Class          |
|----------------------|------------------------|-------------------------|
| Section padding      | 96, 144, 96, 144       | `py-24 px-36`           |
| Title-subtitle gap   | 24                     | `gap-6`                 |
| Section-cards gap    | 40                     | `gap-10`                |
| Card spacing         | 24                     | `gap-6`                 |
| Card padding         | 24 all sides           | `p-6`                   |
| Title-desc gap       | 8                      | `gap-2`                 |
| Price-button gap     | 147                    | `gap-[147px]`           |
| Button padding       | 8, 16, 8, 16           | `py-2 px-4`             |

---

## Border Radius Values

| Element         | Radius (px) | Tailwind Class    |
|-----------------|-------------|-------------------|
| Card container  | 6           | `rounded-lg`      |
| Button          | 16          | `rounded-2xl`     |

---

## Shadow Effects

| Element         | CSS Value                          |
|-----------------|------------------------------------|
| Card shadow     | `0 2px 4px rgba(0,0,0,0.1)`        |
|                | `0 4px 6px rgba(0,0,0,0.1)`        |
| Button shadow   | `0 4px 4px rgba(0,0,0,0.25)`       |

---

## Component Structure

```
Frame 1000003408 (Section Container)
├── Frame 1000003396 (Title Block)
│   ├── TEXT: "สินค้าของเรา" (60px, #009689)
│   └── TEXT: "เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ" (24px, #636e72)
│
└── Frame 1000003404 (Card Row - 4 cards)
    ├── Card (x4)
    │   ├── Container
    │   │   └── ImageWithFallback (Product image)
    │   └── Container content
    │       ├── Frame 1000003413
    │       │   ├── TEXT: "ยาดมขวดคลาสสิก" (24px, #2d3436)
    │       │   └── TEXT: "กลิ่นหอมสดชื่น สูตรดั้งเดิม" (16px, #636e72)
    │       └── Frame 1000003412
    │           ├── TEXT: "฿59" (30px, #009689)
    │           └── button
    │               ├── INSTANCE: shopping-cart (icon)
    │               └── TEXT: "สั่งซื้อ" (16px, #ffffff)
```

---

## Responsive Behavior Notes

The Figma frame is designed for desktop. For responsive implementation:

- **Desktop (≥1024px):** 4-column horizontal layout, full padding
- **Tablet (768–1023px):** 2-column grid (2x2), reduced padding (~48px sides)
- **Mobile (<768px):** 1-column stack, minimal padding (~16–24px sides)
- Card widths should be flexible (`flex: 1` / `w-full`)
- Title font size should scale down on mobile (`text-3xl` or `text-4xl`)

---

## Tailwind Implementation Reference

```tsx
<section className="w-full bg-[#f2fbf9] py-24 px-36">
  {/* Title Block */}
  <div className="flex flex-col gap-6 mb-10">
    <h2 className="text-[60px] font-semibold text-[#009689]">
      สินค้าของเรา
    </h2>
    <p className="text-2xl font-medium text-[#636e72]">
      เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ
    </p>
  </div>

  {/* Card Row */}
  <div className="flex flex-row gap-6">
    {/* Product Card */}
    <div className="flex-1 bg-white rounded-lg p-6 shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
      {/* Product Image */}
      <div className="w-full mb-6">
        <Image src="/products/yadom-classic.png" alt="ยาดมขวดคลาสสิก" width={300} height={300} />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-2xl font-semibold text-[#2d3436]">
          ยาดมขวดคลาสสิก
        </h3>
        <p className="text-base text-[#636e72]">
          กลิ่นหอมสดชื่น สูตรดั้งเดิม
        </p>
      </div>

      {/* Price & Button */}
      <div className="flex items-center justify-between">
        <span className="text-[30px] font-semibold text-[#009689]">
          ฿59
        </span>
        <button className="flex items-center gap-2 bg-[#009689] text-white py-2 px-4 rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-base font-semibold">สั่งซื้อ</span>
        </button>
      </div>
    </div>
    {/* Repeat for 4 cards */}
  </div>
</section>
```

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

  /* Spacing */
  --section-padding-y: 96px;
  --section-padding-x: 144px;
  --card-padding: 24px;
  --gap-section: 40px;
  --gap-cards: 24px;
  --gap-title: 24px;
  --gap-text: 8px;
}
```

---

## Design Tokens Summary

| Token Category | Variable ID               | Value      |
|----------------|---------------------------|------------|
| Item Spacing   | VariableID:626:3631       | 40px       |
| Padding X      | VariableID:90:349         | 144px      |
| Padding Y      | VariableID:90:332         | 96px       |
| Background     | VariableID:1046:3847      | #f2fbf9    |
| Primary Color  | VariableID:5018:3573      | #009689    |
| Line Height    | VariableID:1043:1104      | -          |
| Letter Spacing | VariableID:1043:1112      | -          |
| Font Weight    | VariableID:1043:1102      | 600        |
| Font Family    | VariableID:1043:1120      | Inter      |
| Font Size      | VariableID:1043:1113      | 60px       |
| Gap            | VariableID:455:677        | 24px       |

---

## Icons

| Icon Name      | Location        | Purpose           |
|----------------|-----------------|-------------------|
| shopping-cart  | Button          | Purchase action   |

---

## Screenshot URL

The screenshot of this section can be accessed at:
https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/495e59a7-06a5-461c-8929-b9432024e716

---

## Notes

- All 4 product cards in this design have identical content (likely placeholder data)
- In production, each card should have unique product information
- The section uses Yadom's primary brand color (#009689) consistently
- The light mint background (#f2fbf9) provides subtle differentiation from white card backgrounds
- Button includes a shopping cart icon for clear visual communication
