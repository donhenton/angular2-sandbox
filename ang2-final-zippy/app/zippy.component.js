"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ZippyComponent = (function () {
    function ZippyComponent() {
        this.title = "";
        this.isOpen = false;
        this.openIndicator = "&#9650;";
        this.closedIndicator = "&#9660;";
    }
    ZippyComponent.prototype.bindClick = function () {
        this.isOpen = !this.isOpen;
    };
    ZippyComponent.prototype.getIndicator = function () {
        if (this.isOpen) {
            return this.openIndicator;
        }
        else {
            return this.closedIndicator;
        }
    };
    return ZippyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ZippyComponent.prototype, "title", void 0);
ZippyComponent = __decorate([
    core_1.Component({
        selector: 'zippy',
        template: " \n    <div class=\"zippy-Component\">\n      <div class=\"title-section\" (click)=\"bindClick()\">\n      <span class=\"title-text\">{{title}}</span>\n      <span class=\"open-arrow\" [innerHTML]=\"getIndicator() | safe: 'html'\" ></span>\n      \n      </div>\n      <div class=\"body-section\" [ngClass]=\"{hideItem: !isOpen}\">\n         <ng-content select=\".zip-contents\"></ng-content>\n      </div>\n      <div class=\"body-section\" *ngIf=\"isOpen\">\n         you could put the ng-content here but you are allowed only one use\n      </div>\n\n    </div>\n   ",
        styles: [
            "\n        .zippy-Component\n        {\n          border: thin solid #ccc;\n         \n          margin: 0px 25px;\n          font-size: 20px;\n          width: 75%;\n          \n\n\n        }\n        .hideItem\n        {\n          display: none;\n        }\n\n        .zippy-Component:hover\n        {\n          \n          \n        }\n\n        .body-section\n        {\n           margin: 35px 20px;\n          \n        }\n        .title-section:hover\n        {\n           background-color: #eee;\n          \n        }\n        .title-section .title-text\n        {\n          margin-left: 20px;\n        }\n\n        .title-section\n        {\n           padding: 20px 0px;\n           font-family: Orbitron;\n           font-weight:700;\n           cursor: pointer;\n          \n        }\n       .open-arrow\n       {\n         font-size: 25px;\n         float: right;\n         margin-right: 20px;\n       }\n    \n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], ZippyComponent);
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map