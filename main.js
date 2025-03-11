const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('path')
const os = require("os");

let win;
let bible;
let enem;

const createWindow = () => {
  win = new BrowserWindow({
    width: 250,
    height: 350,
    title: 'TSUKI', 
    transparent: true, 
    alwaysOnTop: true, 
    hasShadow: false, 
    fullscreenable: false,
    frame: false,
    skipTaskbar: true, 
    resizable: false,
    icon: path.join(__dirname, 'public', 'assets', 'imgs', 'normal.png'),
    webPreferences:{
        backgroundThrottling: false,
        preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.join(__dirname, 'views', 'index.html'))
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//ipc ------------------>

ipcMain.on('close_app', () => {
  app.quit()
})

ipcMain.on('open_bible', () => {
  createBible()
})

ipcMain.on('open_enem', () => {
  createEnem()
})

// <--------------------

const createBible = () => {
  bible = new BrowserWindow({
    width: 350,
    height: 220,
    title: 'Bible', 
    fullscreenable: false,
    autoHideMenuBar: true,
    parent: win,
    resizable: false,
    frame: true,
    icon: path.join(__dirname, 'public', 'assets', 'imgs', 'onpaper.png'),
  })

  bible.loadFile(path.join(__dirname, 'views', 'states', 'bible.html'))
}

const createEnem = () => {
  enem = new BrowserWindow({
    width: 750,
    height: 420,
    title: 'ENEM', 
    fullscreenable: false,
    autoHideMenuBar: true,
    parent: win,
    resizable: false,
    frame: true,
    icon: path.join(__dirname, 'public', 'assets', 'imgs', 'onpaper.png'),
  })

  enem.loadFile(path.join(__dirname, 'views', 'states', 'enem.html'))
}