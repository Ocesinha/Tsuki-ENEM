const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
    close_app: () => {ipcRenderer.send('close_app')},
    open_bible: () => (ipcRenderer.send('open_bible')),
    open_enem: () => (ipcRenderer.send('open_enem'))
})
