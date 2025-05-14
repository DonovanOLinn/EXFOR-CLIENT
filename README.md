# EXFOR-CLIENT

**EXFOR-CLIENT** is the frontend application for a larger fan project inspired by the *Expeditionary Force* book series by Craig Alanson. It connects with a companion backend service found here: [EXFOR-Server](https://github.com/DonovanOLinn/EXFOR-Server).

This client is built using React and bootstrapped with Vite for fast development.

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DonovanOLinn/EXFOR-CLIENT.git
   cd EXFOR-CLIENT
   ```

2. Install Dependencies:

    ```bash
    npm install
    ```

3. Running the Application

    ```bash
    npm run dev
    ```

    This generates production-ready files in the dist directory.

## Project Structure: 
EXFOR-CLIENT/
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # React components
│   ├── pages/          # React Pages
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Project metadata and scripts
├── vite.config.js      # Vite configuration
└── .gitignore          # Git ignore rules
