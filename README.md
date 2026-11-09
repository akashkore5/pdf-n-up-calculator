# @akashkore5/pdf-n-up-calculator

> Calculate N-up grid layouts, bounding boxes, and imposition geometries for 2-in-1, 4-in-1, and multi-page per sheet PDF documents.

---

### 🌐 Live In-Browser Client-Side Tool
Need to quickly impose and print multi-page sheets without command lines or Adobe Acrobat subscriptions?
Use the free web app at **[EditPDFKit - 2-in-1 / 4-in-1 PDF Maker](https://www.editpdfkit.com/tools/pdf-n-up)**.

---

### Installation

```bash
npm install @akashkore5/pdf-n-up-calculator
```

### Usage

```javascript
const { calculateNUpGrid } = require('@akashkore5/pdf-n-up-calculator');

// Calculate 4-in-1 layout for standard A4 sheet
const layout = calculateNUpGrid(4, 595.28, 841.89);
console.log(layout);
// { cols: 2, rows: 2, slotWidth: 297.64, slotHeight: 420.945, totalSlots: 4 }
```

### License
MIT © [Akash Kore](https://github.com/akashkore5) • [EditPDFKit](https://www.editpdfkit.com)
