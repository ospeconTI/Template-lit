/** @format */
import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers/connect";
import { spinner } from "../css/spinner";
const LOADING = "api.loading";
export class SpinnerControl extends connect(store, LOADING)(LitElement) {
    constructor() {
        super();
        this.hidden = true;
    }
    static get styles() {
        return css`
            :host[hidden] {
                display: none;
            }
        `;
    }
    render() {}
    firstUpdated() {
        this.renderRoot.host.className = "spinner";
    }
    stateChanged(state, name) {
        if (name == LOADING) this.hidden = state.api.loading == 0;
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true,
            },
        };
    }
}
window.customElements.define("spinner-control", SpinnerControl);
