import * as roomService from '../data/room.js';
import { repeat } from '../lib/directives/repeat.js';
import {  html } from '../lib/lit-html.js';


export async function showCatalog(ctx) {
    ctx.render(catalogTemplate(html`<p>Loading &hellip;</p>`));

    const { results: rooms } = await roomService.getAll();

    ctx.render(catalogTemplate(listTemplate(rooms)));



    function catalogTemplate(list) {
        return html`
        <h2>Available Rooms</h2>
        ${list}`
    }

    function listTemplate(rooms) {
        return html`
        <section>
            ${repeat(rooms, i => i.objectId, createRoomCard)}
        </section>`;
    }

    function createRoomCard(room) {
        return html`
        <article class="room-card">
            <h3>${room.name}</h3>
            <p>Location: ${room.location}</p>
            <p>Beds: ${room.beds}</p>
            <p><a class="action" href="/rooms/${room.objectId}">View Details</a></p>
        </article>`;
    }

}