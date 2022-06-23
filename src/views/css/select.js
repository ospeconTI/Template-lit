/** @format */

import { css } from "lit";

export const select = css`
    .select {
        display: grid;
        grid-template-areas:
            "for"
            "select"
            "subtext";
        grid-template-rows: 1fr auto 1fr;
        grid-gap: 0.1rem;
        font-family: inherit;
    }
    .select[disabled] select {
        color: var(--on-formulario-disabled);
        border-color: var(--on-formulario-disabled);
        cursor: not-allowed;
    }
    .select[disabled] label {
        color: var(--on-formulario-disabled);
        cursor: not-allowed;
    }
    .select select::-ms-expand {
        display: none;
    }
    .select select {
        grid-area: select;
        box-sizing: border-box;
        width: 100%;
        padding: 0.5rem;
        color: var(--on-formulario);
        cursor: pointer;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: var(--control-radius);
        outline: 0;
        box-shadow: none;
        border: 1px solid var(--on-formulario);
        background-image: none;
        background-color: transparent;
    }
    .select select:focus {
        border-color: var(--primario);
        background-color: var(--aplicacion);
    }

    .select:not([error]):focus-within label[for] {
        color: var(--primario);
    }
    .select option {
        color: var(--on-formulario);
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        background-color: var(--formulario);
        font-family: inherit;
    }
    .select select:required:invalid {
        color: var(--on-formulario-disabled);
    }
    .select option[value=""][disabled] {
        display: none;
    }
    .select label {
        font-size: var(--font-label-size);
        font-weight: var(--font-label-weight);
        color: var(--on-formulario);
    }
    .select label[subtext],
    .select label[error] {
        font-size: 0.65rem;
        grid-area: subtext;
    }
    .select[error] label {
        color: var(--error);
    }
    .select[error] select {
        border-color: var(--error);
    }
    .select:not([error]) label[error] {
        display: none;
    }
    .select[error] label[subtext] {
        display: none;
    }
`;
