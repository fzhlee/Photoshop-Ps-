var recentFiels  = app.recentFiles;
var message = "";

for(var i=0; i<recentFiels.length; i++)
{
	message += (i+1) + ":" + recentFiels[i].name + "\r\n";
}

alert(message);