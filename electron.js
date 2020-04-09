'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

let mainWindow
let isDevelopment = process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)

function createWindow() {
	
	// Implementing Webpack
	let indexPath
	if (isDevelopment && process.argv.indexOf('--noDevServer') === -1) {
		installExtension(REACT_DEVELOPER_TOOLS).catch(err => console.log('Could not install extension: ', err))
		installExtension(REDUX_DEVTOOLS).catch(err => console.log('Could not install extension: ', err))
		indexPath = url.format({
			protocol: 'http:',
			host: 'localhost:8080',
			pathname: 'index.html',
			slashes: true
		})
	} else {
		indexPath = url.format({
			protocol: 'file:',
			pathname: path.join(__dirname, 'dist', 'index.html'),
			slashes: true
		})
	}

	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		show: false
	})

	mainWindow.loadURL(indexPath)

	mainWindow.once('ready-to-show', () => {
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
