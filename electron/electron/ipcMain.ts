import { BrowserWindow, ipcMain } from 'electron';

export default function registerIpcMain(window: BrowserWindow) {
  ipcMain.on('minimize', () => (window.isMinimized() ? window.restore() : window.minimize()));
  ipcMain.on('maximize', () => (window.isMaximized() ? window.restore() : window.maximize()));
  ipcMain.on('close', () => window.close());
  ipcMain.on('Reload', () => window.reload());
  ipcMain.on('setAOTTrue', () => window.setAlwaysOnTop(true));
  ipcMain.on('setAOTFalse', () => window.setAlwaysOnTop(false));
  ipcMain.on('openDevTools', () => window.webContents.openDevTools({ mode: 'left' }));
}
