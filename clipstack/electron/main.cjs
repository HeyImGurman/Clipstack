const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow() {
    const win = new BrowserWindow({
        width: 420,
        height: 650,
        minWidth: 360,
        minHeight: 500,
        title: 'ClipStack',

        backgroundColor: '#111111',

        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    win.loadURL('http://localhost:5173');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});