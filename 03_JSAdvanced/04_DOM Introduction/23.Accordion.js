function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let moreText = document.getElementById('extra');
    if (button.textContent == 'More') {
        button.textContent = 'Less';
        moreText.style.display = 'block';
    } else if (button.textContent == 'Less') {
        button.textContent = 'More';
        moreText.style.display = 'none';
    }
}