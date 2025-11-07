# LavaCloud Games - 网站架构设计文档

## 📋 目录
1. [站点信息架构(IA)与URL规划](#1-站点信息架构ia与url规划)
2. [页面层次结构](#2-页面层次结构)
3. [SEO策略与关键词布局](#3-seo策略与关键词布局)
4. [内容结构与广告位布局](#4-内容结构与广告位布局)
5. [技术实现方案](#5-技术实现方案)
6. [文件结构](#6-文件结构)

---

## 1. 站点信息架构(IA)与URL规划

### 1.1 顶层导航结构
```
┌─ 首页 (/)
├─ 主题分类
│  ├─ 冰雪/极地 (/collections/ice-snow)
│  ├─ 隧道/太空 (/collections/tunnel)
│  ├─ 森林/山地 (/collections/forest)
│  └─ 城市/交通 (/collections/city)
├─ 特色合集
│  ├─ 高速反应类 (/collections/reaction)
│  └─ 无尽跑酷 (/collections/endless-runner)
├─ 攻略中心 (/guides)
└─ 关于/广告 (/about, /ads)
```

### 1.2 URL路由设计

| 页面类型 | URL格式 | SEO索引 | 说明 |
|---------|---------|---------|------|
| 游戏概览页 | `/game/<slug>` | ✅ 索引 | 游戏介绍、玩法、操作说明 |
| 游戏试玩页 | `/play/<slug>` | ❌ noindex | 纯iframe播放器 |
| 游戏攻略页 | `/guide/<slug>` | ✅ 索引 | 详细攻略、技巧、FAQ |
| 主题聚合页 | `/collections/<theme>` | ✅ 索引 | 主题游戏列表 |
| 合集榜单 | `/lists/<name>` | ✅ 索引 | 精选推荐列表 |

### 1.3 站内链路逻辑
```
首页
 ↓
主题页 → 游戏卡片
 ↓
游戏概览页
 ├→ "开始游戏" → /play/<slug> (试玩页)
 ├→ "查看攻略" → /guide/<slug> (攻略页)
 └→ "相关游戏" → 同主题其他游戏
```

---

## 2. 页面层次结构

### 2.1 首页 (index.html)
```
┌─ Header (导航栏)
├─ Hero Section
│  ├─ 标题: LavaCloud Games
│  ├─ Slogan: 无尽跑酷游戏合集
│  └─ 搜索框
├─ Featured Games (精选推荐 4-6款)
├─ Collections by Theme
│  ├─ 冰雪极地 (3款预览)
│  ├─ 隧道太空 (3款预览)
│  ├─ 森林山地 (3款预览)
│  └─ 城市交通 (3款预览)
├─ All Games Grid (18款游戏卡片)
│  └─ 筛选器: 主题/难度/来源
└─ Footer
```

### 2.2 游戏概览页 (/game/<slug>)
```
┌─ Breadcrumb (首页 > 主题 > 游戏名)
├─ Game Header
│  ├─ H1: 游戏名
│  ├─ 主题标签 + 来源平台
│  └─ 一句话介绍 (≤80字)
├─ CTA Buttons
│  ├─ [开始游戏] → /play/<slug>
│  └─ [查看攻略] → /guide/<slug>
├─ [广告位 1] 非遮挡横幅
├─ Game Info Section
│  ├─ 游戏简介
│  ├─ 操作方式
│  ├─ 游戏特色
│  └─ 标签
├─ [广告位 2] 中部穿插
├─ Related Games (同主题推荐 3款)
└─ Footer
```

### 2.3 游戏试玩页 (/play/<slug>)
```
<meta name="robots" content="noindex,follow">
<link rel="canonical" href="https://lavacloud.online/game/<slug>">

┌─ Minimal Header (返回概览页)
├─ Game Player (iframe 全屏容器)
│  ├─ 16:9 响应式容器
│  ├─ allowfullscreen
│  └─ loading="lazy"
├─ Controls Bar
│  ├─ [全屏]
│  ├─ [重新加载]
│  └─ [返回介绍]
└─ Minimal Footer
```

### 2.4 游戏攻略页 (/guide/<slug>)
```
┌─ Breadcrumb
├─ Article Header
│  ├─ H1: {游戏名} 攻略与技巧
│  └─ 更新日期
├─ Table of Contents (侧边栏/粘性)
├─ [广告位 1] 首屏下方
├─ 攻略内容
│  ├─ 游戏概述
│  ├─ 基础操作
│  ├─ 得分机制
│  ├─ 进阶技巧
│  ├─ 常见误区
│  └─ 练习建议
├─ FAQ Section (3-5问题)
├─ [广告位 2] 结尾
├─ Related Guides
└─ Footer
```

### 2.5 主题聚合页 (/collections/<theme>)
```
┌─ Header
├─ Theme Hero
│  ├─ H1: 主题名称 (中英双语)
│  └─ 主题介绍
├─ Filter Bar
│  ├─ 难度
│  ├─ 速度
│  └─ 平台支持
├─ Games Grid
│  └─ [每6卡插入1广告位]
└─ Footer
```

---

## 3. SEO策略与关键词布局

### 3.1 核心关键词矩阵

| 层级 | 关键词类型 | 示例 |
|------|-----------|------|
| **品牌词** | 站点名 | LavaCloud Games, LavaCloud无尽跑酷 |
| **品类词** | 游戏类型 | 无尽跑酷, 隧道游戏, 反应类小游戏, endless runner |
| **长尾词** | 具体需求 | 网页版跑酷游戏, 不用下载的小游戏, 在线全屏游戏 |
| **地域词** | 本地化 | 中国无尽游戏, 免费在线小游戏 |
| **来源词** | 平台名 | Y8游戏, Gamezop小游戏, OnlineGames |

### 3.2 页面级SEO模板

#### 概览页 Meta 示例 (Slope)
```html
<title>Slope - 在线无尽下坡小游戏 | 高速反应挑战 | LavaCloud</title>
<meta name="description" content="Slope是一款节奏明快的无尽下坡游戏。在随机生成的坡道上控制小球加速前进,躲避红色障碍。网页版即点即玩,支持全屏,适合挑战反应速度。">
<meta name="keywords" content="Slope, 无尽下坡, 反应游戏, 在线小游戏, Y8游戏, 免费网页游戏">
<link rel="canonical" href="https://lavacloud.online/game/slope">
```

#### 攻略页 Meta 示例
```html
<title>Slope游戏攻略 - 高分技巧与操作指南 | LavaCloud</title>
<meta name="description" content="Slope无尽下坡游戏完全攻略:基础操作、进阶技巧、得分策略。学习如何在高速段控线、躲避红色障碍、冲击排行榜高分。">
```

### 3.3 结构化数据策略

#### VideoGame Schema (概览页)
```json
{
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "游戏名",
  "url": "https://lavacloud.online/game/<slug>",
  "genre": ["Endless Runner", "Skill"],
  "gamePlatform": "Web",
  "publisher": {"@type": "Organization", "name": "来源平台"},
  "sameAs": ["原始游戏URL"],
  "description": "游戏描述"
}
```

#### HowTo Schema (攻略页)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "游戏名攻略",
  "step": [
    {"@type": "HowToStep", "name": "基础操作", "text": "..."},
    {"@type": "HowToStep", "name": "得分技巧", "text": "..."},
    {"@type": "HowToStep", "name": "进阶策略", "text": "..."}
  ]
}
```

#### ItemList Schema (主题页)
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "url": "..."},
    {"@type": "ListItem", "position": 2, "url": "..."}
  ]
}
```

---

## 4. 内容结构与广告位布局

### 4.1 广告位规划

#### 游戏概览页
- **位置1**: 首屏CTA按钮下方 (横幅, 非遮挡)
- **位置2**: 游戏信息中部 (自然穿插)
- **要求**: 不影响阅读体验, CLS优化

#### 游戏攻略页
- **位置1**: 首屏目录下方 (横幅)
- **位置2**: 文章结尾 (推荐区前)
- **要求**: 内容可读性优先, 避免中途打断

#### 主题聚合页
- **位置**: 每6个游戏卡片插入1个推荐位
- **样式**: 与游戏卡片尺寸一致, 视觉融入

#### 试玩页
- **位置**: 不放置广告 (专注游戏体验)

### 4.2 内容大纲模板

#### 游戏概览页内容结构
```markdown
# {游戏名} - {一句话定位}

## 游戏简介
- 核心玩法 (100-150字)
- 开发者/来源平台
- 适合人群

## 操作方式
- 键盘: 方向键/WASD/空格
- 鼠标: (如适用)
- 移动端: 触屏手势

## 游戏特色
- 亮点1: 视觉/节奏
- 亮点2: 难度/挑战
- 亮点3: 系统/成长

## 玩法要点
- 基础策略
- 注意事项
- 进阶建议

## 标签
#主题 #难度 #来源
```

#### 游戏攻略页内容结构
```markdown
# {游戏名} 完全攻略

## 目录
1. 游戏概述
2. 基础操作
3. 得分机制
4. 进阶技巧
5. 常见误区
6. 练习建议
7. 常见问题FAQ

## 1. 游戏概述
- 游戏类型与定位
- 核心目标
- 难度评估

## 2. 基础操作
- 详细控制方式
- 操作技巧
- 手感调整

## 3. 得分机制
- 分数来源
- 连击/倍数
- 解锁条件

## 4. 进阶技巧
- 路线选择
- 节奏把控
- 预判策略
- 高分技巧

## 5. 常见误区
- 新手易犯错误
- 操作习惯纠正

## 6. 练习建议
- 阶段性目标
- 训练方法

## 7. 常见问题FAQ
Q: 如何全屏?
A: ...

Q: 支持移动端吗?
A: ...

Q: 如何解锁新角色/道具?
A: ...
```

---

## 5. 技术实现方案

### 5.1 数据驱动架构

#### games.json 数据结构
```json
{
  "games": [
    {
      "slug": "color-tunnel",
      "title": "Color Tunnel",
      "titleCN": "彩色隧道",
      "theme": "tunnel",
      "source": "Y8",
      "iframeSrc": "https://y8.com/embed/color_tunnel",
      "shortDesc": "高速色彩隧道的闪避类小游戏",
      "fullDesc": "详细介绍文字...",
      "controls": ["Move", "Fullscreen"],
      "tags": ["无尽", "反应", "隧道", "高速"],
      "difficulty": "medium",
      "featured": true,
      "popularity": 95,
      "relatedGames": ["death-run-3d", "tunnel-rush", "blue-vortex"],
      "howToPlay": {
        "objective": "...",
        "controls": "...",
        "tips": ["...", "..."]
      },
      "guide": {
        "basics": "...",
        "scoring": "...",
        "advanced": "...",
        "faq": [
          {"q": "...", "a": "..."}
        ]
      }
    }
  ],
  "collections": [
    {
      "slug": "ice-snow",
      "nameCN": "冰雪极地",
      "nameEN": "Ice & Snow",
      "description": "...",
      "games": ["groovy-ski", "snow-rider-3d", "penguin-skip"]
    }
  ]
}
```

### 5.2 技术栈选择

#### 方案A: 纯静态 (推荐)
- **工具**: 原生HTML + Tailwind CSS + Vanilla JS
- **优势**: 零依赖, 极速加载, 易部署
- **适用**: 18款游戏规模, 快速迭代

#### 方案B: 静态生成
- **工具**: Next.js (SSG) / Astro
- **优势**: 组件化, 数据管理便捷
- **适用**: 未来扩展至100+游戏

### 5.3 iframe 最佳实践
```html
<div class="aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
  <iframe
    src="游戏URL"
    class="w-full h-full border-0"
    allow="fullscreen; autoplay; encrypted-media"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-orientation-lock allow-popups allow-forms">
  </iframe>
</div>
```

### 5.4 性能优化
- **图片**: WebP格式, lazy loading
- **字体**: 系统字体优先, 减少网络请求
- **CSS**: Tailwind JIT模式, 按需生成
- **JS**: 最小化依赖, 代码分割
- **缓存**: Service Worker (可选)

---

## 6. 文件结构

```
LavaCloudParkour/
├── index.html                    # 首页
├── data/
│   └── games.json                # 游戏数据源
├── game/                         # 游戏概览页
│   ├── groovy-ski.html
│   ├── snow-rider-3d.html
│   ├── penguin-skip.html
│   ├── color-tunnel.html
│   ├── death-run-3d.html
│   ├── tunnel-rush.html
│   ├── blue-vortex.html
│   ├── slope.html
│   ├── yeti-sensation.html
│   ├── ninja-speed-runner.html
│   ├── escape-run.html
│   ├── jom-jom-jump.html
│   ├── enchanted-waters.html
│   ├── highway-traffic.html
│   ├── cross-the-road.html
│   ├── stack-fire-ball.html
│   └── skate-hooligans.html
├── play/                         # 游戏试玩页
│   ├── groovy-ski.html
│   ├── snow-rider-3d.html
│   └── ...
├── guide/                        # 游戏攻略页
│   ├── groovy-ski.html
│   ├── snow-rider-3d.html
│   └── ...
├── collections/                  # 主题聚合页
│   ├── ice-snow.html
│   ├── tunnel.html
│   ├── forest.html
│   ├── city.html
│   ├── reaction.html
│   └── endless-runner.html
├── lists/                        # 特色合集
│   ├── top-rated.html
│   └── trending.html
├── guides/                       # 攻略中心
│   └── index.html
├── about.html                    # 关于页面
├── ads.html                      # 广告说明
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── main.js
│   │   └── search.js
│   └── images/
│       ├── game-thumbnails/
│       └── og-image.png
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## 7. 开发里程碑

### Phase 1: 基础架构 (Week 1)
- [x] 架构设计文档
- [ ] games.json 数据文件
- [ ] 首页开发
- [ ] 游戏概览页模板
- [ ] 游戏试玩页模板

### Phase 2: 内容填充 (Week 2)
- [ ] 18款游戏概览页生成
- [ ] 18款游戏试玩页生成
- [ ] 18款游戏攻略页生成
- [ ] 主题聚合页 (4个)

### Phase 3: SEO优化 (Week 3)
- [ ] 所有页面Meta优化
- [ ] 结构化数据注入
- [ ] sitemap.xml生成
- [ ] robots.txt配置
- [ ] 内部链接优化

### Phase 4: 测试发布 (Week 4)
- [ ] 跨浏览器测试
- [ ] 移动端适配测试
- [ ] 性能优化 (Lighthouse)
- [ ] 广告位集成
- [ ] 正式部署

---

## 8. 注意事项

### 8.1 版权合规
- ✅ 使用官方嵌入代码
- ✅ 标注游戏来源
- ✅ 自制截图/示意图
- ❌ 不直接搬运官方素材

### 8.2 嵌入授权
- **Y8**: 支持 `Games for your website`, 使用 `/embed/` URL
- **Gamezop**: 提供官方 iframe 代码
- **OnlineGames.io**: 提供 `Embeddable Games` 说明

### 8.3 SEO风险控制
- 试玩页使用 `noindex,follow`
- 概览页添加 `canonical` 标签
- 避免内容重复问题

---

**文档版本**: v1.0
**最后更新**: 2025-10-08
**负责人**: Architecture Team
