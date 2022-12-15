function lockedProfile() {
    let main = document.getElementById('main');
    main.addEventListener('click', function(e) {
        if (e.target.nodeName == 'BUTTON') {
            let lockButton = Array.from(e.target.parentNode.children).filter(a => a.type == 'radio' && a.value == 'lock')[0];
            if (!lockButton.checked) {
                let hiddenDiv = Array.from(e.target.parentNode.children).filter(a => a.id.includes('Hidden'))[0];
                if (e.target.textContent == 'Show more') {
                    e.target.textContent = 'Hide it';
                    hiddenDiv.style.display = 'block';
                } else {
                    e.target.textContent = 'Show more';
                    hiddenDiv.style.display = 'none';
                }
            } 
        }
    });
}