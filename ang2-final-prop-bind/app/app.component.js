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
        this.inputDemo = "beta";
    }
    AppComponent.prototype.getStyles = function () {
        var ss = { 'color': 'white', backgroundColor: 'blue' };
        if (this.classToggle) {
            ss = { 'color': 'yellow', backgroundColor: 'red' };
        }
        return ss;
    };
    AppComponent.prototype.onChangeClass = function () {
        this.classToggle = !this.classToggle;
    };
    AppComponent.prototype.onChangeContents = function ($event) {
        console.log("button event " + $event.target);
        if (this.inputDemo === "alpha") {
            this.inputDemo = 'beta';
        }
        else {
            this.inputDemo = "alpha";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>My First Angular App</h1>\n  <div class=\"row form\">\n   Note that the forms module had to be imported in the app module file\n  </div>\n  <button   (click)=\"onChangeContents($event)\" class=\"btn btn-primary\">Change Text</button>\n  <button   (click)=\"onChangeClass($event)\" class=\"btn btn-red\">Change Class</button>\n  <div class=\"row form\">\n  <label>Input Demo</label> <input   [(ngModel)]=\"inputDemo\" type=\"text\" size=\"40\" />\n  <label>Output Echo:</label>   <span>{{inputDemo}}</span>\n  </div>\n\n   <div class=\"row form\">\n  <span  [style.backgroundColor]=\"classToggle ? 'blue' : 'gray'\">Style Demo 1</span>\n  </div>\n\n   <div class=\"row form\">\n  <span [ngStyle]=\"getStyles()\">Style Demo 2</span>\n  </div>\n\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map