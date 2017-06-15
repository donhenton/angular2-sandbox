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
var twitter_service_1 = require("./twitter.service");
var AppComponent = (function () {
    function AppComponent(twitterService) {
        // this.info = "";//JSON.stringify(this.twitterService.getTwitterPosts());
        this.twitterService = twitterService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.posts = this.twitterService.getTwitterPosts();
        ;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h3>Twitter Component</h3> \n  <div class=\"row app-Component\">\n    <div class=\"twitter-component-container grouping\">\n\n      <div class=\"bonzo\" *ngFor=\"let postItem of posts\">\n          <post [post]=\"postItem\"></post>\n      <div>\n\n    </div>\n    \n   </div>\n   ",
        styles: [
            "\n      .app-Component\n      {\n        width: 500px;\n         \n        \n      }\n      .app-Component .twitter-component-container\n      {\n        \n          \n      }\n      .bonzo\n      \n    \n    "
        ],
        providers: [twitter_service_1.default] //could be delcared in app.module as well for 'app wide' scope
    }),
    __metadata("design:paramtypes", [twitter_service_1.default])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map