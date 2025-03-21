import { join } from 'path';
import { BrowserWindow, shell } from 'electron';
import isDev from 'electron-is-dev';

export default function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: { preload: join(__dirname, 'preload.js') }
  });

  // eslint-disable-next-line no-unused-expressions
  isDev ? window.loadURL('http://localhost:3000') : window.loadFile(join(__dirname, '../dist-vite/index.html'));

  window.webContents.openDevTools();
  window.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  return window;
}
