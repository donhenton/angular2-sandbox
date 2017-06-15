"use strict";
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
/* eslint no-param-reassign: [2, {"props": false}] */
var Rx = require("rxjs/Rx");
/**
 * EndlessSubject extension of Rx.Subject.
 * This is pretty hacky, but so far I'd found no better way of having
 * Subjects that do no close on multicasted stream completion and on multiple errors.
 * For documentation refer to
 * [Rx.Subject docs](@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md).
 * The only difference is that EndlessSubject never triggers '.complete()' and
 * does not closes observers on errors (thus allowing to continuously dispatch them).
 */
var EndlessSubject = (function (_super) {
    __extends(EndlessSubject, _super);
    function EndlessSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Dummy method override to prevent execution and Rx.Observable completion
     * @return {void}
     */
    EndlessSubject.prototype.complete = function () { };
    /**
     * Override of error method that prevents stopping that Rx.Observer
     * @param  {Error} error  - Error to be dispatched
     * @return {void}
     */
    EndlessSubject.prototype.error = function (error) {
        this.thrownError = error;
        // dispatch to all observers
        this.observers.forEach(function (os) {
            // dispatch directly to destination
            os.destination._error.call(os.destination._context, error);
        });
    };
    return EndlessSubject;
}(Rx.Subject));
exports.EndlessSubject = EndlessSubject;
//# sourceMappingURL=endlessSubject.js.map