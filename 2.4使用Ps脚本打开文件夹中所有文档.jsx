var samplesFolder = Folder("E:\Images");
var fileList             = samplesFolder.getFiles();
for (var i=0; i<fileList.length; i++) 
{
    if (fileList[i] instanceof File) 
        open(fileList[i]);
}