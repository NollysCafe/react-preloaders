# 🌀 React Preloaders

> 🌈 Ultra-dev-friendly, fully customizable preloader components for React — built with **TypeScript**, **SCSS**, and **zero config**.

<img src='https://img.shields.io/npm/v/@nolly-cafe/react-preloaders.svg?style=flat-square' alt='npm version' />
<img src='https://img.shields.io/github/last-commit/nollyscafe/react-preloaders?style=flat-square' alt='last commit' />
<img src='https://img.shields.io/badge/License-NFE--OSL-purple?style=flat-square' alt='license' />
<img src='https://img.shields.io/bundlephobia/minzip/@nolly-cafe/react-preloaders?style=flat-square' alt='bundle size' />
<a href='https://github.com/NollysCafe/react-preloaders/wiki'><img src='https://img.shields.io/badge/Wiki-Read%20Now-blue?style=flat-square' alt='docs' /></a>

---

## Checkout the [demo](https://nollyscafe.github.io/react-preloaders/) for a live preview of all preloaders!

---

## ✨ Features

- 🔟 10+ unique preloaders (animated with CSS/SCSS)
- 🧠 100% TypeScript with full JSDoc
- 🎨 Fully customizable via props (`color`, `size`, `duration`, etc.)
- 🧩 Works with SSR, React 18+, Vite, Webpack...
- 💅 Styled with clean, scoped SCSS (no styled-components)
- 🛠️ Just import and use — no setup required

---

## 📦 Install

```bash
npm i @nolly-cafe/react-preloaders
# or
pnpm add @nolly-cafe/react-preloaders
```

---

## 🧪 Usage

```tsx
import { Dots } from '@nolly-cafe/react-preloaders'

function App() {
  return <Dots color='#f0f' count={6} fullScreen />
}
```

---

## 🌈 Available Preloaders

| Name        | Description                 | 3D? |
| ----------- | --------------------------- | --- |
| `Dots`      | Bouncing dots               | ❌   |
| `Lines`     | Equalizer-style bars        | ❌   |
| `Zoom`      | Bars scale rhythmically     | ❌   |
| `Square`    | Rotating square with fill   | ❌   |
| `Ripple`    | Expanding ripple circles    | ❌   |
| `Sugar`     | Bouncy glossy candy dot     | ❌   |
| `Planets`   | Orbiting balls around a sun | ✅   |
| `Cube`      | 3D cube spinning on X/Y     | ✅   |
| `Spinner3D` | Spinning coin/disc          | ✅   |
| `Tunnel`    | Expanding tunnel of rings   | ✅   |

---

## ⚙️ Props (Common Across All)

| Prop         | Type      | Default   | Description                       |
| ------------ | --------- | --------- | --------------------------------- |
| `color`      | `string`  | `#2D2D2D` | Main color (hex/rgb/css var)      |
| `size`       | `number`  | varies    | Main size/dimension               |
| `duration`   | `number`  | varies    | Animation duration in seconds     |
| `fullScreen` | `boolean` | `false`   | Whether to stretch to full screen |
| `className`  | `string`  | `''`      | Extra CSS class name(s)           |

👉 Specific preloaders like `Dots`, `Lines`, `Zoom` etc. include more advanced props like `count`, `gap`, `barHeight`, etc. See inline jsDocs for all props!

---

## 🧩 Custom Preloaders

You can use the `<Preloader />` wrapper for **your own** animations:

```tsx
import { Preloader } from '@nolly-cafe/react-preloaders'

function CustomLoader() {
  return <div className='my-spinner' />
}

function App() {
  return (
    <Preloader background='blur' animation='slide-up' time={2000}>
      <CustomLoader />
    </Preloader>
  )
}
```

### Props
| Prop            | Type        | Default     | Description                                                 |
| --------------- | ----------- | ----------- | ----------------------------------------------------------- |
| `color`         | `string`    | `#2D2D2D`   | Sets the CSS `color` used by the animation.                 |
| `background`    | `string`    | `#ffffff`   | Background of the loader. Use `'blur'` for blur effect.     |
| `animation`     | `string`    | `fade`      | Exit animation: `'fade'`, `'slide-up'`, `'slide-down'`, etc.|
| `time`          | `number`    | `1300`      | Auto-dismiss time (ms) if `customLoading` is `undefined`.   |
| `customLoading` | `boolean`   | `undefined` | Manual loading toggle (e.g. from a fetch or Redux state).   |
| `children`      | `ReactNode` | `null`      | The custom animation to show.                               |

---

## 📜 License

**NFE-OSL v1.0** (Fair & Ethical Open-Source License)
Read full license in the [LICENSE](./LICENSE) file.

---

## 💌 Made with love by [Nolly's Cafe](https://github.com/nollyscafe) ✨
