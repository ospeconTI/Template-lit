/** @format */

import { css } from "lit";

export const gridLayout = css`
    .layout {
        display: grid;
    }
    .no-padding {
        padding: 0 !important;
    }
    .grid {
        display: grid;
        grid-gap: 0.5rem;
        padding: 0.5rem;
        align-items: center;
    }

    .inner-grid {
        display: grid;
        grid-gap: 0.5rem;
        padding: 0 !important;
        align-items: center;
    }

    .fit {
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }

    .fit2 {
        grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
    }
    .fit3 {
        grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
    }
    .fit4 {
        grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    }
    .fit6 {
        grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    }

    .fit10 {
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }

    .fit18 {
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }
    .fill {
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
    .column {
        grid-auto-flow: column;
    }
    .row {
        grid-auto-flow: row;
    }
    .start {
        place-content: start;
    }
    .end {
        place-content: end;
    }
    .center {
        place-content: center;
    }
    .itemsCenter {
        justify-items: center;
    }

    .itemsRight {
        justify-items: right;
    }
    .itemsLeft {
        justify-items: left;
    }
    .stretch {
        justify-content: stretch;
        align-content: stretch;
    }
    .justify-self-end {
        justify-self: end;
    }
    .justify-self-start {
        justify-self: start;
    }
    .justify-self-center {
        justify-self: center;
    }
    .align-self-end {
        align-self: end;
    }
    .align-self-start {
        align-self: start;
    }
    .align-start {
        align-items: start;
    }
    .align-end {
        align-items: end;
    }

    .align-self-stretch {
        align-self: stretch;
    }

    .justify-self-stretch {
        justify-self: stretch;
    }
`;
