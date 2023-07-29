import { html } from '../lib.js';

export function showHome(ctx) {
    ctx.render(createHomeTemplate());
}

function createHomeTemplate() {
    return html`
    <section id="home">
          <h1>Welcome to our website, where curiosity meets enjoyment!
             Discover fascinating fun facts that engage and entertain everyone,
              inviting you to participate in the joy of learning something new together.</h1>
              <img id="logo-img" src="./images/logo.png" alt=""/>
        </section>`;
}