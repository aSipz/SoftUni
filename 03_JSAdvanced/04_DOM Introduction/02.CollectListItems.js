function extractText() {
    let elements = Array.from(document.querySelectorAll('ul#items li'));
    let textToAppend = '';
    for (const element of elements) {
            textToAppend += element.textContent + '\n';
    }
    document.getElementById('result').value = textToAppend.trim();
}