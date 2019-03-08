var document = app.activeDocument;
var fileOut  = new File("E:\\compressed.gif");

var exportOptionsSaveForWeb                  = new ExportOptionsSaveForWeb();
exportOptionsSaveForWeb.transparency    = false;
exportOptionsSaveForWeb.includeProfile   = true;
exportOptionsSaveForWeb.lossy                 = 0;
exportOptionsSaveForWeb.colors               = 256;
exportOptionsSaveForWeb.colorReduction = ColorReductionType.SELECTIVE;
exportOptionsSaveForWeb.format              = SaveDocumentType.COMPUSERVEGIF;
exportOptionsSaveForWeb.ditherAmount   = 0;
exportOptionsSaveForWeb.dither               = Dither.NOISE;
exportOptionsSaveForWeb.palette              = Palette.LOCALADAPTIVE;

document.exportDocument(fileOut, ExportType.SAVEFORWEB, exportOptionsSaveForWeb);