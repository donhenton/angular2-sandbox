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
var PostComponent = (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
        // console.log("post is " + JSON.stringify(this.post));
    };
    return PostComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PostComponent.prototype, "post", void 0);
PostComponent = __decorate([
    core_1.Component({
        selector: 'post',
        template: "  \n\n      <div class=\"post-Component\">\n        <img class=\"user-image\" src={{post.url}} />\n        <span class=\"user-text-container\">\n          <div>\n            <span class=\"user-name\">{{post.username}}</span> \n            <span class=\"user-handle\">{{post.handle}}</span> \n          </div>\n          <div class=\"user-text\">{{post.text}}</div>\n          <div class=\"user-favorite\"><favorite [initialCount]=\"post.count\"></favorite></div>\n        </span>\n      </div>\n\n     ",
        styles: [
            "\n     .post-Component\n     {\n         \n         width: 450px;\n          display: flex;\n          align-items: center;\n\n     }\n     .post-Component img\n     {\n        align:middle;\n        \n     }\n     .post-Component .user-text-container\n     {\n         \n        font-size: 15px;\n        \n        margin: 15px;  \n     }\n\n\n      .post-Component .user-text-container .user-name\n     {\n         font-family: Orbitron;\n         font-weight: 700;\n\n     }\n     .post-Component .user-text-container .user-handle\n     {\n         opacity: .55\n\n     }\n    \n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map