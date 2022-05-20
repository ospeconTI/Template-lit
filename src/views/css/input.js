/** @format */

import { css } from "lit";

export const input = css`
    .input {
        display: grid;
        grid-template-rows: 1fr auto 1fr;
        grid-gap: 0.1rem;
    }
    .input input {
        box-sizing: border-box;
        width: 100%;
        padding: 0.5rem;
        height: 2.5rem;
        background-color: var(--light-application-color);
        border: 1px solid var(--light-separator);
        color: var(--primary-color-oscuro);
        font-size: var(--font-bajada-size);
        font-weight: var(--font-bajada-weight);
        outline: none;
        border-radius: 5px;
        font-family: inherit;
    }
    .input.error input {
        border: 1px solid var(--color-error);
    }
    .input label {
        color: var(--primary-color-oscuro);
        font-size: var(--font-label-size);
        font-weight: var(--font-label-weight);
    }
    .input label[error] {
        color: var(--color-error);
        font-size: var(--font-error-size);
        font-weight: var(--font-error-weight);
    }
    .input label[oculto] {
        display: none;
    }
    ::placeholder {
        /* Firefox, Chrome, Opera */
        color: var(--light-separator);
    }
`;
