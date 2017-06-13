export declare class Stopwatch {
    private _isRunning;
    private _elapsedMilliseconds;
    private _startedTimeInMillis;
    private _intervalIds;
    constructor();
    readonly elapsed: string;
    readonly elapsedMilliseconds: number;
    readonly elapsedSeconds: number;
    readonly elapsedMinutes: number;
    readonly elapsedHours: number;
    readonly isRunning: boolean;
    static startNew(): Stopwatch;
    start(): void;
    stop(): void;
    reset(): void;
    restart(): void;
    dispose(): void;
    private getDoubleDigit(num);
}
