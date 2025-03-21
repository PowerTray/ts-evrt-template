import { BrowserWindow, ipcMain } from 'electron';

export default function registerIpcMain(window: BrowserWindow) {
  ipcMain.on('minimize', () => (window.isMinimized() ? window.restore() : window.minimize()));
  ipcMain.on('maximize', () => (window.isMaximized() ? window.restore() : window.maximize()));
  ipcMain.on('close', () => window.close());
}
