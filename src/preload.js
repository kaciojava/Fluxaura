const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  appName: 'Fluxaura'
});