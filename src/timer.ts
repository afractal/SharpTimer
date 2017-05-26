export class Timer {
    // autoReset: boolean;
    private _enabled: boolean;
    private _stopped: boolean;
    private _interval: number;
    private _intervalElapsedEvents: Array<() => void>;
    private _intervalElapsingEvents: Array<(intervalValue: number) => void>;
    constructor(interval: number) {
        this.checkForValidInterval(interval);
        // this.autoReset = false;
        this._interval = interval;
        this._enabled = true;
        this._stopped = false;
        this._intervalElapsedEvents = new Array<() => void>();
        this._intervalElapsingEvents = new Array<(intervalValue: number) => void>();
    }

    get enabled() { return this._enabled; }
    get stopped() { return this._stopped; }

    get interval() { return this._interval; }
    set interval(value: number) {
        this.checkForValidInterval(value);

        if (this._interval !== value) {
            this._interval = value;
            for (const intervalElapsingEvent of this._intervalElapsingEvents) {
                intervalElapsingEvent(this._interval);
            }
        }
    }

    start() {
        this._enabled = true;
        const decreaseTime = () => {
            if (this.enabled && !this.stopped && this.interval > 0) {
                this.interval--;
                setTimeout(decreaseTime, 1000);
            }
            else if (this.enabled && !this.stopped && this.interval === 0) {
                this._enabled = false;
                for (const intervalElapsedEvent of this._intervalElapsedEvents) {
                    intervalElapsedEvent();
                }
                return;
            }
            else if (!this.enabled) setTimeout(decreaseTime, 1000);
            else if (this.stopped) return;
        }
        setTimeout(decreaseTime, 1000);
    }

    pause() {
        this._enabled = false;
    }

    stop() {
        this._stopped = true;
    }

    onIntervalElapsed(intervalElapsedHandler) {
        this._intervalElapsedEvents.push(intervalElapsedHandler);
    }

    onIntervalElapsing(intervalElapsingHandler) {
        this._intervalElapsingEvents.push(intervalElapsingHandler);
    }

    toString() {
        let endTime = new Date(Date.now());
        endTime.setSeconds(endTime.getUTCSeconds() + this.interval);

        const now = Date.now();
        const diffMinutes = new Date((+endTime) - now).getUTCMinutes();
        const diffSeconds = new Date((+endTime) - now).getUTCSeconds();
        return `${this.getDoubleDigit(diffMinutes)}:${this.getDoubleDigit(diffSeconds)}`;
    }

    private getDoubleDigit(number: number) {
        const filledNumber = '0' + number.toString();
        return filledNumber.length >= 3 ? filledNumber.slice(1, filledNumber.length) : filledNumber;
    }

    private checkForValidInterval(interval: number) {
        if (interval < 0) {
            throw new Error('Interval can not be less than zero.');
        }
    }
}
