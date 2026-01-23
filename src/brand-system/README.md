# INSPIRON TECH: BRAND_SYSTEM (v2.0)
> **Version:** 2026.1 (Golden Release)
> **Status:** GEOMETRICALLY LOCKED
> **Scope:** PUBLIC AUTHORITY (`brand-` prefix)

This repository contains the definitive, n-Law compliant brand assets for Inspiron Tech. These files are the **Single Source of Truth** for all production, web, and print applications.

## 📂 Repository Structure

```text
INSPIRON_TECH_BRAND_SYSTEM/
├── assets/
│   └── vectors/
│       ├── master_icon.svg        # The 500x500 Geometric Icon (Masked Gap).
│       └── brand_lockup.svg       # The Full Logo (Icon + Wordmark) - Vertically Centered.
├── docs/
│   ├── THE_n_LAW.md               # The Mathematical Constitution.
│   └── blueprint_reference.svg    # User-created layout reference (Visual Guide).
└── README.md
```

## 📐 The n-Law Standards

All assets strictly adhere to the guidelines defined in `docs/THE_n_LAW.md`.

### 1. The Master Icon (`assets/vectors/master_icon.svg`)
-   **Composition:** Left Loop + Right Leg + Spark Dot.
-   **Optimization:** A precise **12px Mask** ensures cut-through transparency on the loop overlap.
-   **Robustness:** Uses `fill-rule="nonzero"` to prevent rendering glitches in Safari/Illustrator.
-   **Box:** Locked to **500x500** unit coordinate system.

### 2. The Brand Lockup (`assets/vectors/brand_lockup.svg`)
-   **Typography:** Original vector paths restored from source.
-   **Palette:**
    -   `inspiron`: **White** (#FFFFFF).
    -   `TECH`: **Precision Gold** (#FFD700).
-   **Geometry:**
    -   **Vertical Alignment:** The Wordmark is **Vertically Centered** relative to the Icon's geometric midpoint (Y=270px).
    -   **Spacing Constant:** A mandatory **67px Gap** (20% of Icon Width) separates the mark and type.

## 🚀 Usage Protocols

1.  **Web:** Use `master_icon.svg` directly. It includes CSS overrides `style="fill:..."` to ensure Brand Colors persist even if external CSS fails.
2.  **Print:** Convert `brand_lockup.svg` to CMYK if necessary, but maintain the vector curves.
3.  **Forbidden:** Do not "Release Compound Paths" or alter the `<mask>` definitions.

---
*Architected by MD ABU HASAN under the n-Law.*
