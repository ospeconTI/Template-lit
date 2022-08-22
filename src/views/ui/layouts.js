/** @format */

import { css, unsafeCSS } from "lit";
import { ALL_BODY, HEADER_BODY_FOOT, BODY_FOOT, HEADER_BODY, SLIDER_HEADER_BODY } from "../../redux/screens/layouts";

export const layoutsCSS = css`
	:host([layout="${unsafeCSS(SLIDER_HEADER_BODY.name)}"]) {
		grid-template-areas:
			"foot  header"
			"foot    body";
		grid-template-rows: 15vh 85vh;
		grid-template-columns: 15vw 85vw;
		grid-gap: 0rem;
	}

	:host([layout="${unsafeCSS(HEADER_BODY.name)}"]) {
		grid-template-areas:
			"header"
			"body";
		grid-template-rows: 8vh 92vh;
		grid-template-columns: 100vw;
		grid-gap: 0rem;
	}
	:host([layout="${unsafeCSS(BODY_FOOT.name)}"]) {
		grid-template-areas:
			"body"
			"foot";
		grid-template-rows: 92vh 8vh;
		grid-template-columns: 100vw;
		grid-gap: 0.3rem;
	}

	:host([layout="${unsafeCSS(HEADER_BODY_FOOT.name)}"]) {
		grid-template-areas:
			"header"
			"body"
			"foot";
		grid-template-rows: 8vh 84vh 8vh;
		grid-template-columns: 100vw;
	}
	:host([layout="${unsafeCSS(ALL_BODY.name)}"]) {
		grid-template-areas: "body";
		grid-template-rows: 100vh;
		grid-template-columns: 100vw;
	}

	.header {
		grid-area: header;
		background-color: var(--color-azul-oscuro);
		padding: 0 1rem 0 1rem;
	}
	.body {
		grid-area: body;
		padding: 1rem;
	}
	.foot {
		grid-area: foot;
		background-color: var(--color-blanco);
	}
`;
