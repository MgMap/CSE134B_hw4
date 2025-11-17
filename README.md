# Portfolio Website - CSE 134 HW2

**GitHub Repository**: [https://github.com/MgMap/cse134B_hw3](https://github.com/MgMap/cse134B_hw3)

**Live Site**: [https://cse134b-hw3-1tl.pages.dev/](https://cse134b-hw3-1tl.pages.dev/)

## Baseline 2024 CSS Feature Implementation

### Feature: `light-dark()` Function

This portfolio implements the `light-dark()` CSS function, which is part of the Baseline 2024 features. The `light-dark()` function provides automatic color adaptation based on the user's preferred color scheme (light or dark mode). This function works in conjunction with the `color-scheme` property to automatically select appropriate colors without requiring JavaScript or manual theme switching. When a user's system preference is set to dark mode, the function automatically uses the second color value; when set to light mode, it uses the first value. This provides a seamless, native dark mode experience that respects user preferences and improves accessibility for users who prefer reduced brightness or have visual sensitivities.

**Technical Implementation:**
- Meta tag: `<meta name="view-transition" content="same-origin">` in all HTML pages
- CSS: `@view-transition { navigation: auto; }` for MPA transitions
- Animations: Fade-out on exit, fade-in + slide-up on entry (0.4s each)
- JavaScript: Theme picker runs immediately (non-deferred) to prevent layout shift during transitions

## Extra Credit: Advanced Theme Picker (5 pts)

### Implementation
I've expanded the basic Light/Dark theme toggle into a **multi-theme picker** with 5 preset themes:

1. **Light** - Soft pastels on white/cream backgrounds (original light theme)
2. **Dark** - Deep indigo/navy with neon accents (original dark theme)
3. **Ocean** - Deep blues and teals with aquatic palette
4. **Forest** - Greens and earth tones with nature-inspired colors
5. **Sunset** - Warm oranges, purples, and golden hues

### Features
- **Text Colors**: Each theme has custom `--color-text` and `--color-text-muted` variables
- **Background Colors**: Unique `--color-bg`, `--color-bg-alt`, and `--color-bg-card` for each theme
- **Font Families**: Themes can specify different fonts (Ocean uses Space Mono, others use JetBrains Mono)
- **Simple UI**: Dropdown selector in upper-right corner - no RGB/Hex knowledge required
- **Persistence**: Theme preference saved in localStorage
- **Accessibility**: Respects system preferences as default, maintains colorScheme for native controls

### How to Use
1. Open any page on the deployed site
2. Look for the dropdown in the upper-right corner of the header
3. Select any theme: Light, Dark, Ocean, Forest, or Sunset
4. Theme applies instantly and persists across page navigation
5. Works seamlessly with View Transition API

### Technical Details
- **CSS**: 5 `[data-theme="..."]` selectors with complete CSS variable overrides (lines 69-164 in styles.css)
- **JavaScript**: Updated theme-toggle.js to support multiple themes with validation and colorScheme mapping
- **HTML**: Replaced button with `<select>` dropdown on all 6 pages
- **No breaking changes**: Maintains backward compatibility with existing localStorage entries



