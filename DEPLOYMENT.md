# LavaCloud Parkour - Deployment Guide

## ✅ Pre-Deployment Checklist

### Files Generated
- [x] Homepage (index.html)
- [x] 16 Game detail pages (/game/)
- [x] 16 Game play pages (/play/)
- [x] 16 Game guide pages (/guide/)
- [x] 4 Collection pages (/collections/)
- [x] Data files (games.json, games-zh.json)
- [x] Documentation (README.md, ARCHITECTURE.md)

**Total: 53 HTML pages + 1 homepage = 54 pages**

### Pre-Launch Tasks

#### 1. Content Verification
- [ ] Test all game iframes load correctly
- [ ] Verify all internal links work
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Test search and filter functionality
- [ ] Validate all 18 games appear correctly

#### 2. SEO Preparation
- [ ] Create `og-image.png` (1200x630px) for social sharing
- [ ] Generate `sitemap.xml`
- [ ] Create `robots.txt`
- [ ] Add Google Search Console verification
- [ ] Submit sitemap to Google Search Console

#### 3. Analytics & Monetization
- [ ] Verify Google Analytics tracking (G-RK4Z12C7B2)
- [ ] Replace `.ad-placeholder` divs with actual ad code
- [ ] Test ad display on different pages
- [ ] Configure ad units in Google AdSense

#### 4. Performance Optimization
- [ ] Enable gzip/brotli compression on server
- [ ] Configure caching headers
- [ ] Add CDN if needed
- [ ] Test page load speeds
- [ ] Optimize images if added

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

**Why Netlify?**
- Free tier includes SSL, CDN, and forms
- Automatic deployments from Git
- Built-in redirects and rewrites
- Easy custom domain setup

**Steps:**
1. Create account at netlify.com
2. Click "New site from Git"
3. Connect your repository
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
5. Click "Deploy site"
6. Configure custom domain (lavacloud.online)
7. Enable HTTPS (automatic)

**Post-Deploy:**
- Add `_redirects` file for clean URLs (optional)
- Configure custom headers for caching

### Option 2: Vercel

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy
4. Configure custom domain

### Option 3: GitHub Pages

**Steps:**
1. Create repository on GitHub
2. Push project files
3. Enable GitHub Pages in Settings
4. Set source to main branch
5. Configure custom domain

**Note:** GitHub Pages doesn't support custom redirects natively.

### Option 4: Traditional Hosting (cPanel/FTP)

**Steps:**
1. Access your hosting control panel
2. Upload all files to `public_html` or `www`
3. Ensure file permissions are correct (644 for files, 755 for directories)
4. Configure `.htaccess` for URL rewriting (see below)

## 📝 Additional Configuration Files

### robots.txt

Create `/robots.txt`:

```txt
User-agent: *
Allow: /
Disallow: /play/
Disallow: /assets/

Sitemap: https://lavacloud.online/sitemap.xml
```

### sitemap.xml

Create `/sitemap.xml` (example structure):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lavacloud.online/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <!-- Game pages -->
  <url>
    <loc>https://lavacloud.online/game/snow-rider-3d</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <!-- Guide pages -->
  <url>
    <loc>https://lavacloud.online/guide/snow-rider-3d</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
  <!-- Collections -->
  <url>
    <loc>https://lavacloud.online/collections/snow</loc>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
</urlset>
```

### .htaccess (Apache)

Create `/.htaccess`:

```apache
# Enable rewrite engine
RewriteEngine On

# Remove .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/json application/javascript text/xml application/xml
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 day"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### _redirects (Netlify)

Create `/_redirects`:

```
# Clean URLs
/game/:slug  /game/:slug.html  200
/play/:slug  /play/:slug.html  200
/guide/:slug  /guide/:slug.html  200
/collections/:slug  /collections/:slug.html  200

# 404 page
/*  /index.html  404
```

## 🔍 Post-Deployment Testing

