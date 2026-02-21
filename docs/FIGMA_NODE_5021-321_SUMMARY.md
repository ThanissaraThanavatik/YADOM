# Figma Design Specifications — Node 5021-321 (ImageWithFallback)

## Summary

Successfully fetched design specifications from Figma API for **Node 5021-321** - an **ImageWithFallback** component used in the Yadom "Our Products" section.

---

## Fetched Design Details

### Component: ImageWithFallback (Node 5021-321)

**Screenshot:** ![ImageWithFallback Component](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85d6439b-f95b-496d-bfb7-7591799ac139)

#### Container Specifications
| Property        | Value                  |
|-----------------|------------------------|
| Type            | FRAME                  |
| Width           | 270px                  |
| Height          | 256px                  |
| Layout Mode     | VERTICAL               |
| Clips Content   | Yes                    |

#### Background Layers
1. **Primary Layer (Image)**
   - Type: IMAGE
   - Scale Mode: FILL
   - Image Ref: `ca7ece4b244b9ccdca95ebbb0eb5a748e29912f0`
   - This is the actual product image

2. **Secondary Layer (Overlay)**
   - Type: SOLID color
   - Color: Black (#000000)
   - Opacity: 20% (0.2)
   - Purpose: Subtle overlay for depth

#### Parent Context
The component is used within product cards in the "Our Products" section:

```
Frame 1000003408 (5021:220) - Our Products Section
└── Frame 1000003404 (5021:224) - Card Row (4 cards)
    └── Card (5021:319) - Product Card
        └── Container (5021:320) - Image Container (270x256px)
            └── ImageWithFallback (5021:321) ← THIS COMPONENT
```

---

## Complete Section Specifications (Our Products - Node 5021:220)

### Section Overview
- **Title:** สินค้าของเรา (Our Products)
- **Subtitle:** เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ
- **Background Color:** `#f2fbf9` (Light mint/teal)
- **Padding:** 96px top/bottom, 144px left/right
- **Max Content Width:** 1152px
- **Number of Cards:** 4 (horizontal layout)
- **Card Spacing:** 24px

### Card Specifications

#### Card Container
| Property        | Value                              |
|-----------------|------------------------------------|
| Width           | 270px                              |
| Total Height    | 432px                              |
| Image Area      | 270px x 256px                      |
| Content Area    | 270px x 176px (with padding)       |
| Corner Radius   | 6px                                |
| Background      | `#ffffff` (White)                  |
| Border          | `#e5e5e5` (Light gray, 1px)         |
| Shadow          | `0 2px 4px rgba(0,0,0,0.1)`        |
|                | `0 4px 6px rgba(0,0,0,0.1)`        |

#### Card Content Structure

**Image Area (Top - 270x256px):**
- ImageWithFallback component
- Parent container has gradient fallback:
  - Start: `rgba(168, 230, 207, 0.2)` (Light teal)
  - End: `rgba(255, 211, 182, 0.2)` (Light peach)
  - Direction: Diagonal (135deg)

**Product Info (Middle):**
- Title: ยาดมขวดคลาสสิก
  - Font: Inter SemiBold, 24px
  - Color: `#2d3436`
- Description: กลิ่นหอมสดชื่น สูตรดั้งเดิม
  - Font: Inter Regular, 16px
  - Color: `#636e72`

**Price & Action (Bottom):**
- Price: ฿59
  - Font: Inter SemiBold, 30px
  - Color: `#009689` (Primary teal)
- Button: สั่งซื้อ
  - Background: `#009689`
  - Text: White, Inter SemiBold, 16px
  - Padding: 8px top/bottom, 16px left/right
  - Corner Radius: 16px
  - Icon: shopping-cart
  - Shadow: `0 4px 4px rgba(0,0,0,0.25)`

---

## Color Palette (Exact Colors from Figma)

| Hex       | RGB                     | Role                    | Tailwind           |
|-----------|-------------------------|-------------------------|--------------------|
| `#f2fbf9` | R:242, G:251, B:249     | Section background      | `bg-[#f2fbf9]`     |
| `#009689` | R:0, G:150, B:137       | Primary / Price / Button | `text-[#009689]` / `bg-[#009689]` |
| `#ffffff` | R:255, G:255, B:255     | Card background         | `bg-white`         |
| `#2d3436` | R:45, G:52, B:54        | Card title text         | `text-[#2d3436]`   |
| `#636e72` | R:99, G:110, B:114      | Description text        | `text-[#636e72]`   |
| `#e5e5e5` | R:229, G:229, B:229     | Card border             | `border-[#e5e5e5]` |

---

## Typography (Fonts from Figma)

### Section Title
- Text: สินค้าของเรา
- Font: Inter
- Weight: 600 (Semi-bold)
- Size: 60px
- Color: `#009689`
- Alignment: CENTER

### Section Subtitle
- Text: เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ
- Font: Inter
- Weight: 500 (Medium)
- Size: 24px
- Color: `#636e72`
- Line Height: 32px
- Alignment: CENTER

### Product Card Title
- Text: ยาดมขวดคลาสสิก
- Font: Inter
- Weight: 600 (Semi-bold)
- Size: 24px
- Color: `#2d3436`

### Product Card Description
- Text: กลิ่นหอมสดชื่น สูตรดั้งเดิม
- Font: Inter
- Weight: 400 (Regular)
- Size: 16px
- Color: `#636e72`

### Price
- Text: ฿59
- Font: Inter
- Weight: 600 (Semi-bold)
- Size: 30px
- Color: `#009689`

### Button Text
- Text: สั่งซื้อ
- Font: Inter
- Weight: 600 (Semi-bold)
- Size: 16px
- Color: `#ffffff`

---

## Spacing Values (Exact from Figma)

| Element              | Spacing (px) | Tailwind Class  |
|----------------------|--------------|-----------------|
| Section padding top  | 96           | `pt-24`         |
| Section padding bottom | 96         | `pb-24`         |
| Section padding left | 144          | `pl-36`         |
| Section padding right | 144          | `pr-36`         |
| Title-subtitle gap   | 24           | `gap-6`         |
| Section-cards gap    | 40           | `gap-10`        |
| Card spacing         | 24           | `gap-6`         |
| Card padding         | 24 all sides  | `p-6`           |
| Image height         | 256          | `h-64`          |
| Button padding       | 8, 16, 8, 16  | `py-2 px-4`     |
| Corner radius (card) | 6            | `rounded-lg`    |
| Corner radius (button)| 16          | `rounded-2xl`   |

---

## Image Asset Requirements (รูปด้วยๆใส่ๆทุกๆcard)

As requested by the user ("รูปด้วยๆใส่ๆทุกๆcard"), here are the exact specifications for product card images:

### Image Specifications
| Property        | Recommended Value         |
|-----------------|---------------------------|
| Format          | PNG or WebP               |
| Width           | Min 540px (2x for retina) |
| Height          | Min 512px (2x for retina) |
| Aspect Ratio    | ~1.05:1 (270:256)         |
| Background      | Transparent or clean      |
| Style           | Product photography       |

### Recommended Product Images

For the 4 product cards in the "Our Products" section:

1. **Card 1: ยาดมขวดคลาสสิก (฿59)**
   - Traditional Yadom glass bottle with green cap
   - Classic packaging design

2. **Card 2: ยาดมพกพา (฿39)**
   - Compact/pocket-sized Yadom inhaler
   - Portable, modern design

3. **Card 3: ยาดมพรีเมียม (฿99)**
   - Premium Yadom bottle with special finish
   - Elegant, premium packaging

4. **Card 4: ชุดของขวัญ (฿199)**
   - Gift box with multiple Yadom products
   - Gift packaging design

### Current Available Images
Located in: `/Users/thanissarajoo/Desktop/User/ai-design-system-starter/public/images/yadom/`

- `figma-node-5021-220.png` - Full section screenshot (532KB)
- `hero-banner-5024-372.png` - Hero banner image
- `concept-bg-5024-404.png` - Concept section background
- `why-use-product-5024-375.png` - Why use product section

**Note:** Individual product images for each card need to be created/sourced separately. The current design shows placeholder gradient backgrounds.

---

## Tailwind Implementation (เหมือนเป๊ะๆ - Exact Match)

### Section Container
```tsx
<section className="w-full bg-[#f2fbf9] py-24 px-4 sm:px-6 lg:px-36">
  <div className="max-w-[1152px] mx-auto flex flex-col items-center gap-10">
    {/* Content */}
  </div>
</section>
```

### Title Block
```tsx
<div className="w-full flex flex-col items-center gap-6">
  <h2 className="w-full text-center font-['Inter'] font-semibold text-[60px] leading-none text-[#009689]">
    สินค้าของเรา
  </h2>
  <p className="w-full text-center font-['Inter'] font-medium text-[24px] leading-[32px] text-[#636e72]">
    เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ
  </p>
</div>
```

### Card Grid
```tsx
<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Product Cards */}
</div>
```

### Product Card with ImageWithFallback
```tsx
<div className="bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden">
  {/* Image Container - ImageWithFallback */}
  <div className="relative w-full h-64 bg-gradient-to-br from-teal-200/20 to-orange-200/20">
    {/* Fallback gradient */}
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

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/10" />
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col gap-6">
    {/* Product Info */}
    <div className="flex flex-col gap-2">
      <h3 className="font-['Inter'] font-semibold text-[24px] text-[#2d3436]">
        ยาดมขวดคลาสสิก
      </h3>
      <p className="font-['Inter'] text-[16px] text-[#636e72]">
        กลิ่นหอมสดชื่น สูตรดั้งเดิม
      </p>
    </div>

    {/* Price & Button */}
    <div className="flex items-center justify-between">
      <span className="font-['Inter'] font-semibold text-[30px] text-[#009689] leading-none">
        ฿59
      </span>
      <button className="flex items-center gap-2 bg-[#009689] text-white py-2 px-4 rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-['Inter'] text-[16px] font-semibold">
        <ShoppingCart className="w-5 h-5" />
        <span>สั่งซื้อ</span>
      </button>
    </div>
  </div>
</div>
```

---

## Figma API Response Summary

### Successful API Calls Made

1. **Node Details (5021:321):**
   - URL: `GET https://api.figma.com/v1/files/{file_key}/nodes?ids=5021:321`
   - Status: Success
   - Returned: Complete node specifications

2. **Image Export:**
   - URL: `GET https://api.figma.com/v1/images/{file_key}?ids=5021:321&format=png&scale=2`
   - Status: Success
   - Screenshot URL: `https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85d6439b-f95b-496d-bfb7-7591799ac139`
   - Image saved to: `/Users/thanissarajoo/Desktop/User/ai-design-system-starter/figma-node-5021-321.png`

3. **Parent Section (5021:220):**
   - URL: `GET https://api.figma.com/v1/files/{file_key}/nodes?ids=5021:220&depth=3`
   - Status: Success
   - Returned: Complete section structure with all 4 product cards

---

## Files Created

1. **Design Specification:** `/Users/thanissarajoo/Desktop/User/ai-design-system-starter/FIGMA_NODE_5021-321_DESIGN_SPEC.md`
   - Complete component documentation
   - All design tokens and specifications
   - Tailwind implementation reference

2. **Screenshot:** `/Users/thanissarajoo/Desktop/User/ai-design-system-starter/figma-node-5021-321.png`
   - High-quality PNG export from Figma (2x scale)
   - Size: 259KB

3. **Summary (this file):** `/Users/thanissarajoo/Desktop/User/ai-design-system-starter/FIGMA_NODE_5021-321_SUMMARY.md`
   - Quick reference guide
   - Key specifications extracted

---

## Next Steps (รูปด้วยๆใส่ๆทุกๆcard)

To implement "รูปด้วยๆใส่ๆทุกๆcard" (clear, clean images for every card):

1. **Source Product Images:**
   - Create or source 4 high-quality product images
   - Each image should be transparent or clean background
   - Recommended size: 540x512px minimum (2x for retina)

2. **Image Requirements:**
   - Format: PNG with transparency or clean solid background
   - Style: Professional product photography
   - Lighting: Bright, even
   - Background: White or transparent preferred

3. **File Naming:**
   ```
   /public/images/products/
   ├── yadom-classic.png       (ยาดมขวดคลาสสิก)
   ├── yadom-pocket.png        (ยาดมพกพา)
   ├── yadom-premium.png       (ยาดมพรีเมียม)
   └── yadom-gift-set.png      (ชุดของขวัญ)
   ```

4. **Implementation:**
   - Replace the gradient placeholder with actual product images
   - Use Next.js Image component for optimization
   - Add proper alt text for accessibility

---

## API Credentials Used

- **Figma File Key:** `IasfDpqUwtRZOaWQ6C5Mtn`
- **Node ID:** `5021:321` (ImageWithFallback)
- **Parent Node:** `5021:220` (Our Products Section)
- **API Token:** Stored in `.env.local` (valid)

---

## Notes

- All measurements are in pixels as specified in Figma
- Colors are exact hex values from Figma
- Fonts use Inter family (available in Next.js via Google Fonts or system fonts)
- Component is designed to be responsive with Tailwind CSS
- For "เหมือนเป๊ะๆ" (exact match), use the exact hex colors, font sizes, and spacing values provided

---

## References

- **Figma Design URL:** https://www.figma.com/design/IasfDpqUwtRZOaWQ6C5Mtn/Joo-shadcn_ui-components-with-variables---Tailwind-classes--Copy-?node-id=5021-321&m=dev
- **Component Screenshot:** https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85d6439b-f95b-496d-bfb7-7591799ac139
- **Related Specs:** `FIGMA_NODE_5021-220_DESIGN_SPEC.md` (Full section)
