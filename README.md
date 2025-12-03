# 🎮 Game Nickname Checker

A premium, modern web application designed to validate and retrieve player nicknames for various popular online games. Built with **React**, **TypeScript**, and **Tailwind CSS**, featuring a sleek glassmorphism UI and dynamic server handling.

<img width="1919" height="948" alt="Image" src="https://github.com/user-attachments/assets/bf11c0e8-fe5d-4491-9e33-31bc71b583b1" />

## ✨ Features

-   **Multi-Game Support**: Validate IDs for over 30+ popular games including Mobile Legends, Free Fire, Genshin Impact, Honkai: Star Rail, and more.
-   **Smart Input Handling**: Automatically adjusts input fields based on game requirements (e.g., Zone ID for MLBB, Server Dropdown for Genshin, or ID only for Free Fire).
-   **Premium UI/UX**: Designed with a modern dark theme, glassmorphism effects, and smooth animations using Tailwind CSS and shadcn/ui.
-   **Real-time Validation**: Instant feedback on valid or invalid game IDs via the KokinPay API.
-   **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/game-nickname-checker.git
    cd game-nickname-checker
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    -   Copy the example environment file:
        ```bash
        cp .env.example .env
        ```
    -   Open `.env` and add your KokinPay API Key:
        ```env
        VITE_API_KEY=your_actual_api_key_here
        ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173`.

## 📁 Project Structure

```
src/
├── components/
│   ├── features/       # Main feature components (e.g., NicknameChecker)
│   └── ui/             # Reusable UI components (shadcn/ui)
├── data/
│   └── games.ts        # Game configuration and server lists
├── lib/
│   └── utils.ts        # Utility functions
├── services/
│   └── api.ts          # API integration logic
├── types/
│   └── api.ts          # TypeScript definitions
└── App.tsx             # Main application entry
```

## 🔧 Configuration

The list of supported games and their specific requirements (server types, lists, etc.) is managed in `src/data/games.ts`. You can easily add or modify games by editing this file.

```typescript
// Example Game Configuration
{
  name: "Mobile Legends",
  code: "mobile-legends",
  requiresServer: true,
  serverType: "text",
  placeholder: "Zone ID"
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by Mari Partner
</p>
