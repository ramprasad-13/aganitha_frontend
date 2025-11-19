# 📊 TinyLink URL Shortener - Frontend (React/Tailwind)

This directory contains the React single-page application (SPA) for the TinyLink dashboard. It provides the UI for link creation, listing, statistics, and health checking.

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+)
* The **TinyLink Backend** must be running (e.g., on `http://localhost:5000`).

### 🛠️ Installation

1.  **Navigate to the Frontend Directory:**
    ```bash
    cd tiny-link/frontend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root of the **frontend directory**. This links the frontend application to the running backend API.

    ```env
    # Change the port (5000) if your backend is running elsewhere
    VITE_BACKEND_URL=http://localhost:5000 
    ```

    *Note: If you encounter proxy issues during development (e.g., 404 on redirects), ensure your `vite.config.js` is correctly configured to proxy both `/api` and root (`/`) requests to the backend.*

### ▶️ Running the Application

Start the development server:

```bash
npm run dev
