const fs = require('fs');

// 读取现有的 games.json
const gamesData = JSON.parse(fs.readFileSync('./data/games.json', 'utf8'));

// 图片映射（根据文件扩展名）
const imageMapping = {
  "groovy-ski": "images/games/groovy-ski.jpg",
  "penguin-skip": "images/games/penguin-skip.jpg",
  "ninja-speed-runner": "images/games/ninja-speed-runner.jpg",
  "escape-run": "images/games/escape-run.jpg",
  "jom-jom-jump": "images/games/jom-jom-jump.jpg",
  "enchanted-waters": "images/games/enchanted-waters.jpg",
  "snow-rider-3d": "images/games/snow-rider-3d.webp",
  "color-tunnel": "images/games/color-tunnel.webp",
  "death-run-3d": "images/games/death-run-3d.webp",
  "tunnel-rush": "images/games/tunnel-rush.webp",
  "slope": "images/games/slope.webp",
  "yeti-sensation": "images/games/yeti-sensation.webp",
  "skate-hooligans": "images/games/skate-hooligans.webp",
  "highway-traffic": "images/games/highway-traffic.jpg",
  "cross-the-road": "images/games/cross-the-road.jpg",
  "stack-fire-ball": "images/games/stack-fire-ball.jpg"
};

// 为每个游戏添加 imageUrl 字段
gamesData.games = gamesData.games.map(game => {
  return {
    ...game,
    imageUrl: imageMapping[game.slug] || "images/games/default.jpg"
  };
});

// 写回文件
fs.writeFileSync('./data/games.json', JSON.stringify(gamesData, null, 2));

console.log('✅ Successfully added imageUrl to all games!');
console.log(`📊 Updated ${gamesData.games.length} games`);
