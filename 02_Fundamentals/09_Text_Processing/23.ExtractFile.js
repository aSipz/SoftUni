function extract(input) {
    let pathArray = input.split('\\');
    let fileExtension = pathArray[pathArray.length - 1];
    let index = fileExtension.lastIndexOf('.');
    let file = fileExtension.substring(0,index);
    let extension = fileExtension.substring(index + 1);
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}
extract('C:\\Internal\\training-internal\\Template.glaa.pptx');