### Functionality Tests
- [ ] Homepage loads and displays featured games
- [ ] Collections page navigation works
- [ ] Search/filter functionality on homepage
- [ ] All game detail pages load
- [ ] Play pages embed iframes correctly
- [ ] Guide pages display content
- [ ] Related games links work
- [ ] Breadcrumb navigation correct

### SEO Tests
- [ ] Meta tags present on all pages
- [ ] Canonical URLs set correctly
- [ ] Schema.org markup validates (use schema.org validator)
- [ ] Open Graph tags work (test with Facebook debugger)
- [ ] XML sitemap accessible
- [ ] robots.txt accessible

### Performance Tests
- [ ] PageSpeed Insights score (aim for 90+)
- [ ] Mobile-friendly test (Google)
- [ ] Core Web Vitals pass
- [ ] All pages load under 3 seconds

### Analytics Tests
- [ ] Google Analytics tracking works
- [ ] Page views recorded
- [ ] Event tracking works (game plays)

## 📊 Monitoring & Maintenance

### Weekly Tasks
- Check Google Search Console for errors
- Review Google Analytics traffic
- Monitor ad performance
- Check for broken links

### Monthly Tasks
- Update game data if needed
- Add new games (if applicable)
- Review and improve content
- Check competitors

### Tools to Use
- **Google Search Console**: Monitor search performance
- **Google Analytics**: Track visitors and behavior
- **Uptime Robot**: Monitor site uptime
- **Pingdom**: Performance monitoring

## 🎯 SEO Strategy Post-Launch

### Week 1
- Submit sitemap to Google Search Console
- Submit to Bing Webmaster Tools
- Share on social media
- Post on Reddit (r/WebGames, r/incremental_games)

### Week 2-4
- Create backlinks (guest posts, directories)
- Engage in gaming communities
- Monitor keyword rankings
- Optimize underperforming pages

### Ongoing
- Publish regular content updates
- Add new games monthly
- Build quality backlinks
- Engage with users

## 💰 Monetization Setup

### Google AdSense
1. Apply for AdSense account
2. Get approval
3. Create ad units:
   - Display ads (responsive): For desktop/mobile
   - In-feed ads: Between game cards
   - Multiplex ads: For related content
4. Replace `.ad-placeholder` divs with ad code
5. Monitor performance and adjust

### Alternative Ad Networks
- **Media.net**: Good for US/UK traffic
- **PropellerAds**: Good for global traffic
- **AdThrive**: Requires 100K+ pageviews/month
- **Ezoic**: AI-driven ad optimization

## 🔄 Content Update Workflow

### Adding New Games
1. Add game data to `/data/games.json`
2. Run `node generate-pages.js`
3. Test locally
4. Commit to Git
5. Push to production (auto-deploy)
6. Update sitemap.xml
7. Submit to Google Search Console

### Modifying Existing Games
1. Edit `/data/games.json`
2. Pages auto-update (data-driven)
3. Test changes
4. Deploy

## 📱 Social Media Integration

### Create Social Accounts
- Twitter/X: @LavaCloudGames
- Facebook Page
- Instagram
- TikTok (game clips)

### Sharing Strategy
- Share featured games weekly
- Post tips and tricks
- Create video content
- Engage with gaming community

## ⚡ Performance Optimization Tips

1. **Enable CDN**: Use Cloudflare for global distribution
2. **Image Optimization**: Use WebP format for images
3. **Lazy Loading**: Add loading="lazy" to iframes
4. **Minification**: Minify CSS/JS if added custom code
5. **Caching**: Set proper cache headers
6. **Compression**: Enable gzip/brotli

## 🎉 Launch Checklist

Final checks before announcing:
- [ ] All pages tested
- [ ] Analytics working
- [ ] SEO meta tags correct
- [ ] Ads displaying (if applicable)
- [ ] Mobile responsive
- [ ] Fast load times
- [ ] No broken links
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Social sharing working

**You're ready to launch! 🚀**

---

For technical questions, see `ARCHITECTURE.md`
For project overview, see `README.md`
