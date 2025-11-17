/**
 * Multi-Theme Picker Script
 *
 * This script handles both:
 * 1. Initial theme setup (runs immediately to prevent layout shift)
 * 2. Change event listener for theme picker dropdown (runs on DOMContentLoaded)
 *
 * IMPORTANT: This file must be loaded WITHOUT the 'defer' attribute
 * to ensure theme is set before the page renders.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'theme'; // values: 'light' | 'dark' | 'ocean' | 'forest' | 'sunset'
  const VALID_THEMES = ['light', 'dark', 'ocean', 'forest', 'sunset'];
  const DARK_THEMES = ['dark', 'ocean', 'forest', 'sunset']; // Themes that should use dark colorScheme
  const root = document.documentElement;

  function applyTheme(theme) {
    // Validate theme
    if (!VALID_THEMES.includes(theme)) {
      theme = 'light'; // fallback to light if invalid
    }

    // Set data-theme attribute
    root.setAttribute('data-theme', theme);

    // Set colorScheme based on whether theme is light or dark-based
    if (DARK_THEMES.includes(theme)) {
      root.style.colorScheme = 'dark';
    } else {
      root.style.colorScheme = 'light';
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(t) {
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch (e) {
      // ignore storage errors
    }
  }

  // ============================================================
  // PART 1: Initial theme setup (runs immediately)
  // ============================================================
  const stored = getStoredTheme();
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');

  // Apply theme immediately to document root
  applyTheme(theme);

  // ============================================================
  // PART 2: Dropdown initialization and event listener (runs on DOMContentLoaded)
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    const picker = document.getElementById('theme-picker');
    if (!picker) return; // no picker to enhance

    // Set initial dropdown value
    picker.value = theme;

    // Add change event listener
    picker.addEventListener('change', () => {
      const selectedTheme = picker.value;
      applyTheme(selectedTheme);
      setStoredTheme(selectedTheme);
    });
  });

  // expose a small public API for debugging if needed
  window.__setSiteTheme = function (t) { applyTheme(t); setStoredTheme(t); };
})();
