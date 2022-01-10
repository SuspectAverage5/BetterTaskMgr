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
            nodeIntegrationInSubFrames: true,
          },
          frame: false,
          show: false
    });

    mainWindow.loadFile("index.html");
    mainWindow.show();
};

app.whenReady().then(() => {
    createWindow();


    app.on("activate", () => {
        // macOS only
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});

app.on('window-all-closed', function () {
    // macOS only because it sucks
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
