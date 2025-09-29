# Farely

Welcome to the Farely project! This document provides all the necessary information to get you started with development and contributing.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Key Technologies](#key-technologies)
- [Linting](#linting)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli`
-   [Git](https://git-scm.com/)
-   An Android/iOS emulator or a physical device with the Expo Go app.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd farely
    ```

2.  **Install dependencies:**
    This project uses npm for package management.
    ```bash
    npm install
    ```

## Running the App

To start the development server, run the following command from the project root:

```bash
npm start
```

This will open the Expo Developer Tools in your browser. From there, you can:
-   Run on an Android emulator or device.
-   Run on an iOS simulator or device.
-   Run in a web browser.

## Project Structure

The project follows a standard Expo and React Native structure:

-   `app/`: Contains all the screens and routes for the application, using Expo's file-based routing.
    -   `(auth)/`: A route group for authentication-related screens like login, register, and OTP.
    -   `_layout.tsx`: The root layout for the entire application.
-   `assets/`: Static assets such as fonts, icons, and images.
-   `components/`: Shared, reusable React components used across the application (e.g., [`Button.tsx`](components/Button.tsx), [`InputFields.tsx`](components/InputFields.tsx)).
-   `global.css`: Global stylesheet for NativeWind, defining base styles and custom theme variables.
-   `.github/`: Contains GitHub-specific configurations.
    -   `workflows/`: CI/CD workflows, including [`enforce-staging-pr.yml`](.github/workflows/enforce-staging-pr.yml) which manages the pull request process.

## Key Technologies

-   **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
-   **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) via [NativeWind](https://www.nativewind.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Fonts**: [@expo-google-fonts](https://github.com/expo/google-fonts)
-   **Icons**: [Lucide React Native](https://lucide.dev/)

## Linting

We use ESLint for code quality and consistency. To run the linter, use the script defined in [`package.json`](package.json):

```bash
npm run lint
```

## Contributing

We welcome contributions! Please follow this process to contribute:

1.  **Branching:** All pull requests to the `main` branch must originate from the `staging` branch. Create your feature branches from `staging`.
    ```bash
    git checkout staging
    git pull origin staging
    git checkout -b feature/your-feature-name
    ```

2.  **Develop:** Make your code changes on your feature branch.

3.  **Commit and Push:** Commit your changes and push your branch to the remote repository.
    ```bash
    git add .
    git commit -m "feat: add your feature"
    git push origin feature/your-feature-name
    ```

4.  **Create a Pull Request:** Open a pull request from your feature branch to the `staging` branch. Once your changes are reviewed and merged into `staging`, a separate pull request will be made from `staging` to `main` for deployment.

The [`enforce-staging-pr.yml`](.github/workflows/enforce-staging-pr.yml) workflow will automatically check that pull requests to `main` are only created from the `staging` branch, enforcing the required branching strategy.
