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
        //this.tweet.initialCount = 15;
        this.tweet = { initialCount: 12 };
        this.favText = this.tweet.initialCount + "";
    }
    AppComponent.prototype.onFavoriteChange = function (e) {
        this.favText = e.counter + "";
    };
    //https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
    AppComponent.prototype.ngOnInit = function () {
        console.log("on init 1");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>My First Angular App</h1> \n  <div class=\"row\">\n  <favorite (favChange)=\"onFavoriteChange($event)\" [initialCount]=\"tweet.initialCount\"  ></favorite>\n\n  \n  <span class=\"fav-text\">\n  <label>{{favText}}</label>\n  </span>\n   </div>\n   "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map