# LavaCloud Parkour - Endless Runner Games Collection

A comprehensive, SEO-optimized website featuring 18 premium endless runner and parkour games, organized into 4 thematic collections.

## 🎮 Project Overview

LavaCloud Parkour is a data-driven gaming portal that provides:
- **18 curated games** from authorized platforms (Y8, Gamezop, OnlineGames.io)
- **4 thematic collections** (Snow & Ice, Tunnel & Space, Forest & Mountain, City & Traffic)
- **Complete game guides** with strategies, tips, and FAQs
- **Responsive design** optimized for desktop and mobile
- **SEO-optimized** with structured data (Schema.org)
- **Ad-ready** with strategically placed ad slots

## 📁 Project Structure

```
LavaCloudParkour/
├── index.html                 # Homepage with featured games, collections, search
├── data/
│   ├── games.json            # Main English game data
│   └── games-zh.json         # Chinese version (for future i18n)
├── game/                     # Game detail pages (/game/<slug>)
│   ├── game-template.html
│   ├── groovy-ski.html
│   ├── snow-rider-3d.html
│   └── ... (16 total)
├── play/                     # Game play pages (/play/<slug>)
│   ├── play-template.html
│   ├── groovy-ski.html
│   └── ... (16 total)
├── guide/                    # Strategy guide pages (/guide/<slug>)
│   ├── guide-template.html
│   ├── groovy-ski.html
│   └── ... (16 total)
├── collections/              # Collection pages (/collections/<slug>)
│   ├── collection-template.html
│   ├── snow.html
│   ├── tunnel.html
│   ├── forest.html
│   └── city.html
├── assets/
│   ├── css/                  # Future custom CSS
│   ├── js/                   # Future custom JavaScript
│   └── images/               # Game thumbnails, icons
├── ARCHITECTURE.md           # Detailed architecture documentation
├── generate-pages.js         # Static page generator script
└── README.md                 # This file
```

## 🚀 Quick Start

### Generate Static Pages

All 53 static pages have been pre-generated. To regenerate:

```bash
node generate-pages.js
```

This creates:
- 16 game detail pages
- 16 game play pages
- 16 game guide pages
- 4 collection pages
- 1 homepage (already created)

### Local Development

Use any static web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit: http://localhost:8000

## 📊 Content Breakdown

### Games by Collection

**❄️ Snow & Ice** (3 games)
- Groovy Ski (Easy)
- Snow Rider 3D (Medium) ⭐ Featured
- Penguin Skip (Easy)

**🌀 Tunnel & Space** (4 games)
- Color Tunnel (Medium) ⭐ Featured
- Death Run 3D (Hard) ⭐ Featured
- Tunnel Rush (Medium)
- Slope (Medium) ⭐ Featured

**🏔️ Forest & Mountain** (5 games)
- Yeti Sensation (Medium)
- Ninja Speed Runner (Medium)
- Escape Run (Medium)
- Jom Jom Jump (Easy)
- Enchanted Waters (Medium)

**🏙️ City & Traffic** (4 games)
- Highway Traffic (Medium)
- Cross the Road (Easy) ⭐ Featured
- Stack Fire Ball (Easy)
- Skate Hooligans (Medium) ⭐ Featured

## 🔧 Technology Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Data**: JSON-based data architecture
- **Analytics**: Google Analytics (G-RK4Z12C7B2)
- **SEO**: Schema.org structured data (VideoGame, HowTo, ItemList)
- **Responsive**: Mobile-first design with Tailwind CSS

## 📈 SEO Features

### Meta Tags
- Comprehensive title, description, and keywords
- Open Graph tags for social sharing
- Canonical URLs for all pages

### Structured Data
- **VideoGame** schema for game pages
- **HowTo** schema for guide pages
- **ItemList** schema for collections and homepage

### URL Structure
- `/` - Homepage
- `/game/<slug>` - Game overview (indexed)
- `/play/<slug>` - Game player (noindex)
- `/guide/<slug>` - Strategy guide (indexed)
- `/collections/<slug>` - Theme collections (indexed)

## 💰 Monetization Ready

### Ad Placement Areas
1. **Homepage**: Below featured games
2. **Game Pages**: After description, in sidebar
3. **Guide Pages**: After overview, mid-content
4. **Collection Pages**: Top of page, between game grids

All ad slots marked with `.ad-placeholder` class for easy integration with:
- Google AdSense
- Media.net
- Other ad networks

## 🌐 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drop the folder or connect Git repo
- **Vercel**: Import project from Git
- **GitHub Pages**: Push to `gh-pages` branch
- **Cloudflare Pages**: Connect repository

### Traditional Hosting
1. Upload all files to web root
2. Ensure `.html` files are served correctly
3. Configure URL rewriting if needed (optional)

### URL Rewriting (Optional)

For clean URLs without `.html` extension:

**Nginx:**
```nginx
location / {
    try_files $uri $uri.html $uri/ =404;
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

## 🔄 Updating Content

### Adding a New Game

1. Add game data to `data/games.json`
2. Run `node generate-pages.js`
3. Deploy updated files

### Modifying Game Data

Edit `data/games.json` - all pages dynamically load data from this file.

### Adding New Collections

1. Add collection to `data/games.json` > `collections`
2. Run `node generate-pages.js`
3. Deploy

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Future Enhancements

- [ ] Multi-language support (use `games-zh.json`)
- [ ] User favorites/bookmarks
- [ ] Game ratings and reviews
- [ ] Advanced search filters
- [ ] Game leaderboards
- [ ] Social sharing features

## 📄 License

All game content is embedded from authorized platforms:
- Y8.com
- Gamezop
- OnlineGames.io

Website code: Copyright © 2024 LavaCloud Parkour

## 🤝 Credits

- Game sources: Y8, Gamezop, OnlineGames.io
- Framework: Tailwind CSS
- Icons: Unicode Emoji
- Analytics: Google Analytics

---

**Live Site**: https://lavacloud.online

For questions or support, refer to the `ARCHITECTURE.md` file for detailed technical documentation.
