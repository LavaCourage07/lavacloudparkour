/**
 * Static Page Generator for LavaCloud Parkour
 * Generates all game detail, play, guide, and collection pages
 */

const fs = require('fs');
const path = require('path');

// Read games data
const gamesData = JSON.parse(fs.readFileSync('./data/games.json', 'utf8'));

// Read templates
const gameTemplate = fs.readFileSync('./game/game-template.html', 'utf8');
const playTemplate = fs.readFileSync('./play/play-template.html', 'utf8');
const guideTemplate = fs.readFileSync('./guide/guide-template.html', 'utf8');
const collectionTemplate = fs.readFileSync('./collections/collection-template.html', 'utf8');

console.log('🚀 Starting static page generation...\n');

/**
 * Generate game detail pages (/game/<slug>)
 */
function generateGamePages() {
    console.log('📄 Generating game detail pages...');
    let count = 0;

    gamesData.games.forEach(game => {
        const filename = `./game/${game.slug}.html`;
        fs.writeFileSync(filename, gameTemplate, 'utf8');
        count++;
        console.log(`  ✓ Generated: ${filename}`);
    });

    console.log(`  ✅ Created ${count} game detail pages\n`);
}

/**
 * Generate game play pages (/play/<slug>)
 */
function generatePlayPages() {
    console.log('🎮 Generating game play pages...');
    let count = 0;

    gamesData.games.forEach(game => {
        const filename = `./play/${game.slug}.html`;
        fs.writeFileSync(filename, playTemplate, 'utf8');
        count++;
        console.log(`  ✓ Generated: ${filename}`);
    });

    console.log(`  ✅ Created ${count} game play pages\n`);
}

/**
 * Generate game guide pages (/guide/<slug>)
 */
function generateGuidePages() {
    console.log('📖 Generating game guide pages...');
    let count = 0;

    gamesData.games.forEach(game => {
        const filename = `./guide/${game.slug}.html`;
        fs.writeFileSync(filename, guideTemplate, 'utf8');
        count++;
        console.log(`  ✓ Generated: ${filename}`);
    });

    console.log(`  ✅ Created ${count} game guide pages\n`);
}

/**
 * Generate collection pages (/collections/<slug>)
 */
function generateCollectionPages() {
    console.log('🗂️  Generating collection pages...');
    let count = 0;

    gamesData.collections.forEach(collection => {
        const filename = `./collections/${collection.slug}.html`;
        fs.writeFileSync(filename, collectionTemplate, 'utf8');
        count++;
        console.log(`  ✓ Generated: ${filename}`);
    });

    console.log(`  ✅ Created ${count} collection pages\n`);
}

/**
 * Generate summary report
 */
function generateReport() {
    const totalPages = (gamesData.games.length * 3) + gamesData.collections.length + 1; // games * 3 + collections + homepage

    console.log('📊 Generation Summary');
    console.log('═══════════════════════════════════');
    console.log(`  Total Games: ${gamesData.games.length}`);
    console.log(`  Total Collections: ${gamesData.collections.length}`);
    console.log(`  Game Detail Pages: ${gamesData.games.length}`);
    console.log(`  Game Play Pages: ${gamesData.games.length}`);
    console.log(`  Game Guide Pages: ${gamesData.games.length}`);
    console.log(`  Collection Pages: ${gamesData.collections.length}`);
    console.log(`  Homepage: 1`);
    console.log(`  ───────────────────────────────────`);
    console.log(`  Total Pages Generated: ${totalPages}`);
    console.log('═══════════════════════════════════\n');

    // List all games by theme
    console.log('📋 Games by Theme:');
    gamesData.collections.forEach(collection => {
        const games = gamesData.games.filter(g => collection.games.includes(g.slug));
        console.log(`  ${collection.icon} ${collection.name}: ${games.length} games`);
        games.forEach(g => {
            console.log(`     - ${g.title} (${g.difficulty})`);
        });
    });

    console.log('\n✨ All pages generated successfully!');
    console.log('💡 You can now deploy these pages to your web server.\n');
}

/**
 * Main execution
 */
try {
    generateGamePages();
    generatePlayPages();
    generateGuidePages();
    generateCollectionPages();
    generateReport();
} catch (error) {
    console.error('❌ Error generating pages:', error);
    process.exit(1);
}
