Tenzies Game README


<div align="center">

# 🎲 Tenzies Game

A fun and interactive dice-rolling game built with **React** and **Vite**. Roll, hold, and match dice to win!

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Active-green)]()

</div>

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Game Rules](#game-rules)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Key Concepts Learned](#key-concepts-learned)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About the Project

**Tenzies Game** is an interactive React application that brings the classic dice game to your browser. It serves as an excellent learning resource for React fundamentals including state management, component styling, and game mechanics.

The objective is simple: **Roll 10 dice until all of them show the same number** — then you win! Players can strategically hold dice to keep their values while rolling others, adding an element of skill to the game.

### Why Tenzies?

This project is perfect for:
- 🎓 Learning React hooks (`useState`, `useEffect`)
- 🎨 Practicing component styling and CSS
- 🧩 Understanding conditional rendering
- 🎮 Building interactive game mechanics
- ⚡ Working with Vite for fast development

---

## ✨ Features

- 🎲 **10 Interactive Dice** - Randomly generated with smooth animations
- 🔒 **Hold Mechanism** - Click any die to hold/release its value while others roll
- 🎯 **Win Detection** - Game automatically detects when all dice match
- 🎉 **Victory Celebration** - Visual feedback when you win
- 🔄 **New Game Reset** - Instantly start a fresh round
- 📱 **Responsive Design** - Works smoothly on desktop and mobile devices
- ⌨️ **Keyboard Support** - Accessible controls for all users
- 💨 **Fast Development** - Built with Vite for instant HMR (Hot Module Replacement)

---

## 🎲 Game Rules

1. **Objective**: Roll all 10 dice until they all show the same number
2. **Rolling**: Click "Roll Dice" to roll all unheld dice
3. **Holding**: Click any die to hold it (held dice won't roll again)
4. **Winning**: When all 10 dice show the same number, the game automatically detects victory
5. **Restarting**: Click "New Game" to reset all dice and play again

**Strategy Tip**: 💡 After your first roll, if you have 4+ dice showing the same number, hold those dice and focus on rolling matches for that number.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have these installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

Check if Node.js is installed:
node --version  # Should show v14+
npm --version   # Should show v6+

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/shubham1-max/tenzies-game.git
```

2. **Install dependencies**:
npm install

3. **Start the development server**:
npm run dev

4. **Open in browser**:
The application will automatically open at `http://localhost:5173`

> Note: Vite uses port 5173 by default. If it's in use, Vite will use the next available port.

### Quick Start

# One-liner setup for impatient developers
```
git clone https://github.com/shubham1-max/tenzies-game.git
cd tenzies-game
npm install
npm run dev
```
After running these commands, the game will open in your browser ready to play!

---

## 🗂️ Project Structure
```bash
tenzies-game/
├── src/
│   ├── assets/              # Static assets (images, audio, etc.)
│   ├── App.jsx              # Main game logic
│   ├── App.css              # App styling
│   ├── Die.jsx              # Die component
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
│
├── public/                  # Public static files
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies & scripts
├── package-lock.json        # Dependency lock file
├── .gitignore               # Git ignored files
├── eslint.config.js         # ESLint configuration
└── LICENSE                  # MIT License
```

### Component Breakdown

| Component | Purpose |
|-----------|---------|
| **App.jsx** | Main game logic, state management, win/loss logic |
| **Die.jsx** | Individual die component with hold functionality |
| **App.css** | Game styling, animations, responsive layout |

---

## 🎮 How to Play

### Step-by-Step Guide

1. **Start the Game**
   - Launch the application and see all 10 dice displayed randomly

2. **Roll the Dice**
   - Click the "Roll Dice" button to roll all unheld dice
   - Each die shows a random number from 1-6

3. **Hold Dice**
   - Click any die to hold it (held dice turn a darker color)
   - Click again to unhold and make it roll-able

4. **Achieve Victory**
   - Keep rolling and holding until all 10 dice show the same number
   - When you win, a congratulations message appears!
   - Your roll count is displayed

5. **Play Again**
   - Click "New Game" to reset all dice and start fresh

## Gameplay Demo

**Screenshot of Game Interface:**
<img width="1919" height="1016" alt="2tn" src="https://github.com/user-attachments/assets/33df58a0-585b-4196-9845-dc970c13d926" />

<img width="1919" height="1010" alt="1tn" src="https://github.com/user-attachments/assets/5d9c9353-8f03-4961-9e51-94fe314caa55" />

---

## 💻 Technologies Used

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19+ | UI framework and state management |
| **Vite** | Latest | Build tool and dev server (faster than Create React App) |
| **JavaScript (ES6+)** | Latest | Programming language |
| **CSS3** | Latest | Styling and animations |
| **Node.js/npm** | v14+ | Package management |

### Key React Concepts Used

- **useState Hook** - Managing dice state, held status, roll count
- **useEffect Hook** - Checking win condition after each state change
- **Component Props** - Passing data from parent (App) to child (Die)
- **Event Handling** - Roll button clicks, die holding mechanism
- **Conditional Rendering** - Displaying win message and styling
- **Array Methods** - `map()` for rendering multiple dice
- **Lazy State Initialization** - Optimizing initial dice generation

### Build & Development Tools

- **Build tool:** Vite ^5.0.0
- **React framework:** React ^19.2.3, React DOM ^19.2.3
- **Vite plugin:** @vitejs/plugin-react ^5.0.3

---

## 📚 Key Concepts Learned

This project teaches important React fundamentals:

### 1. **State Management** (`useState`)
Master reactive state handling using React 19's `useState` hook for managing dice values, held status, and game state across component lifecycle.

### 2. **Side Effects** (`useEffect`)
Learn to perform side effects and synchronize with external systems using `useEffect` to check win conditions and manage game flow.

### 3. **Conditional Rendering**
Understand how to render components conditionally based on game state, displaying win messages and visual feedback only when appropriate.

### 4. **Component Composition**
Build modular, reusable components by breaking down the game into smaller pieces like individual Die components that manage their own logic.

### 5. **Event Handling**
Handle user interactions efficiently with React's synthetic event system for clicks, toggles, and game actions.

---

## 🔧 Available Scripts

### Start development server with hot reload
npm run dev

### Build for production
npm run build

### Preview production build locally
npm run preview

## Lint code for errors
npm run lint

---

## 🤝 Contributing

Contributions are welcome! Whether it's bug fixes, features, or improvements to documentation:

1. **Fork** the repository
   git clone https://github.com/shubham1-max/tenzies-game.git

2. **Create a feature branch**
   git checkout -b feature/AmazingFeature

3. **Make your changes**
   - Follow the existing code style
   - Keep components small and reusable
   - Add comments for complex logic

4. **Commit your changes**
   git commit -m 'Add some AmazingFeature'

5. **Push to the branch**
   git push origin feature/AmazingFeature

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues

### Code Style Guidelines

- Use ES6+ syntax (arrow functions, destructuring, etc.)
- Component names should be PascalCase
- Follow existing folder structure
- Keep functions pure when possible
- Add JSDoc comments for complex functions

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

You are free to use, modify, and distribute this project for personal and commercial purposes.

---

## 📧 Contact & Support

Have questions or found a bug? Reach out!

- **GitHub Issues**: [Create an issue](https://github.com/shubham1-max/tenzies-game/issues)
- **Email**: shubhamspatil2006@gmail.com

**Problem?** Make sure to:
1. Check the [existing issues](https://github.com/shubham1-max/tenzies-game/issues)
2. Provide clear steps to reproduce
3. Share your browser and Node.js version

---

## 🙏 Acknowledgments

- **React Community** - For amazing documentation and tooling
- **Vite Team** - For creating an incredibly fast build tool
- **JavaScript Developers Worldwide** - For inspiring open-source projects
- **Dice Game Enthusiasts** - For the classic Tenzies game concept

### Learning Resources

- 📖 [Official React 19 Documentation](https://react.dev)
- ⚡ [Vite Documentation](https://vitejs.dev)
- 🎮 [Tenzi Game Rules](https://www.tasteofhome.com/article/what-is-tenzi/)
- 🚀 [React Hooks Guide](https://react.dev/reference/react/hooks)

---

<div align="center">

### 🌟 If you found this project helpful, please give it a star! ⭐


[Back to Top](#tenzies-game)

</div>
