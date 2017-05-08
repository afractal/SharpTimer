(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "chai"], factory);
    }
})(function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /* global describe, it, before, beforeEach, after, afterEach */
    var chai_1 = require("chai");
    describe('hello', function () {
        it('should greet the world', function () {
            chai_1.assert.equal('Hello, world!', 'Hello, world!');
        });
    });
});
// =============================
// let timer = new Timer(15);
// timer.onIntervalElapsing(elapsedTime => {
//     console.log('Time elapsing: ', elapsedTime);
//     console.log(timer.toString());
//     if (elapsedTime === 10) {
//         console.log('stopped')
//         timer.pause();
//         setTimeout(() => {
//             timer.start();
//         }, 4000);
//     }
// });
// timer.onIntervalElapsed(() => {
//     console.log("Time elapsed !!!");
// });
// timer.start();
/*
    private onIntervalElapsed: (a: Event) => void;
    timer.Elapsed += (sender, e) => { };
*/ 
//# sourceMappingURL=timer.spec.js.map