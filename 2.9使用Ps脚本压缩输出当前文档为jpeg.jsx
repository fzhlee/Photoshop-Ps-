var document = app.activeDocument;
var fileOut  = new File("E:\\compressed.jpeg");

var exportOptionsSaveForWeb      = new ExportOptionsSaveForWeb();
exportOptionsSaveForWeb.format = SaveDocumentType.JPEG;
exportOptionsSaveForWeb.quality = 60;  

document.exportDocument(fileOut, ExportType.SAVEFORWEB, exportOptionsSaveForWeb);