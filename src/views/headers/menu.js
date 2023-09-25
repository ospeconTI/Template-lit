/** @format */

import { html, LitElement, css } from "lit";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { goTo } from "../../redux/routing/actions";
import { isInLayout } from "../../redux/screens/screenLayouts";
import { gridLayout } from "../css/gridLayout";
import { logo } from "../css/logo";
import { select } from "../css/select";
import { button } from "../css/button";
import { MENU, RIGHT, PERSON } from "../../../assets/icons/svgs";
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
		this.optionsCount = 4;
		this.defaultOption = 0;
		this.selectedOption = new Array(this.optionsCount).fill(false);
		this.selectedOption[this.defaultOption] = true;

		const gestures = new gesturesController(this, this.gestos);
	}

	static get styles() {
		return css`
			${gridLayout}
			${select}
            ${logo}
            ${button}
            :host {
				display: grid;
				grid-auto-flow: column;
				padding: 0 !important;
				background-color: var(--primario);
			}
			:host([hidden]) {
				display: none;
			}

			#titulo {
				color: var(--on-primario);
				cursor: pointer;
				font-size: 2vh;
			}

			.menuItem {
				color: var(--on-secundario);
				cursor: pointer;
			}

			div[oculto] {
				display: none;
			}
			h1 {
				margin: 0;
			}
			#version {
				color: var(--on-primario);
				font-size: 1.2vh;
				align-self: start;
			}
			#opciones {
				justify-content: end;
				grid-gap: 2rem;
				padding: 0;
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
				background-color: var(--velo);
				z-index: 90;
			}

			.menu-button {
				cursor: pointer;
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

			:host([media-size="large"]) button[selected] {
				color: var(--terciario);
				stroke: var(--terciario);
				fill: var(--terciario);
			}

			:host(:not([media-size="large"])) #opciones {
				position: fixed;
				top: 0;
				right: -100%;
				height: 100vh;
				width: 60%;
				grid-auto-flow: row;
				background-color: var(--secundario);
				align-content: start;
				transition: 0.3s all;
				display: grid;
				justify-items: start;
				z-index: 100;
			}
			svg {
				height: 3.5vh;
				width: 3.5vh;
			}
			button[etiqueta] {
				display: grid;
				grid-auto-flow: column;
				grid-template-columns: auto 1fr;
				grid-gap: 0.3rem;
				align-items: center;
				align-content: center;
			}
			button[link] {
				color: var(--on-primario);
				stroke: var(--on-primario);
				fill: var(--on-primario);
			}
			button[raised] {
				box-shadow: none;
				padding: 3vh !important;
			}
			#version {
				color: var(--on-primario-bajada);
			}
		`;
	}
	render() {
		return html`
			<div id="velo" @click=${this.toggleMenu}></div>
			<div class="grid column" style="padding: 0 1rem;">
				<div class="inner-grid column start">
					<div class="logo"></div>
					<div id="titulo" @click="${this.click}" .option=${"main"}>${__DESCRIPTION__}</div>
					<div id="version">${__VERSION__}</div>
				</div>
				<button raised circle class="menu-button" @click=${this.toggleMenu}>${MENU}</button>
			</div>

			<div id="opciones" class="grid column" @click=${this.toggleMenu}>
				<button raised circle action class="menu-button">${RIGHT}</button>
				<button link ?selected="${this.selectedOption[0]}" @click=${this.click} .option=${"opcion0"}>Opcion 0</button>
				<button link ?selected="${this.selectedOption[1]}" @click=${this.click} .option=${"opcion1"}>Opcion 1</button>
				<button link ?selected="${this.selectedOption[2]}" @click=${this.click} .option=${"opcion2"}>Opcion 2</button>
				<button link etiqueta ?selected="${this.selectedOption[3]}" @click=${this.click} .option=${"opcion3"}>
					<div>${PERSON}</div>
					<div class="justify-self-start">Login</div>
				</button>
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

		this.selectedOption = new Array(this.optionsCount).fill(false);
		this.selectedOption[Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget) - 1] = true;

		store.dispatch(goTo(e.currentTarget.option));
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
			selectedOption: {
				type: Array,
			},
		};
	}
}
window.customElements.define("menu-principal", menuPrincipal);
