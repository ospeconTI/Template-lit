/** @format */

import { css } from "lit";

export const dialog = css`
    dialog::backdrop {
        backdrop-filter: blur(30px);
    }
    dialog:not([open]) {
        display: none;
    }
    dialog[open] {
        display: grid;
        grid-template-areas:
            "header"
            "body"
            "footer";
        grid-template-rows: auto 1fr auto;
        background-color: var(--formulario);
        color: var(--on-formulario);
        grid-gap: 0.5rem;
        border-radius: var(--control-radius);
        box-shadow: var(--shadow-elevation-12-box);
        z-index: var(--nivel-maximo);
        border: none;
    }

    dialog .header {
        display: grid;
        grid-area: header;
        font-size: var(--font-header-h1-size);
        font-weight: var(--font-header-h1-weight);
        padding: 1rem;
    }
    dialog .body {
        display: grid;
        grid-area: body;
        color: var(--on-formulario-bajada);
        font-size: var(--font-bajada--size);
        font-weight: var(--font-bajada--weight);
        padding: 0 1rem 1rem 1rem;
    }
    p {
        margin: 0;
    }
    dialog .footer {
        display: grid;
        grid-area: footer;
    }
`;
