/** @format */

export class gesturesController {
    static get properties() {
        return {
            host: { type: Object },
            gestureMethod: { type: Object },
        };
    }

    constructor(host, method) {
        this.host = host;
        this.gestureMethod = method;
        this._x = 0;
        this._y = 0;
        host.addController(this);
    }

    hostConnected() {
        this.host.addEventListener("touchstart", this._touchstart, false);
        this.host.addEventListener("touchmove", this._touchmove, false);
        this.host.addEventListener("touchcancel", this._touchcancel, false);
        this.host.addEventListener("touchend", this._touchend, false);
        this.host.addEventListener("gestures", this.gestureMethod);
    }

    _touchstart(e) {
        if (e.changedTouches.length > 0) {
            this._x = e.changedTouches[0].pageX;
            this._y = e.changedTouches[0].pageY;
            let detail = {
                RIGHT_TO_LEFT: false,
                LEFT_TO_RIGHT: false,
                DOWN: false,
                UP: false,
                FINGERS: e.changedTouches.length,
                ACTION: "start",
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                dx: 0,
                dy: 0,
            };

            const event = new CustomEvent("gestures", { detail: detail });

            this.dispatchEvent(event);
        }
    }

    _touchmove(e) {
        let detail = {
            RIGHT_TO_LEFT: false,
            LEFT_TO_RIGHT: false,
            DOWN: false,
            UP: false,
            FINGERS: e.changedTouches.length,
            ACTION: "move",
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY,
            dx: e.changedTouches[0].pageX - this._x,
            dy: e.changedTouches[0].pageY - this._y,
        };

        const event = new CustomEvent("gestures", { detail: detail });

        this.dispatchEvent(event);
    }

    _touchend(e) {
        if (e.changedTouches.length > 0) {
            let detail = {
                RIGHT_TO_LEFT: this._x > e.changedTouches[0].pageX,
                LEFT_TO_RIGHT: this._x < e.changedTouches[0].pageX,
                DOWN: this._y < e.changedTouches[0].pageY,
                UP: this._y > e.changedTouches[0].pageY,
                FINGERS: e.changedTouches.length,
                ACTION: "end",
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                dx: e.changedTouches[0].pageX - this._x,
                dy: e.changedTouches[0].pageY - this._y,
            };

            const event = new CustomEvent("gestures", { detail: detail });

            this.dispatchEvent(event);
        }
    }
    _touchcancel(e) {}
}
