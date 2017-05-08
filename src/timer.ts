export class Timer implements SharpTimer.ITimer {
    enabled: boolean;
    // autoReset: boolean;
    private _intervalElapsedEvents = new Array<() => void>();
    private _intervalElapsingEvents = new Array<(interval: number) => void>();
    private _isTimerStopped;
    constructor(interval: number) {
        this.checkForValidInterval(interval);
        this.enabled = true;
        // this.autoReset = false;
        this.interval = interval;
        this._isTimerStopped = false;
    }

    private _interval: number;
    get interval() { return this._interval; }
    set interval(value: number) {
        this.checkForValidInterval(value);

        if (this._interval !== value) {
            this._interval = value;
            for (const intervalElapsingEvent of this._intervalElapsingEvents) {
                intervalElapsingEvent(this._interval);
            }

            if (this._interval === 0) {
                for (const intervalElapsedEvent of this._intervalElapsedEvents) {
                    intervalElapsedEvent();
                }
            }
        }
    }

    start() {
        this.enabled = true;
        const decreaseTime = () => {
            if (this.enabled && !this._isTimerStopped && this.interval > 0) {
                this.interval--;
                setTimeout(decreaseTime, 1000);
            }
            else if (!this.enabled) { setTimeout(decreaseTime, 1000); }
            else if (this._isTimerStopped) return;
        }
        setTimeout(decreaseTime, 1000);
    }

    pause() {
        this.enabled = false;
    }

    stop() {
        this._isTimerStopped = true;
    }

    onIntervalElapsed(intervalElapsedHandler) {
        this._intervalElapsedEvents.push(intervalElapsedHandler);
    }

    onIntervalElapsing(intervalElapsingHandler) {
        this._intervalElapsingEvents.push(intervalElapsingHandler);
    }

    toString() {
        let endTime = new Date();
        endTime.setSeconds(endTime.getSeconds() + this.interval);

        const now = Date.now();
        const diffMinutes = new Date((+endTime) - now).getMinutes();
        const diffSeconds = new Date((+endTime) - now).getSeconds();
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
