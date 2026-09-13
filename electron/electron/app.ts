import { app } from 'electron';
import isDev from 'electron-is-dev';
import { join } from 'path';
import createWindow from './BrowserWindow';
import registerIpcMain from './ipcMain';
import registerShell from './shell';

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

app.whenReady().then(() => {
  const url = isDev ? 'http://localhost:3000/' : join(__dirname, '../dist-vite/index.html');
  const window = createWindow(url);

  window.webContents.openDevTools();
  registerShell(window);
  registerIpcMain(window);
});
