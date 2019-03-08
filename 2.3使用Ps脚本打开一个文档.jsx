var sampleDoc = File("E:\Horse.jpg");
var message     = "您要打开示例文档吗？";
var answer       = confirm(message);
if (answer) 
	open(sampleDoc);