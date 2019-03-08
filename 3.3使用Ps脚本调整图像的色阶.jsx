var layer = app.activeDocument.activeLayer;
var inputRangeStart      = 32;
var inputRangeEnd       = 145;
var inputRangeGamma = 1.00;
var outputRangeStart   = 0;
var outputRangeEnd     = 255;
layer.adjustLevels(inputRangeStart, inputRangeEnd, inputRangeGamma, outputRangeStart, 
outputRangeEnd);