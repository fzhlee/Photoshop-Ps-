while(app.documents.length > 0) 
{
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}