# GOLDOGE Embed H5

一个现代化的 React + TypeScript + Vite H5 应用，支持多语言国际化、设备适配和 SEO 优化。

## 📋 目录

- [项目简介](#项目简介)
- [技术栈](#技术栈)
- [功能特性](#功能特性)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [开发指南](#开发指南)
- [构建部署](#构建部署)
- [国际化](#国际化)
- [代码规范](#代码规范)
- [依赖说明](#依赖说明)

## 🎯 项目简介

GOLDOGE Embed H5 是一个基于 React 19 和 Vite 构建的现代化 H5 应用，采用 TypeScript 开发，提供完整的类型安全支持。项目支持 15 种语言的国际化，具备响应式设计，适配各种移动设备。

## 🛠 技术栈

### 核心框架
- **React** `^19.2.1` - 用户界面库
- **TypeScript** `~5.9.3` - 类型安全的 JavaScript 超集
- **Vite** `rolldown-vite@7.2.5` - 下一代前端构建工具（基于 Rolldown）

### 路由与状态管理
- **React Router** `^7.9.6` - 声明式路由
- **Zustand** `^5.0.9` - 轻量级状态管理
- **TanStack Query** `^5.90.11` - 强大的数据同步库

### UI 与样式
- **TailwindCSS** `^4.1.17` - 实用优先的 CSS 框架
- **tailwindcss-animate** `^1.0.7` - TailwindCSS 动画插件
- **tw-animate-css** `^1.4.0` - TailwindCSS 动画扩展
- **clsx** `^2.1.1` - 条件类名工具
- **tailwind-merge** `^3.4.0` - 智能合并 Tailwind 类名

### 国际化
- **i18next** `^25.6.3` - 国际化框架
- **react-i18next** `^16.3.5` - React 国际化绑定

### 工具库
- **Axios** `^1.13.2` - HTTP 客户端
- **ahooks** `^3.9.6` - React Hooks 工具库
- **Zod** `^4.1.13` - TypeScript 优先的模式验证
- **react-helmet-async** `^2.0.5` - 文档头部管理
- **react-responsive** `^10.0.1` - 响应式设计工具

### 开发工具
- **BiomeJS** `2.2.2` - 快速格式化器和 linter
- **React Compiler** `^1.0.0` - React 编译器插件
- **swagger-typescript-api** `^12.0.4` - Swagger API 类型生成

### 其他
- **ali-oss** `^6.23.0` - 阿里云 OSS SDK

## ✨ 功能特性

- ✅ **React 19** - 使用最新的 React 特性
- ✅ **TypeScript** - 完整的类型安全支持
- ✅ **Vite (Rolldown)** - 极速的构建工具
- ✅ **多语言支持** - 支持 15 种语言
- ✅ **响应式设计** - 完美适配移动设备
- ✅ **SEO 优化** - 支持 meta 标签和 Open Graph
- ✅ **代码规范** - BiomeJS 自动格式化和 linting
- ✅ **React Compiler** - 自动优化 React 组件
- ✅ **模块化架构** - 清晰的目录结构
- ✅ **路径别名** - 使用 `@/` 别名简化导入

## 📁 项目结构

```
awesome-electron/
├── public/                 # 静态资源目录
│   ├── favicon.webp       # 网站图标
│   ├── robots.txt         # 搜索引擎爬虫配置
│   ├── sitemap.xml        # 网站地图
│   └── llms.txt           # LLM 配置
├── scripts/               # 构建脚本
│   ├── i18n-ns.js        # 国际化命名空间生成脚本
│   └── swagger.js        # Swagger API 生成脚本
├── src/
│   ├── assets/           # 静态资源（图片、字体等）
│   ├── components/       # React 组件
│   ├── config/           # 配置文件
│   ├── constant/         # 常量定义
│   ├── hooks/            # 自定义 Hooks
│   ├── i18n/             # 国际化配置
│   ├── locales/          # 翻译文件
│   │   ├── global/       # 全局翻译（15 种语言）
│   │   └── home/         # 首页翻译（15 种语言）
│   ├── pages/            # 页面组件
│   │   ├── layout.tsx    # 布局组件
│   │   ├── home/         # 首页
│   │   └── daily-gold-rush/  # 每日黄金冲刺页面
│   ├── request/          # API 请求配置
│   ├── store/            # Zustand 状态管理
│   ├── utils/            # 工具函数
│   ├── App.tsx           # 应用入口组件
│   ├── App.css           # 应用样式
│   ├── index.tsx         # 应用入口文件
│   ├── index.css         # 全局样式
│   └── vite-env.d.ts     # Vite 类型定义
├── .cursor/              # Cursor IDE 配置
├── biome.json            # BiomeJS 配置
├── index.html            # HTML 模板
├── package.json          # 项目依赖配置
├── pnpm-lock.yaml        # pnpm 锁文件
├── tsconfig.json         # TypeScript 配置
├── tsconfig.app.json     # TypeScript 应用配置
├── tsconfig.node.json    # TypeScript Node 配置
└── vite.config.ts        # Vite 配置
```

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

### 安装依赖

```bash
# 使用 pnpm 安装依赖
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm dev
```

开发服务器将在 `http://localhost:5173` 启动（端口可能不同）。

### 预览构建

```bash
# 构建并预览
pnpm build
pnpm preview
```

## 💻 开发指南

### 路径别名

项目配置了路径别名 `@/` 指向 `src/` 目录，可以这样导入：

```typescript
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/utils'
```

### 创建新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.tsx` 中添加路由配置
3. 如需国际化，在 `src/locales/` 中添加翻译文件

示例：

```typescript
// src/pages/new-page/index.tsx
export default function NewPage() {
  return <div>New Page</div>
}
```

```typescript
// src/App.tsx
import NewPage from '@/pages/new-page'

// 在 Routes 中添加
<Route path="new-page" element={<NewPage />} />
```

### 使用国际化

```typescript
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation('home') // 'home' 是命名空间
  
  return <h1>{t('title')}</h1>
}
```

### 使用状态管理

```typescript
import { create } from 'zustand'

interface StoreState {
  count: number
  increment: () => void
}

export const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

### 使用 React Query

```typescript
import { useQuery } from '@tanstack/react-query'

function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
  
  if (isLoading) return <div>Loading...</div>
  return <div>{/* 渲染数据 */}</div>
}
```

### 工具函数

项目提供了一些常用工具函数：

```typescript
import { cn, detectLanguage } from '@/utils'

// 合并 Tailwind 类名
const className = cn('base-class', condition && 'conditional-class')

// 检测语言
const lang = detectLanguage() // 返回 'us' | 'cn' | 'hk' 等
```

## 🏗 构建部署

### 构建命令

```bash
# 开发环境构建
pnpm build

# 测试环境构建
pnpm build:test

# 生产环境构建
pnpm build:production
```

### 构建前准备

构建前会自动运行 `prebuild` 脚本，生成国际化命名空间文件。

### 环境变量

项目支持多环境构建：
- `development` - 开发环境
- `test` - 测试环境
- `production` - 生产环境

## 🌍 国际化

### 支持的语言

项目支持以下 15 种语言：

- 🇺🇸 英语 (us)
- 🇨🇳 简体中文 (cn)
- 🇭🇰 繁体中文 (hk)
- 🇯🇵 日语 (jp)
- 🇰🇷 韩语 (kr)
- 🇩🇪 德语 (de)
- 🇪🇸 西班牙语 (es)
- 🇫🇷 法语 (fr)
- 🇮🇩 印尼语 (id)
- 🇮🇳 印地语 (in)
- 🇮🇹 意大利语 (it)
- 🇵🇱 波兰语 (pl)
- 🇵🇹 葡萄牙语 (pt)
- 🇹🇭 泰语 (th)
- 🇻🇳 越南语 (vn)

### 语言检测优先级

1. URL 查询参数 `?lang=xx`
2. localStorage 中存储的语言
3. 浏览器语言设置
4. 默认英语 (us)

### 添加新语言

1. 在 `src/locales/global/` 和 `src/locales/home/` 中添加对应的 JSON 文件
2. 运行 `pnpm dev` 或 `pnpm build` 自动生成命名空间

### 翻译文件结构

```json
// src/locales/home/us.json
{
  "title": "Home",
  "description": "Welcome to our homepage"
}
```

## 📝 代码规范

### BiomeJS 配置

项目使用 BiomeJS 进行代码格式化和 linting。

```bash
# 检查代码
pnpm biome check

# 格式化代码
pnpm biome format
```

### 代码风格

- **缩进**: 2 个空格
- **行宽**: 80 字符
- **引号**: 单引号
- **分号**: 按需添加
- **换行**: LF

### TypeScript 配置

- 严格模式启用
- 不允许未使用的变量和参数
- 使用路径别名 `@/*`

## 📦 依赖说明

### 核心依赖

| 依赖 | 版本 | 说明 |
|------|------|------|
| react | ^19.2.0 | React 核心库 |
| react-dom | ^19.2.0 | React DOM 渲染 |
| react-router | ^7.9.6 | 路由管理 |
| zustand | ^5.0.9 | 状态管理 |
| @tanstack/react-query | ^5.90.11 | 数据同步 |
| tailwindcss | ^4.1.17 | CSS 框架 |
| i18next | ^25.6.3 | 国际化框架 |
| axios | ^1.13.2 | HTTP 客户端 |
| zod | ^4.1.13 | 模式验证 |

### 开发依赖

| 依赖 | 版本 | 说明 |
|------|------|------|
| typescript | ~5.9.3 | TypeScript 编译器 |
| vite | rolldown-vite@7.2.5 | 构建工具 |
| @biomejs/biome | 2.2.2 | 代码格式化工具 |
| @vitejs/plugin-react | ^5.1.1 | React 插件 |
| babel-plugin-react-compiler | ^1.0.0 | React 编译器 |

## 🔧 配置说明

### Vite 配置

- 使用 `@tailwindcss/vite` 插件集成 TailwindCSS
- 配置 React Compiler 优化
- 路径别名 `@` 指向 `src/`

### TypeScript 配置

- 目标: ES2022
- 模块: ESNext
- JSX: react-jsx
- 严格模式: 启用

### BiomeJS 配置

- 格式化: 启用
- Linting: 启用
- 推荐规则: 启用
- 自定义规则: 部分关闭（如 noExplicitAny, noDebugger）

## 📄 许可证

查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 项目地址: [GitHub Repository](https://github.com/fundgao)

---

**注意**: 这是一个使用 React 19、TypeScript、Vite 和现代前端工具链构建的项目。确保你的开发环境满足最低要求。
