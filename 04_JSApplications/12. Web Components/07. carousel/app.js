import { html, render as litRender } from '../node_modules/lit-html/lit-html.js'

class MyCarousel extends HTMLElement {
    #root;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'closed' });
        this._images = [...this.querySelectorAll('img')];
        this._count = this._images.length;
        this._current = 0;
    }

    connectedCallback() {
        this.render();
    }

    onClick(e) {

        if (e.target.tagName == 'A') {
            if (e.target.className == 'next') {
                this._current == this._count - 1 ? this._current = 0 : this._current++;
            } else {
                this._current == 0 ? this._current = this._count - 1 : this._current--;
            }
        }

        if (e.target.tagName == 'SPAN') {
            this._current = [...this.#root.querySelectorAll('span')].indexOf(e.target);
        }

        this.render();
    }

    render() {
        litRender(createTmp(this._images ,this._images[this._current], this._current + 1, this._count, this.onClick), this.#root, { host: this });
    }
}

customElements.define('my-carousel', MyCarousel);

function createTmp(images, img, current, count, onClick) {
    return html`
    <style>
            .carousel-container {
                max-width: 60rem;
                position: relative;
                margin: 0 auto;
            }

            .carousel-controls {
                text-align: center;
            }

            /* .carousel-slide {
                display: none;
            } */

            .carousel-slide>img {
                width: 100%;
            }

            /* Next & previous buttons */

            .prev,
            .next {
                cursor: pointer;
                position: absolute;
                top: 50%;
                width: auto;
                margin-top: -22px;
                padding: 16px;
                color: white;
                font-weight: bold;
                font-size: 18px;
                transition: 0.6s ease;
                border-radius: 0 3px 3px 0;
                user-select: none;
            }

            /* Position the "next button" to the right */

            .next {
                right: 0;
                border-radius: 3px 0 0 3px;
            }

            /* On hover, add a black background color with a little bit see-through */

            .prev:hover,
            .next:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }

            /* Caption text */

            .text {
                color: #f2f2f2;
                font-size: 25px;
                font-weight: bolder;
                padding: 8px 12px;
                position: absolute;
                bottom: 8px;
                width: 100%;
                text-align: center;
            }

            /* Number text (1/3 etc) */

            .numbertext {
                color: #f2f2f2;
                font-size: 18px;
                padding: 8px 12px;
                position: absolute;
                top: 0;
            }

            /* The dots/bullets/indicators */
            .carousel-controls>.dot {
                cursor: pointer;
                height: 15px;
                width: 15px;
                margin: 0 2px;
                background-color: #bbb;
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
            }

            .active,
            .dot:hover {
                background-color: #717171;
            }

            /* Fading animation */

            .fade {
                -webkit-animation-name: fade;
                -webkit-animation-duration: 1.5s;
                animation-name: fade;
                animation-duration: 1.5s;
            }

            @-webkit-keyframes fade {
                from {
                    opacity: .4
                }

                to {
                    opacity: 1
                }
            }

            @keyframes fade {
                from {
                    opacity: .4
                }

                to {
                    opacity: 1
                }
            }
        </style>
        <div @click=${onClick}>
        <div class="carousel-container">
            <article class="carousel-slide">
                <p class="numbertext">${current} / ${count}</p>
                ${img}
                <p class="text">${img.getAttribute('caption-text')}</p>
            </article>

            <a class="prev" >&#10094;</a>
            <a class="next" >&#10095;</a>
        </div>
        <div class="carousel-controls">

            ${images.map(img => html`<span class="dot"></span>`)}
            
            </div>
        </div>`;
}