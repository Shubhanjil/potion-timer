const { app, BrowserWindow,ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let menuWindow;
let poisonivyWindow;
let snakeweedWindow;
let youthelixirWindow;
let nightshadeWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 285,
        height: 325,
        frame: false,
        autoHideMenuBar:true,
        transparent:true,
        icon: path.join(__dirname, 'static/icons/app-icon.ico'),
        webPreferences: {
            nodeIntegration: true
        }
    });
    console.log("Icon Path:", path.join(__dirname, 'static/icons/app-icon.ico'));
    mainWindow.loadFile('index.html');
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit();
    });
});


ipcMain.on("close-app", () => {
    if (mainWindow) {
        mainWindow.close();
    }
});

ipcMain.on("open-menu", () => {
    if (!menuWindow) {
        menuWindow = new BrowserWindow({
            width: 400,
            height: 300,
            webPreferences: {
                nodeIntegration: true
            }
        });
        menuWindow.loadFile("menu.html")
        menuWindow.on("closed", () => {
            menuWindow = null;
        });
    }
});

ipcMain.on("open-poisonivy", () => {
    if (!poisonivyWindow) {
        poisonivyWindow = new BrowserWindow({
            width: 400,
            height: 300,
            webPreferences: {
                nodeIntegration: true
            }
        });
        poisonivyWindow.loadFile("poisonivy.html")
        poisonivyWindow.on("closed", () => {
            poisonivyWindow= null;
        });
    }
});

ipcMain.on("open-youthelixir", () => {
    if (!youthelixirWindow) {
        youthelixirWindow = new BrowserWindow({
            width: 400,
            height: 300,
            webPreferences: {
                nodeIntegration: true
            }
        });
        youthelixirWindow.loadFile("youthelixir.html")

        youthelixirWindow.on("closed", () => {
            youthelixirWindow= null;
        });

    }
});

ipcMain.on("open-snakeweed", () => {
    if (!snakeweedWindow) {
        snakeweedWindow = new BrowserWindow({
            width: 400,
            height: 300,
            webPreferences: {
                nodeIntegration: true
            }
        });
        snakeweedWindow.loadFile("snakeweed.html")
        snakeweedWindow.on("closed", () => {
            snakeweedWindow= null;
        });
    }
});

ipcMain.on("open-nightshade", () => {
    if (!nightshadeWindow) {
        nightshadeWindow = new BrowserWindow({
            width: 400,
            height: 300,
            webPreferences: {
                nodeIntegration: true
            }
        });
        nightshadeWindow.loadFile("nightshade.html")
        nightshadeWindow.on("closed", () => {
            nightshadeWindow= null;
        });
    }
});

