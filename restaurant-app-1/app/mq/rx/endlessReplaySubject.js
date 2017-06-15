"use strict";
/* eslint no-param-reassign: [2, {"props": false}] */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ReplaySubject_1 = require("rxjs/ReplaySubject");
/**
 * EndlessReplaySubject extension of Rx.ReplaySubject.
 * This is pretty hacky, but so far I'd found no better way of having
 * Subjects that do no close on multicasted stream completion and on multiple errors.
 * For documentation refer to
 * [Rx.ReplaySubject docs](@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md).
 * The only difference is that EndlessReplaySubject never triggers '.complete()' and
 * does not closes observers on errors (thus allowing to continuously dispatch them).
 */
var EndlessReplaySubject = (function (_super) {
    __extends(EndlessReplaySubject, _super);
    function EndlessReplaySubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Dummy method override to prevent execution and Rx.Observable completion
     * @return {void}
     */
    EndlessReplaySubject.prototype.complete = function () { };
    /**
     * Override of error method that prevents stopping that Rx.Observer
     * @param  {Error} error  - Error to be dispatched
     * @return {void}
     */
    EndlessReplaySubject.prototype.error = function (error) {
        // store error
        this.error = error;
        // dispatch to all observers
        this.observers.forEach(function (os) {
            // dispatch
            os.error(error);
            // mark observer as not stopped
            os.isStopped = false;
        });
    };
    return EndlessReplaySubject;
}(ReplaySubject_1.ReplaySubject));
exports.EndlessReplaySubject = EndlessReplaySubject;
//# sourceMappingURL=endlessReplaySubject.js.map