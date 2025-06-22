# 🌐 Gemi-AI and Sustainability Global Summit

A React web application built with Tailwind CSS, designed to showcase Toronto Tech Week 2025. The site features interactive event listings, keynote speakers, partner highlights, and a fully responsive layout to elevate the user experience across devices.

---

## 🛠️ Features

* **Interactive Event Listings:** Filter and browse events with detailed descriptions, times, and locations.
* **Keynotes & Speakers:** Spotlight on influential figures with names, roles, and affiliated events.
* **Partner Directory:** Categorized showcase of premier, supporting, and community partners.
* **Responsive Design:** Mobile-first UI built with Tailwind utility classes.
* **Modular Architecture:** Reusable components for flexible extension and maintenance.
* **Optimized Production Build:** Bundled with Create React App (CRA) for performance.

---

## 📆 Tech Stack

| Layer     | Tools / Libraries                                 |
| --------- | ------------------------------------------------- |
| Front-end | React 18, JSX                                     |
| Styling   | Tailwind CSS 3.4.x, PostCSS, Autoprefixer         |
| Tooling   | ESLint (CRA default), Jest, React-Testing-Library |
| Bootstrap | Create React App                                  |

---

## 📃 Project Structure

```
/gemi_summit/
├── public/                 # Static assets
├── src/
│   ├── App.js              # Main routing logic
│   ├── TechWeekApp.js      # Home page
│   ├── index.js            # React entry point
│   ├── index.css           # Tailwind CSS imports
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS setup
├── package.json
└── README.md
```

---

## 🔧 Getting Started

**Install dependencies:**

```bash
npm install
```

**Start development server:**

```bash
npm start
```

Visit `http://localhost:3000` — hot-reloading enabled.

**Build for production:**

```bash
npm run build
```

Outputs to `/build` with minified, optimized assets.

---

## 📊 Available Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm start`     | Launch dev server with reload    |
| `npm run build` | Create optimized build           |
| `npm test`      | Run unit tests with Jest         |
| `npm run eject` | Expose CRA config (irreversible) |

---

## 🎨 Tailwind Setup

Tailwind is integrated through PostCSS.

| File                 | Role                                        |
| -------------------- | ------------------------------------------- |
| `tailwind.config.js` | Content paths and theme customization       |
| `postcss.config.js`  | Plugin integration (Tailwind, Autoprefixer) |
| `src/index.css`      | Tailwind directives (`@tailwind base`, etc) |

Customize utility classes and theme values by editing `tailwind.config.js`.
