const div = document.getElementById('home');
div.querySelector('a').addEventListener('click', dashboardView);
div.remove();

let ctx = null;

export function homeView(newCtx) {
    ctx = newCtx;
    ctx.render(div);
    ctx.checkUserNav();
}

function dashboardView() {
    ctx.goto('dashboard-view');
}
