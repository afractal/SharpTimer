'use strict';

/* global describe, it, before, beforeEach, after, afterEach */

import { assert } from 'chai';
import { Timer } from '../src/timer';

describe('hello', function () {
    it('should greet the world', function () {
        assert.equal('Hello, world!', 'Hello, world!');
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