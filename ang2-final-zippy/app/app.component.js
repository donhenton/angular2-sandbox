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
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h3>Zippy Component</h3> \n  <div class=\"row app-Component\">\n  <div class=\"zip-component-container grouping\">\n   <zippy [title]=\"'My zip 1'\">\n   <div class=\"zip-contents\">This is stuff that should be hidden 1 from app</div>\n   \n   </zippy>\n\n   <zippy [title]=\"'My zip 2'\">\n   \n   <div class=\"zip-contents\">This is stuff that should be hidden 2 from app</div>\n   </zippy>\n  </div>\n  \n   </div>\n   ",
        styles: [
            "\n      .app-Component\n      {\n       \n        \n      }\n      .app-Component .zippy-component-container\n      {\n        \n          \n      }\n      .app-Component .zippy-display\n      {\n       \n         \n        \n      }\n    \n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map