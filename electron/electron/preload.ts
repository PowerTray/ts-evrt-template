import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

declare global {
  interface Window {
    api: typeof api;
    ipcRenderer: typeof ipcRenderer;
  }
}

const api = {
  Minimize: () => {
    ipcRenderer.send('minimize');
  },
  Maximize: () => {
    ipcRenderer.send('maximize');
  },
  Close: () => {
    ipcRenderer.send('close');
  },
  OpenDevTools: () => {
    ipcRenderer.send('openDevTools');
  },
  Reload: () => {
    ipcRenderer.send('Reload');
  },
  SetAOTTrue: () => {
    ipcRenderer.send('setAOTTrue');
  },
  SetAOTFalse: () => {
    ipcRenderer.send('setAOTFalse');
  },
  on: (channel: string, callback: (data: unknown) => void) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  }
};

contextBridge.exposeInMainWorld('api', api);
