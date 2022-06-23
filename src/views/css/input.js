/** @format */

import { css } from "lit";

export const input = css`
    .input input::-webkit-outer-spin-button,
    .input input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    /* Firefox */
    .input input[type="number"] {
        -moz-appearance: textfield;
    }
    .input {
        display: grid;
        grid-template-areas:
            "for"
            "input"
            "subtext";
        grid-template-rows: 1fr auto 1fr;
        grid-gap: 0.1rem;
    }
    .input label[subtext],
    .input label[error] {
        font-size: 0.65rem;
        grid-area: subtext;
    }
    .input[disabled] input {
        color: var(--on-formulario-disabled);
        border: 1px solid var(--on-formulario-disabled);
        cursor: not-allowed;
    }

    .input[disabled] label {
        color: var(--on-formulario-disabled);
    }
    .input input:focus {
        border: 1px solid var(--primario);
        background-color: var(--aplicacion);
    }
    .input:not([error]) input:focus + label[for] {
        color: var(--primario);
    }
    .input label[for] {
        grid-area: for;
    }
    .input input {
        grid-area: input;
        box-sizing: border-box;
        width: 100%;
        padding: 0.566rem;
        background-color: transparent;
        border: 1px solid var(--on-formulario);
        color: var(--on-formulario);
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        outline: none;
        border-radius: var(--control-radius);
        font-family: inherit;
    }
    .input[error] input {
        border: 1px solid var(--error);
    }

    .input[error] label[subtext] {
        display: none;
    }
    .input label {
        color: var(--on-formulario);
        font-size: var(--font-label-size);
        font-weight: var(--font-label-weight);
    }
    .input[error] label {
        color: var(--error);
    }
    .input:not([error]) label[error] {
        display: none;
    }
    .input label[oculto] {
        display: none;
    }
    .input input::placeholder {
        /* Firefox, Chrome, Opera */
        color: var(--on-formulario-disable);
    }
`;
