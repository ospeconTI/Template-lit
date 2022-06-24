/** @format */

import { css } from "lit";

export const spinner = css`
    .spinner[fixed] {
        position: fixed;
    }
    .spinner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 100000;
        width: 3rem;
        height: 3rem;
    }

    .spinner[hidden] {
        display: none;
    }

    .spinner[anillo] {
        border: 3px solid var(--primario);
        border-top-color: var(--secundario);
        border-radius: 50%;
        -webkit-animation: rotation 0.8s ease infinite;
        animation: rotation 0.8s ease infinite;
    }
    .spinner[aro] {
        border: 3px solid transparent;
        border-top-color: var(--primario);
        border-bottom-color: var(--secundario);
        border-radius: 50%;
        -webkit-animation: rotation 0.8s ease infinite;
        animation: rotation 0.8s ease infinite;
    }
    .spinner[cometa] {
        border-top: 3px solid var(--primario);
        border-right: 3px solid transparent;
        border-radius: 50%;
        -webkit-animation: rotation 0.8s linear infinite;
        animation: rotation 0.8s linear infinite;
    }
    .spinner[bloque] {
        background: var(--primario);
        -webkit-animation: flip 1.2s ease infinite;
        animation: flip 1.2s ease infinite;
    }
    .spinner[progress] {
        overflow: hidden;
        height: 0.5rem;
        background: var(--primario);
    }
    .spinner[progress]::before {
        content: "";
        position: absolute;
        left: -130%;
        width: 100%;
        height: 100%;
        background: var(--secundario);
        -webkit-animation: progress 4s linear infinite;
        animation: progress 4s linear infinite;
    }
    .spinner[radar] {
        background: var(--primario);
        border-radius: 50%;
        -webkit-animation: pulse 1s ease-in-out infinite;
        animation: pulse 1s ease-in-out infinite;
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
    }

    .spinner[sonar]::before,
    .spinner[sonar]::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
    }
    .spinner[sonar]::before {
        background: var(--primario);
        -webkit-animation: pulse2 2s ease-in-out infinite;
        animation: pulse2 2s ease-in-out infinite;
    }
    .spinner[sonar]::after {
        background: var(--primario);
        -webkit-animation: pulse2 2s 1s ease-in-out infinite;
        animation: pulse2 2s 1s ease-in-out infinite;
    }
    .spinner[dado] {
        -webkit-perspective: 200px;
        perspective: 200px;
    }
    .spinner[dado]::before {
        display: block;
        content: "";
        width: 50%;
        height: 50%;
        background: var(--primario);
        -webkit-animation: 2s flipWalker ease infinite;
        animation: 2s flipWalker ease infinite;
    }

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    @keyframes rotation {
        from {
            -webkit-transform: translate(-50%, -50%) rotate(0deg);
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
    @-webkit-keyframes flip {
        0% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        50% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(0deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-180deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-180deg);
        }
    }
    @keyframes flip {
        0% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        50% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(0deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-180deg);
            transform: translate(-50%, -50%) perspective(120px) rotateX(-180deg) rotateY(-180deg);
        }
    }
    @-webkit-keyframes progress {
        0% {
            left: -130%;
            background: rgba(0, 0, 0, 0.5);
        }
        50% {
            left: 130%;
            background: rgba(0, 0, 0, 0.5);
        }
        51% {
            background: rgba(255, 255, 255, 0.5);
        }
        100% {
            background: rgba(255, 255, 255, 0.5);
        }
    }
    @keyframes progress {
        0% {
            left: -130%;
            background: rgba(0, 0, 0, 0.5);
        }
        50% {
            left: 130%;
            background: rgba(0, 0, 0, 0.5);
        }
        51% {
            background: rgba(255, 255, 255, 0.5);
        }
        100% {
            background: rgba(255, 255, 255, 0.5);
        }
    }
    @-webkit-keyframes pulse {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    @keyframes pulse {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    @-webkit-keyframes pulse2 {
        0%,
        100% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    @keyframes pulse2 {
        0%,
        100% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    @-webkit-keyframes flipWalker {
        0% {
            -webkit-transform: translate(0, 0) rotateX(0) rotateY(0);
            transform: translate(0, 0) rotateX(0) rotateY(0);
        }
        25% {
            -webkit-transform: translate(100%, 0) rotateX(0) rotateY(180deg);
            transform: translate(100%, 0) rotateX(0) rotateY(180deg);
        }
        50% {
            -webkit-transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
            transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
        }
        75% {
            -webkit-transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
            transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
        }
        100% {
            -webkit-transform: translate(0, 0) rotateX(0) rotateY(360deg);
            transform: translate(0, 0) rotateX(0) rotateY(360deg);
        }
    }
    @keyframes flipWalker {
        0% {
            -webkit-transform: translate(0, 0) rotateX(0) rotateY(0);
            transform: translate(0, 0) rotateX(0) rotateY(0);
        }
        25% {
            -webkit-transform: translate(100%, 0) rotateX(0) rotateY(180deg);
            transform: translate(100%, 0) rotateX(0) rotateY(180deg);
        }
        50% {
            -webkit-transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
            transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
        }
        75% {
            -webkit-transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
            transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
        }
        100% {
            -webkit-transform: translate(0, 0) rotateX(0) rotateY(360deg);
            transform: translate(0, 0) rotateX(0) rotateY(360deg);
        }
    }

    @keyframes glow {
        0% {
            box-shadow: none;
        }
        50% {
            box-shadow: 10px -10px 30px cyan, -10px 10px 30px cyan;
        }
        100% {
            box-shadow: none;
        }
    }
`;
