var layer      = app.activeDocument.activeLayer;
var fillColor = app.foregroundColor;
var density  = 100;
var preserveLuminosity = true;
layer.photoFilter(fillColor, density, preserveLuminosity);