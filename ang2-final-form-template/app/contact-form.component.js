"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactFormComponent = (function () {
    function ContactFormComponent() {
    }
    ContactFormComponent.prototype.log = function (x) {
        console.log(x);
    };
    ContactFormComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    core_1.Component({
        selector: 'contact-form',
        templateUrl: 'app/contact-form.component.html',
        styles: ["\n\n    .template-form\n    {\n      width 85%\n\n    }\n    #comment\n    {\n       height: 125px;\n    }\n    input.ng-invalid.ng-touched\n    {\n      border: 2px solid red;\n    }\n\n    .errorInfo\n    {\n      padding: 2px;\n      float:right;\n      margin-right: 5px;\n    }\n\n  "]
    })
], ContactFormComponent);
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map