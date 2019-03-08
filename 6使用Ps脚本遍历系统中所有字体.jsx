var fonts      = app.fonts;
var message = "";
for(var i=0; i<26; i++)
{
	message += (i+1)+" - "+fonts[i].name+"\r\n";
}
alert(message);