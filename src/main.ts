import { app, BrowserWindow } from 'electron'
import path from 'path'
// import url from 'url'

let mainWindow: BrowserWindow | null
let isDevelopment = process.env.NODE_ENV === 'development'

function createWindow() {

	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		show: false,
		webPreferences: {
			nodeIntegration: true,
		}
	})

	if(isDevelopment) {
		mainWindow.loadURL(`http://localhost:${process.env.DEV_SERVER_PORT}/`)
	} else {
		mainWindow.loadFile(path.join('build', 'index.html'))
	}

	mainWindow.once('ready-to-show', () => {
		if(!mainWindow) throw new Error('This should never occur!')
		mainWindow.show()
		if (isDevelopment) mainWindow.webContents.openDevTools()
	})

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
	if (mainWindow === null) createWindow()
})
