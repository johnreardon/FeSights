'use strict';

const electron  = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

require('electron-reload')(__dirname);
let mainWindow = null;

function createWindow() 
{
	mainWindow = new BrowserWindow({
		width:800,
		height:600
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	mainWindow.webContents.openDevTools();
	mainWindow.on( 'closed', () => {
		mainWindow = null;
	});
}

app.on( 'ready', createWindow);

app.on( 'window-all-closed', () => {
	if ( process.platform !== 'darwin' ) {
		app.quit;
	}
});

app.on( 'activate', () => {
	if ( mainWindow === null ) {
		createWindow();
	}
});
