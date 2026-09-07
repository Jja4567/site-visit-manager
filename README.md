# Site Visit Manager 🏢

A **Progressive Web App (PWA)** to keep track of site visits, companies, and inspection history - all in one place!

## Features ✨

✅ **Offline First** - Works completely offline after first load  
✅ **No Account Required** - All data stored locally on your device  
✅ **PWA Install** - Add to home screen for app-like experience  
✅ **Search & Filter** - Find companies and visits by date range  
✅ **Backup/Restore** - Export and import your data anytime  
✅ **Responsive Design** - Works on all devices (mobile, tablet, desktop)  
✅ **Fast & Lightweight** - No dependencies, pure vanilla JavaScript  

## How to Use 🚀

### Online (GitHub Pages)
1. Visit: https://jja4567.github.io/site-visit-manager/
2. Start adding site visits
3. (Optional) Click "Install" when prompted to add to home screen

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Start managing your site visits!

## Installation on Home Screen 📱

**On Android (Chrome):**
1. Open the app in Chrome
2. Tap the menu (⋮) → "Install app" or "Add to Home Screen"
3. Confirm - app icon will appear on your home screen

**On iPhone (Safari):**
1. Open in Safari
2. Tap Share → "Add to Home Screen"
3. Name it and add - app will be available from home screen

## Data Storage 💾

- All site visit records are stored in **browser's LocalStorage**
- Data persists even after closing the app
- No data is sent to any server
- Use "Export Backup" to save your data
- Use "Import Backup" to restore from a previous export

## File Structure 📁

```
.
├── index.html       # Main app UI & logic
├── manifest.json    # PWA configuration
├── sw.js           # Service Worker (offline support)
└── README.md       # This file
```

## Browser Support 🌐

- ✅ Chrome/Chromium (Android, Desktop)
- ✅ Safari (iPhone, iPad, Mac)
- ✅ Firefox
- ✅ Edge
- ✅ Samsung Internet

## Tech Stack 🛠️

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox
- **JavaScript (Vanilla)** - No frameworks, pure ES6+
- **Service Worker** - Offline functionality
- **Web App Manifest** - PWA installation
- **LocalStorage API** - Data persistence

## License 📄

Free to use and modify!

## Feedback & Issues 💬

If you find any bugs or have suggestions, feel free to open an issue on GitHub!

---

**Made with ❤️ using GitHub Copilot**