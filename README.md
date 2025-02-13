# TS & Electron, Vite, React, TailwindCSS and Material Tailwind

Starter using Vite, React, Typescript, Electron for fast prototyping.

## Features

- Fast development with Vite
- Latest React and Typescript
- Electron for desktop apps
- TailwindCSS for styling
- Material Tailwind for React components
- Prettier and ESLint for code formatting and linting

## Scripts

- `dev`: Start the development server
- `build:vite`: Build the frontend with Vite
- `build:electron`: Build the electron app
- `clean`: Clean the dist folder
- `lint`: Check the code for linting errors
- `lint:fix`: Fix linting errors
- `dist`: Build and package the app
- `pack`: Build and package the app
- `dist:win`: Build and package the app for Windows
- `dev:electron`: Start the electron app in development mode

## How to use

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Build the app with `npm run build`
5. Package the app with `npm run dist`

## Structure

- `electron/`: Electron specific code
  - `index.ts`: Main electron file
  - `preload.ts`: Preload script for the renderer process
- `src/`: Frontend code
  - `components/`: React components
  - `pages/`: React pages
  - `style/`: Global styles
  - `main.tsx`: Main frontend file
- `vite.config.ts`: Vite configuration
- `tailwind.config.js`: TailwindCSS configuration
- `tsconfig.json`: Typescript configuration
- `postcss.config.js`: PostCSS configuration
- `package.json`: NPM package file

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
