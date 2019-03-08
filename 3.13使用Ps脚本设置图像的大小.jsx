var document           = app.activeDocument;
var width                  = 600;
var height                 = 400;
var resolution            = 72;
var resampleMethod = ResampleMethod.AUTOMATIC;
var amount               = 50;
document.resizeImage(width, height, resolution, resampleMethod, amount);