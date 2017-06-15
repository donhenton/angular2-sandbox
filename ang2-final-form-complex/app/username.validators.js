"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.shouldBeUniqueAsync = function (control) {
        /////
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value == "bonzo") {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 500);
        });
    };
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') > 0) {
            return { hasSpaces: true };
        }
        return null; //return null if you are valid
    };
    return UsernameValidators;
}());
exports.UsernameValidators = UsernameValidators;
//# sourceMappingURL=username.validators.js.map