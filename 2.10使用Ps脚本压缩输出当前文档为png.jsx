var document          = app.activeDocument;
var fileOut                = new File("E:\\ompressed.png");
var exportOptions    = new ExportOptionsSaveForWeb();
exportOptions.PNG8 = true;
document.exportDocument(fileOut, ExportType.SAVEFORWEB, exportOptions);