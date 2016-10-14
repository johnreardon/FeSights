'use strict';

const electron  = require('electron');
const { app, BrowserWindow, ipc, Menu} = electron;

require('electron-reload')(__dirname);
let mainWindow = null;

function createWindow()
{
	mainWindow = new BrowserWindow({
		width:800,
		height:600
	});

	const name = electron.app.getName();
	const menuTemplate = [
		{
			label: "File",
			submenu: [
				{
					label: `About ${name}`,
					click: () => {
						console.log( "about clicked");
					}
				},
				{
					type: "separator"
				},
				{
					label: "Quit",
					click: () => {
						console.log( "Exiting");
						app.quit();
					},
					accelerator: 'Alt+F4'
				}
			]
		}
	]
	const menu = Menu.buildFromTemplate( menuTemplate);
	Menu.setApplicationMenu(menu);
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
