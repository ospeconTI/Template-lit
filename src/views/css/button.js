/** @format */

import { css } from "lit";

export const button = css`
    button {
    }

    button[flat] {
        position: relative;
        cursor: pointer;
        color: var(--primario);
        fill: var(--primario);
        stroke: var(--primario);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: var(--control-radius);
        border: 1px solid var(--primario);
        padding: 0.5rem 1rem;
        text-decoration: none;
        outline: none;
    }
    button[flat][round],
    button[raised][round] {
        border-radius: 1rem;
    }
    button[flat][circle],
    button[raised][circle] {
        display: grid;
        place-content: center;
        border-radius: 50%;
        width: 0;
        height: 0;
        padding: 1.5rem;
    }
    button[circle][big] {
        padding: 2rem;
    }
    button[circle][big] {
        padding: 2rem;
    }
    button[flat][action] {
        color: var(--secundario);
        fill: var(--secundario);
        stroke: var(--secundario);
        border: 1px solid var(--secundario);
    }
    button:not([disabled])[flat]:hover {
        background-color: var(--primario);
        color: var(--on-primario);
        fill: var(--on-primario);
        stroke: var(--on-primario);
    }

    button:not([disabled])[flat][action]:hover {
        background-color: var(--secundario);
        color: var(--on-secundario);
        fill: var(--on-secundario);
        stroke: var(--on-secundario);
    }
    button[flat]:active {
        background-color: var(--primario);
    }

    button[flat][disabled] {
        color: var(--on-formulario-disabled);
        fill: var(--on-formulario-disabled);
        stroke: var(--on-formulario-disabled);
        background-color: transparent;
        cursor: not-allowed;
        pointer-events: none;
        border: 0px;
    }

    button[link] {
        cursor: pointer;
        color: var(--primario);
        fill: var(--primario);
        stroke: var(--primario);
        background-color: transparent;
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        padding: 0.5rem 1rem;
        text-decoration: none;
        outline: none;
        border: none;
    }

    button:not([disabled])[link]:hover {
        text-decoration: underline;
    }

    button[link][action] {
        color: var(--secundario);
        fill: var(--secundario);
        stroke: var(--secundario);
    }

    button[link][disabled] {
        color: var(--on-formulario-disabled);
        fill: var(--on-formulario-disabled);
        stroke: var(--on-formulario-disabled);
        cursor: not-;
        pointer-events: none;
        text-decoration: underline;
    }

    button[raised] {
        cursor: pointer;
        color: var(--on-primario);
        fill: var(--on-primario);
        stroke: var(--on-primario);
        background-color: var(--primario);
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        border-radius: var(--control-radius);
        padding: 0.5rem 1rem;
        transition-duration: 0.2s;
        text-decoration: none;
        border: none;
        outline: none;
        box-shadow: var(--shadow-elevation-2-box);
    }

    button:not([disabled])[raised]:hover {
        background-color: var(--primario10);
        box-shadow: var(--shadow-elevation-6-box);
    }
    button:not([disabled])[raised][action]:hover {
        background-color: var(--secundario10);
    }

    button[raised][action] {
        background-color: var(--secundario);
        color: var(--on-secundario);
        fill: var(--on-secundario);
        stroke: var(--on-secundario);
    }
    button[raised][disabled] {
        color: var(--on-formulario-disabled);
        fill: var(--on-formulario-disabled);
        stroke: var(--on-formulario-disabled);
        background-color: var(--light-separator);
        cursor: not-allowed;
        pointer-events: none;
        box-shadow: none;
    }
    button[raised]:focus {
        box-shadow: var(--shadow-elevation-6-box);
        transform: scale(1.02);
        background-color: var(--primario10);
    }
    button[raised][action]:focus {
        background-color: var(--secundario10);
    }
    button[flat]:focus {
        background-color: var(--primario);
        color: var(--on-primario);
        fill: var(--on-primario);
        stroke: var(--on-primario);
    }
    button[flat][action]:focus {
        background-color: var(--secundario);
        color: var(--on-secundario);
        fill: var(--on-secundario);
        stroke: var(--on-secundario);
    }
    button[link]:focus {
        text-decoration: underline;
    }
    button[link][action]:focus {
        text-decoration: underline;
    }
`;
