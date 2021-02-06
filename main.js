// Modules to control application life and create native browser window
const {app, BrowserWindow, Tray, nativeImage} = require('electron')
const path = require('path')

let tray, window

// app.dock.hide()

function createWindow () {
  // Create the browser window.
  window = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    // frame:false,
    // fullscreen: true,
    // resizable: false,
    // transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  window.on('closed', () => window = null)

  // and load the index.html of the app.
  window.loadURL('http://localhost:3000')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

const createTray = () => {
    const icon = path.join(__dirname, 'assets/icon.png')
    const nImage = nativeImage.createFromPath(icon)

    tray = new Tray(nImage)
    tray.on('click', (event) => toggleWindow())
}

const toggleWindow = () => {
    window.isVisible() ? window.hide() : showWindow()
}

const showWindow = () => {
    const position = windowPosition()
    window.setPosition(position.x, position.y)
    window.show()
}

const windowPosition = () => {
    const windowBounds = window.getBounds()
    const trayBounds = tray.getBounds()

    const x = Math.round(trayBounds.x + (trayBounds.width/2) - (windowBounds.width/2))
    const y = Math.round(trayBounds.y + trayBounds.height)

    return {x, y}
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createTray()
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.