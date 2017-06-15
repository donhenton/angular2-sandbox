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
        this.voteInfo = { myVote: -1, voteCount: 25 };
    }
    AppComponent.prototype.onVoteChange = function (data) {
        this.voteInfo.myVote = data.myVoteUpdate;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h3>Voter Component</h3> \n  <div class=\"row app-Component\">\n  <div class=\"vote-component-container grouping\">\n  <vote  (myVoteChange)=\"onVoteChange($event)\" [voteCount]=\"voteInfo.voteCount\" [myVote]=\"voteInfo.myVote\"></vote>\n  </div>\n  <span class=\"myvote-display\">My Vote: {{voteInfo.myVote}}</span>\n   </div>\n   ",
        styles: [
            "\n      .app-Component\n      {\n        width: 200px;\n        display: flex;\n        align-items: center;\n        \n      }\n      .app-Component .vote-component-container\n      {\n        vertical-align: text-top;\n          \n      }\n      .app-Component .myvote-display\n      {\n        margin-left: 30px;\n         \n        \n      }\n    \n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map