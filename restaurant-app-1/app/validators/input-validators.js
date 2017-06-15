"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputValidators = (function () {
    function InputValidators() {
    }
    InputValidators.cannotBeEmpty = function (control) {
        if (!control.value) {
            return { isEmpty: true };
        }
        if (control.value && control.value.length == 0) {
            return { isEmpty: true };
        }
        return null; //return null if you are valid
    };
    return InputValidators;
}());
exports.InputValidators = InputValidators;
//# sourceMappingURL=input-validators.js.map