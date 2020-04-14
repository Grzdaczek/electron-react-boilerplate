import { app, BrowserWindow } from 'electron'
import path from 'path'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

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
		installExtension(REACT_DEVELOPER_TOOLS).catch(err => console.log('Could not install extension: ', err))
		installExtension(REDUX_DEVTOOLS).catch(err => console.log('Could not install extension: ', err))
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
