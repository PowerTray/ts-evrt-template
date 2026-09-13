import { BrowserWindow, shell } from 'electron';

export default function registerShell(window: BrowserWindow) {
  window.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });
}
