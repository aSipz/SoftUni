function focused() {
    let outerDiv = document.querySelector('body>div');
    outerDiv.addEventListener('focus', function(e){
        if (e.target.nodeName == 'INPUT') {
            e.target.parentNode.classList = 'focused';
        }
    }, true);
    outerDiv.addEventListener('blur', function(e){
        if (e.target.nodeName == 'INPUT') {
            e.target.parentNode.classList.remove('focused');
        }
    }, true);
}