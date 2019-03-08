var layer         = app.activeDocument.activeLayer;
var shadows  = [0, 0, 0];
var midtones = [100, 0, 60];
var highlights = [0, 0, 0];
var preserveLuminosity = true;
layer.adjustColorBalance(shadows, midtones, highlights, preserveLuminosity);