var docRef                = app.documents.add(500, 300);
var artLayerRef         = docRef.artLayers.add();
artLayerRef.kind        = LayerKind.TEXT;
var textItemRef         = artLayerRef.textItem;
textItemRef.contents = "Hello, Photoshop Script!";
textItemRef.size        = 40;
artLayerRef.translate(0, 120);