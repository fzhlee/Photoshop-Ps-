var answer = confirm("您需要随机设置前景色和背景色吗？");

if(answer) 
{
    app.foregroundColor.rgb.red     = Math.random() * 255;
    app.foregroundColor.rgb.green = Math.random() * 255;
    app.foregroundColor.rgb.blue   = Math.random() * 255;
    app.backgroundColor.rgb.red    = Math.random() * 255;
    app.backgroundColor.rgb.green = Math.random() * 255;
    app.backgroundColor.rgb.blue   = Math.random() * 255;
}