/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { gridLayout } from "../css/gridLayout";
import { logo } from "../css/logo";
import { select } from "../css/select";
import { MENU, RIGHT } from "../../../assets/icons/svgs";
import { gestures } from "../../libs/gestures";
import { logout } from "../../redux/autorizacion/actions";
import { gesturesController } from "../controllers/gesturesController";

const MEDIA_CHANGE = "ui.media.timeStamp";
const SCREEN = "screen.timeStamp";
const USUARIO = "autorizacion.loginTimeStamp";

export class menuPrincipal extends connect(store, MEDIA_CHANGE, SCREEN, USUARIO)(LitElement) {
    constructor() {
        super();
        this.area = "header";
        this.visible = false;
        this.arrastrando = false;
        this.usuario = null;
        const gestures = new gesturesController(this, this.gestos);
    }

    static get styles() {
        return css`
            ${gridLayout}
            ${select}
            ${logo}
            :host {
                display: grid;
                grid-auto-flow: column;
                padding: 0 !important;
                background-color: var(--primary-color);
            }
            :host([hidden]) {
                display: none;
            }

            #titulo {
                color: var(--light-text-color);
                cursor: pointer;
            }

            .menuItem {
                color: var(--light-text-color);
                cursor: pointer;
            }

            div[oculto] {
                display: none;
            }
            h1 {
                margin: 0;
            }
            #version {
                color: var(--light-application-color);
                font-size: 0.6rem;
                align-self: start;
            }
            #opciones {
                justify-content: end;
                grid-gap: 2rem;
                padding: 2rem;
            }

            :host([media-size="large"]) .menu-button,
            :host([media-size="large"]) #velo {
                display: none;
            }

            #velo {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.3);

                z-index: 90;
            }

            .menu-button {
                cursor: pointer;
                stroke: var(--light-text-color);
                fill: var(--light-text-color);
                justify-self: end;
                justify-content: end;
                display: grid;
            }

            :host([visible]) #velo {
                right: 0;
            }

            :host([arrastrando]) #opciones {
                position: absolute;
                transition: none;
            }
            .activo {
                color: var(--light-text-color);
                font-size: var(--font-label-size);
            }

            :host([media-size="large"]) .seleccionado {
                color: var(--secondary-color);
            }

            :host(:not([media-size="large"])) #opciones {
                position: fixed;
                top: 0;
                right: -100%;
                height: 100vh;
                width: 60%;
                grid-auto-flow: row;
                background-color: var(--secondary-color);
                align-content: start;
                transition: 0.3s all;
                display: grid;
                justify-items: start;
                z-index: 100;
            }
        `;
    }
    render() {
        return html`
            <div id="velo" @click=${this.toggleMenu}></div>
            <div class="grid column">
                <!--  <div class="grid row no-padding">
                    <div id="version" class="grid no-padding">V${__VERSION__}</div>
                    <div class="grid activo no-padding">${this.usuario ? this.usuario.Profiles[0].Perfil.Apellido : ""}</div>
                </div>
 -->
                <div class="inner-grid column start">
                    <div class="logo"></div>
                    <h1 id="titulo" @click="${this.click}" .option=${"main"}>${__DESCRIPTION__}</h1>
                </div>
                <div class="menu-button" @click=${this.toggleMenu}>${MENU}</div>
            </div>

            <div id="opciones" class="grid column" @click=${this.toggleMenu}>
                <div class="menu-button">${RIGHT}</div>
                <div class="menuItem seleccionado" @click=${this.click} .option=${"opcion 0"}>Opcion 0</div>
                <div class="menuItem" @click=${this.click} .option=${"opcion1"}>Opcion 1</div>
                <div class="menuItem" @click=${this.click} .option=${"opcion2"}>Opcion 2</div>
                <div class="menuItem" @click=${this.click} .option=${"opcion3"}>Opcion 3</div>
            </div>
        `;
    }

    gestos(e) {
        if (this.mediaSize != "large") {
            if (e.detail.ACTION == "move") {
                if (e.detail.dx > 0) {
                    this.arrastrando = true;
                    this.opciones.style.right = -e.detail.dx + "px";
                }
            }
            if (e.detail.ACTION == "end" && e.detail.LEFT_TO_RIGHT) {
                this.arrastrando = false;
                if (e.detail.dx > 40) {
                    this.toggleMenu();
                } else {
                    this.opciones.style.right = "0";
                }
            }
        }
    }
    toggleMenu() {
        this.visible = !this.visible;
        this.opciones.style.right = this.visible ? "0" : "-100%";
    }

    click(e) {
        if (e.currentTarget.option == "logout") {
            try {
                navigator.credentials.preventSilentAccess();
            } catch {}
            store.dispatch(logout());
            return;
        }

        const botones = this.shadowRoot.querySelectorAll(".menuItem");
        botones.forEach((button) => {
            button.classList.remove("seleccionado");
        });
        e.currentTarget.classList.add("seleccionado");

        store.dispatch(goTo(e.currentTarget.option));

        this.update();
    }

    firstUpdated(changedProperties) {
        this.opciones = this.shadowRoot.querySelector("#opciones");
    }

    stateChanged(state, name) {
        if (name == SCREEN || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size;
            this.hidden = true;
            const isCurrentScreen = state.screen.name != null;
            if (isInLayout(state, this.area) && isCurrentScreen) {
                this.hidden = false;
            }
        }
        if (name == USUARIO) {
            if (state.autorizacion.usuario.Profiles && state.autorizacion.usuario.Profiles.length != 0) {
                this.usuario = state.autorizacion.usuario;
            }
        }
    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size",
            },
            layout: {
                type: String,
                reflect: true,
            },
            hidden: {
                type: Boolean,
                reflect: true,
            },
            area: {
                type: String,
            },
            visible: {
                type: Boolean,
                reflect: true,
            },
            arrastrando: {
                type: Boolean,
                reflect: true,
            },
        };
    }
}
window.customElements.define("menu-principal", menuPrincipal);
