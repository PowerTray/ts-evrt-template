import { app } from 'electron';
import createWindow from './BrowserWindow';
import registerIpcMain from './ipcMain';

app.whenReady().then(() => {
  const window = createWindow();
  registerIpcMain(window);
});
