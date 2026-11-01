const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('clipstack', {
    platform: process.platform
});