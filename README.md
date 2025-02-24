# TS & Electron, Vite, React and TailwindCSS

Starter using Vite, React, Typescript, Electron for fast prototyping.

## Features

- Fast development with Vite
- Latest React and Typescript
- Electron for desktop apps
- TailwindCSS for styling
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

1. Clone the repository: `git clone https://github.com/Alask-Code/ts-electron-vite-react-tailwind`
2. Navigate into the directory: `cd ts-electron-vite-react-tailwind`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Build the app: `npm run build`
6. Package the app: `npm run dist`

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
