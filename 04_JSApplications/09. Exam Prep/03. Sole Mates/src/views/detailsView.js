import { deleteShoe, getShoe } from '../data/data.js';
import { html, nothing } from '../lib.js';

let ctx = null;

export async function showDetails(context) {

    ctx = context;

    const shoeId = ctx.params.id;
    const user = ctx.user;
    const shoe = await getShoe(shoeId);
    ctx.render(createDetailsTemplate(shoe, user));

}

function createDetailsTemplate(shoe, user) {
    return html`

<!-- Details page -->
<section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="..${shoe.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
              <p>
                Model: <span id="details-model">${shoe.model}</span>
              </p>
              <p>Release date: <span id="details-release">${shoe.release}</span></p>
              <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
              <p>Value: <span id="details-value">${shoe.value}</span></p>
            </div>

            ${user && user.userId == shoe._ownerId
            ? html`
            <div id="action-buttons">
              <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>`
            : nothing}

          </div>
        </section>`
}

async function onDelete() {
    const shoeId = ctx.params.id;
    const answer = confirm('Are you sure?');
    if (!answer) {
        return;
    }
    const data = await deleteShoe(shoeId);
    ctx.page.redirect('/dashboard');
}