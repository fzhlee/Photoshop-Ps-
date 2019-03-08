var docs       = app.documents;
var message = "";
for(var i=0; i<docs.length; i++)
{
	message += docs[i].name+":"+docs[i].width+"*"+docs[i].height+"\r\n";
}
alert(message);