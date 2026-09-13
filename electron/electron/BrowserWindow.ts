import { join } from 'path';
import { BrowserWindow } from 'electron';

export default function createWindow(url: string) {
  const window = new BrowserWindow({
    width: 700,
    height: 500,
    icon: join(__dirname, '../', 'resources', 'icon.png'),
    webPreferences: { preload: join(__dirname, 'preload.js'), webgl: true, webviewTag: true }
  });
  window.loadURL(url);
  window.removeMenu();
  return window;
}
