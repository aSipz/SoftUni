function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', function(e){
        let position = e.offsetX;
        console.log(e.target);
        let result = Math.trunc(position / (e.target.clientWidth - 1) * 100);
        document.getElementById('result').textContent = result + '%';
    });
    gradient.addEventListener('mouseout', function(e){
        document.getElementById('result').textContent = '';
    });
}