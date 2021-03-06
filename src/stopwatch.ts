import {
    MILLIS_PER_SECOND,
    MILLIS_PER_MINUTE,
    MILLIS_PER_HOUR
} from './constants';

export class Stopwatch {
    private _isRunning: boolean;
    private _elapsedMilliseconds: number;
    private _startedTimeInMillis: number;
    private _intervalIds: Array<number | NodeJS.Timer>;

    constructor() {
        // initializing in not needed because it is overriden in start function
        this._startedTimeInMillis = Date.now();
        this._intervalIds = new Array<number | NodeJS.Timer>();
        this._elapsedMilliseconds = 0;
        this._isRunning = false;
    }

    get elapsed() {
        const ms = this._elapsedMilliseconds % 1000;

        const s = (this._elapsedMilliseconds / MILLIS_PER_SECOND) % 60;
        const secs = this.getDoubleDigit(s);

        const m = (this._elapsedMilliseconds / MILLIS_PER_MINUTE) % 60;
        const mins = this.getDoubleDigit(m);

        const h = (this._elapsedMilliseconds / MILLIS_PER_HOUR) % 60;
        const hrs = this.getDoubleDigit(h);

        return `${hrs}:${mins}:${secs}:${ms}`;
    }

    get elapsedMilliseconds() {
        return this._elapsedMilliseconds;
    }

    get elapsedSeconds() {
        return this._elapsedMilliseconds / MILLIS_PER_SECOND;
    }

    get elapsedMinutes() {
        return Math.floor(this._elapsedMilliseconds / MILLIS_PER_MINUTE);
    }

    get elapsedHours() {
        return Math.floor(this._elapsedMilliseconds / MILLIS_PER_HOUR);
    }

    get isRunning() {
        return this._isRunning;
    }

    static startNew() {
        const stopwatch = new Stopwatch();
        stopwatch.start();
        return stopwatch;
    }

    start() {
        if (!this.isRunning) {
            this._isRunning = true;
        }
        const intervalId = setInterval(() => {
            if (this.isRunning) {
                this._elapsedMilliseconds = (Date.now() - this._startedTimeInMillis);
            }
        }, 0);
        this._intervalIds.push(intervalId);
    }

    stop() {
        this._isRunning = false;
    }

    reset() {
        this._isRunning = false;
        this._startedTimeInMillis = Date.now();
        this._elapsedMilliseconds = 0;
    }

    restart() {
        this.reset();
        this.start();
    }

    dispose() {
        this._isRunning = false;
        this._intervalIds.forEach(intervalId => {
            clearInterval(intervalId as any);
        });
    }

    private getDoubleDigit(num: number) {
        const str = num.toString().slice(0, 2);
        const filledNumber = (str[1] === '.') ? ('0' + str) : str;
        return filledNumber.length >= 3 ? filledNumber.slice(0, 2) : filledNumber;
    }
}
