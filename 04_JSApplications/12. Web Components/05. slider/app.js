import { render as litRender, html } from '../node_modules/lit-html/lit-html.js';

class MySlider extends HTMLElement {

    #root;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'closed' });

        this._step = this.getAttribute('step');
        this._inverted = Boolean(this.getAttribute('inverted'));
        this._inverted ? this._value = 100 - Number(this.getAttribute('value')) : this._value = this.getAttribute('value');
    }

    connectedCallback() {
        this.render();
    }

    onChange(e) {
        this._value = e.target.value;
        this.render();
    }

    render() {
        litRender(template(this._value, this._step, this._inverted, this.onChange), this.#root, { host: this });
    }
}

customElements.define('my-slider', MySlider);

function template(value, step, inverted, onChange) {
    return html`
    <style>
            .slider-container {
                font-family: 'Montserrat', sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                height: 100px;
            }

            .slider-percentage-value {
                font-weight: bold;
                text-align: center;
                margin: 1em 0;
            }

            .slider {
                -webkit-appearance: none;
                width: 100%;
                height: 15px;
                border-radius: 5px;
                background: #d3d3d3;
                outline: none;
                opacity: 0.7;
                -webkit-transition: .2s;
                transition: opacity .2s;
                margin: 0 1em;
            }

            .slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background: #4CAF50;
                cursor: pointer;
            }

            .slider::-moz-range-thumb {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background: #4CAF50;
                cursor: pointer;
            }
        </style>
        <div class="slider-container">
            <input class="slider" type="range" min="0" max="100" .value=${value} step=${step} @input=${onChange}/>
            <div class="slider-end">
                Percentage: <span class="slider-percentage-value">${inverted ? (100 - Number(value)).toFixed(2) : Number(value).toFixed(2)} %</span>
            </div>
        </div>`;
}