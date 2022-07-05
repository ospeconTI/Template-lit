/** @format */

import { css } from "lit";

export const check = css`
    .check {
        display: grid;
        grid-template-areas: "etiqueta chequeo";
        grid-template-columns: 3fr 1fr;
        box-sizing: content-box;
        border: 1px solid var(--on-formulario);
        border-radius: var(--control-radius);
        padding: 0.5rem;
        font-size: var(--font-bajada-size);
    }
    .check[disabled] {
        border-color: var(--on-formulario-disabled);
    }
    .check[disabled] * {
        cursor: not-allowed !important;
    }

    .check[disabled] label {
        color: var(--on-formulario-disabled);
        border-color: var(--on-formulario-disabled);
    }
    .check[disabled] label:last-child {
        border-color: var(--on-formulario-disabled);
    }
    .check input[type="checkbox"]:focus + label {
        color: var(--primario);
    }
    .check:focus-within {
        background-color: var(--aplicacion);
        border-color: var(--primario);
    }

    .check input[type="checkbox"] {
        min-width: 0.8rem;
        min-height: 0.8rem;
        cursor: pointer;
        z-index: 10;
        opacity: 0;
        grid-area: chequeo;
        place-self: center;
    }
    .check label {
        cursor: pointer;
        grid-area: etiqueta;
        align-self: center;
        color: var(--on-formulario);
    }
    .check label:last-child {
        display: grid;
        box-sizing: border-box;
        content: "";
        width: 1rem;
        height: 1rem;
        border: 0.1rem solid var(--primario);
        border-radius: 50%;
        pointer-events: none;
        grid-area: chequeo;
        place-self: center;
    }
    .check input:checked + label + label {
        border: 0.4rem solid var(--primario);
    }
    .check[action] label:last-child {
        border: 0.1rem solid var(--secundario);
    }
    .check[action] input:checked + label + label {
        border: 0.4rem solid var(--secundario);
    }
`;
