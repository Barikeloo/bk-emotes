fx_version 'cerulean'

game 'gta5'

description 'Example'

author 'Ismael jaja ha sido el'

description 'Muchos callbacks'

--Client Scripts-- 
client_scripts {
    'NativeUI.lua',
	'Config.lua',
 'Client/*.lua'
}

--Server Scripts-- 
server_scripts {
	'Config.lua',
	'@mysql-async/lib/MySQL.lua',
	'Server/*.lua'
}

export {
    'WalkMenuStart'
}
--UI Part-- 
ui_page {
 'ui/index.html', 
}

--File Part-- 
files {
 'ui/index.html',
 'ui/app.js', 
 'ui/main.css',
 'ui/boxed.ttf'
} 