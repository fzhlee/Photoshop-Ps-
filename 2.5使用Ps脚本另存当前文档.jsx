var document       = app.activeDocument;
var fileOut            = new File("E:\\newPic.png");
var options            = PNGSaveOptions;
var asCopy            = true;
var extensionType = Extension.LOWERCASE;
document.saveAs(fileOut, options, asCopy, extensionType);