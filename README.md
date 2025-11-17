# Portfolio Website - CSE 134 HW2

**GitHub Repository**: [https://github.com/MgMap/cse134B_hw3](https://github.com/MgMap/cse134B_hw3)

**Live Site**: [https://cse134b-hw3-1tl.pages.dev/](https://cse134b-hw3-1tl.pages.dev/)

## Baseline 2024 CSS Feature Implementation

### Feature: `light-dark()` Function

This portfolio implements the `light-dark()` CSS function, which is part of the Baseline 2024 features. The `light-dark()` function provides automatic color adaptation based on the user's preferred color scheme (light or dark mode). This function works in conjunction with the `color-scheme` property to automatically select appropriate colors without requiring JavaScript or manual theme switching. When a user's system preference is set to dark mode, the function automatically uses the second color value; when set to light mode, it uses the first value. This provides a seamless, native dark mode experience that respects user preferences and improves accessibility for users who prefer reduced brightness or have visual sensitivities.

## View Transition API Implementation (MPA Approach)

### i) SPA vs MPA Approach
**I chose to use an MPA (Multi-Page Application) approach** for implementing the View Transition API. This provides smooth cross-document transitions between separate HTML pages (index.html, projects.html, experiences.html, education.html, form-no-js.html, form-with-js.html).

### j) How to Trigger View Transitions
To view the View Transition API implementation, open the deployed site in **Chrome 126+ or Edge 126+** (required for cross-document view transitions). Once on the site, simply click any navigation link in the header menu (HOME, PROJECTS, EXPERIENCES, EDUCATION, CONTACT, or CONTACT JS) to trigger the transition. You will observe a smooth fade-out animation (0.4s) of the current page followed by a fade-in and slide-up animation (0.4s) of the new page. The transitions work in both directions for all page navigations. To verify the API is working, open the browser console (F12) and you should see "View Transition API enabled for MPA navigation" logged. Note that transitions will only work in Chrome/Edge 126+ and will gracefully fall back to standard navigation in unsupported browsers. If you have `prefers-reduced-motion` enabled in your OS accessibility settings, the transitions will be disabled automatically.

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



