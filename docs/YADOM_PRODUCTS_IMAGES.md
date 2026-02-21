# Yadom Product Images - Download Complete

## Summary

All 4 product images have been successfully extracted from the Figma design (node 5021:220) and saved to your project.

## Image Files Created

### Standard Resolution (1x)
All images are 630x520 pixels in PNG format:

1. **product-1-classic.png** (115KB)
   - Path: `/images/yadom/products/product-1-classic.png`
   - Product: ยาดมขวดคลาสสิก (Classic Bottle)
   - Price: ฿59

2. **product-2-pocket.png** (176KB)
   - Path: `/images/yadom/products/product-2-pocket.png`
   - Product: ยาดมพกพา (Pocket Size)
   - Price: ฿39

3. **product-3-premium.png** (6.1KB)
   - Path: `/images/yadom/products/product-3-premium.png`
   - Product: ยาดมพรีเมียม (Premium)
   - Price: ฿99

4. **product-4-gift.png** (5.9KB)
   - Path: `/images/yadom/products/product-4-gift.png`
   - Product: ชุดของขวัญ (Gift Set)
   - Price: ฿199

### Retina/High-DPI Versions (2x)
For retina displays, @2x versions are also available:
- product-1-classic@2x.png (266KB)
- product-2-pocket@2x.png (469KB)
- product-3-premium@2x.png (24KB)
- product-4-gift@2x.png (23KB)

## How to Use in Your Code

### Update Your Product Card Component

Replace your current image references with the new paths:

```tsx
import Image from 'next/image';

// Product card component
function ProductCard({ product }) {
  return (
    <div className="flex-1 bg-white rounded-lg p-6 shadow-lg">
      {/* Product Image */}
      <div className="w-full mb-6">
        <Image
          src={product.image}
          alt={product.name}
          width={630}
          height={520}
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Rest of your product card */}
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-2xl font-semibold text-[#2d3436]">
          {product.name}
        </h3>
        <p className="text-base text-[#636e72]">
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[30px] font-semibold text-[#009689]">
          ฿{product.price}
        </span>
        <button className="flex items-center gap-2 bg-[#009689] text-white py-2 px-4 rounded-2xl">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-base font-semibold">สั่งซื้อ</span>
        </button>
      </div>
    </div>
  );
}
```

### Product Data Array

Update your products array:

```tsx
const products = [
  {
    id: 1,
    name: "ยาดมขวดคลาสสิก",
    nameEn: "Classic Bottle",
    description: "กลิ่นหอมสดชื่น สูตรดั้งเดิม",
    price: 59,
    image: "/images/yadom/products/product-1-classic.png"
  },
  {
    id: 2,
    name: "ยาดมพกพา",
    nameEn: "Pocket Size",
    description: "พกพาสะดวก ใช้ง่ายทุกที่",
    price: 39,
    image: "/images/yadom/products/product-2-pocket.png"
  },
  {
    id: 3,
    name: "ยาดมพรีเมียม",
    nameEn: "Premium",
    description: "ส่วนผสมพรีเมียม หอมหลากหลาย",
    price: 99,
    image: "/images/yadom/products/product-3-premium.png"
  },
  {
    id: 4,
    name: "ชุดของขวัญ",
    nameEn: "Gift Set",
    description: "ชุดของขวัญพิเศษ ให้คนพิเศษ",
    price: 199,
    image: "/images/yadom/products/product-4-gift.png"
  }
];
```

## File Structure

```
public/
└── images/
    └── yadom/
        └── products/
            ├── product-1-classic.png       ← Use this in your code
            ├── product-1-classic@2x.png    ← For retina displays
            ├── product-2-pocket.png
            ├── product-2-pocket@2x.png
            ├── product-3-premium.png
            ├── product-3-premium@2x.png
            ├── product-4-gift.png
            ├── product-4-gift@2x.png
            └── README.md                   ← Detailed documentation
```

## Next Steps

1. **Test the images**: Open your application and verify the product images display correctly
2. **Optimize if needed**: The images are already optimized, but you can use tools like TinyPNG if further optimization is needed
3. **Consider using next/image**: The Next.js Image component provides automatic optimization and lazy loading
4. **Add responsive images**: Use the `sizes` prop to serve appropriately sized images based on the viewport

## Alternative: Higher Quality Images

If you need higher quality images, you can export them directly from Figma:

1. Open the Figma file: https://www.figma.com/design/IasfDpqUwtRZOaWQ6C5Mtn/Joo-shadcn_ui-components-with-variables---Copy-?node-id=5021-220
2. Navigate to frame 5021:220
3. Select each product image individually
4. Go to File > Export > Export at 2x scale
5. Save to: `/public/images/yadom/products/`

## Image Specifications

- **Format**: PNG with transparency support
- **Color Space**: sRGB
- **Standard Size**: 630x520 pixels
- **Retina Size**: 1240x1040 pixels (2x scale)
- **Background**: Transparent (where applicable)
- **Optimization**: Already optimized for web use

## Troubleshooting

If images don't display:
- Check that the file paths are correct (should start with `/images/`)
- Verify the files exist in the public directory
- Check browser console for 404 errors
- Ensure Next.js is running and has picked up the new files

## Source Information

- **Figma File Key**: IasfDpqUwtRZOaWQ6C5Mtn
- **Node ID**: 5021:220
- **Frame Name**: Frame 1000003408
- **Section**: Yadom "Our Products" Section
- **Design Spec**: See `FIGMA_NODE_5021-220_DESIGN_SPEC.md`
