import { deleteFact, getFact, getFactLikes, getUserFactLikes, like } from '../data/data.js';
import { html, nothing } from '../lib.js';

let ctx = null;

export async function showDetails(context) {

    ctx = context;

    const factId = ctx.params.id;
    const user = ctx.user;
    const [fact, factLikes, userLikes] = await Promise.all([
        getFact(factId),
        getFactLikes(factId),
        user && getUserFactLikes(factId, user.userId)
    ]);
    ctx.render(createDetailsTemplate(fact, factLikes, userLikes, user));

}

function createDetailsTemplate(fact, factLikes, userLikes, user) {
    return html`
     <!-- Details page -->
     <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="..${fact.imageUrl}" alt="example1" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${fact.description}</p>
                   <p id ="more-info">${fact.moreInfo}</p>
              </div>

              <h3>Likes:<span id="likes">${factLikes}</span></h3>

              ${user
            ? html`
            <div id="action-buttons">
                    ${user.userId == fact._ownerId
                    ? html`
                    <!--Edit and Delete are only for creator-->
                    
                    <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
                        <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
                    : html`
                    ${userLikes === 0
                            ? html`
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>`
                            : nothing}
                    `}
                    </div>`
            : nothing}
            </div>
        </div>
      </section>`
}

async function onDelete() {
    const factId = ctx.params.id;
    const answer = confirm('Are you sure?');
    if (!answer) {
        return;
    }
    await deleteFact(factId);
    ctx.page.redirect('/dashboard');
}

async function onLike() {
    const factId = ctx.params.id;
    await like(factId);
    ctx.page.redirect(`/details/${factId}`);
}