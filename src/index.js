const { app, BrowserWindow, remote} = require("electron");
const path = require("path");
const { ipcMain } = require('electron')

var mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            frame: false,
            sandbox: false,
            contextIsolation: false,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true
        },
        frame: false,
        show: false
    });
};

const start = () => {
    mainWindow.loadFile("index.html");
    mainWindow.once("ready-to-show", () => {
        splash.destroy();
        mainWindow.show();
    });
    
    app.on("activate", () => {
        // macOS only
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
};

app.whenReady().then(() => {
    createWindow();

    splash = new BrowserWindow({
        width: 512, 
        height: 512, 
        transparent: true,
        frame: false, 
        alwaysOnTop: true
    });
    
    splash.loadFile(`splash.html`);
    setTimeout(start, 4000);
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') 
        app.quit();
});

ipcMain.handle('quit',  async (event, ...args) => {
    app.quit();
})

ipcMain.handle("alwaysOnTop", async (event, ...args) => {
    mainWindow.setAlwaysOnTop(true);
});

ipcMain.handle("disableAlwaysOnTop", async (event, ...args) => {
    mainWindow.setAlwaysOnTop(false);
});

ipcMain.handle('minimize', async (event, ...args) => {
    mainWindow.minimize();
});

ipcMain.handle('maximize', async (event, ...args) => {
    if (mainWindow.isMaximized()) 
        mainWindow.restore();
    else mainWindow.maximize();
});
