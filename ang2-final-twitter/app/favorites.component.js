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
var FavoriteComponent = (function () {
    function FavoriteComponent() {
        this.initialCount = 3;
        this.isFavorite = false;
        this.change = new core_1.EventEmitter();
        this.counter = this.initialCount;
    }
    //https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
    FavoriteComponent.prototype.ngOnInit = function () {
        this.counter = this.initialCount;
    };
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        if (this.isFavorite) {
            this.counter++;
        }
        else {
            this.counter--;
            if (this.counter < 0) {
                this.counter = 0;
            }
        }
        this.change.emit({
            counter: this.counter
        });
    };
    return FavoriteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FavoriteComponent.prototype, "initialCount", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FavoriteComponent.prototype, "change", void 0);
FavoriteComponent = __decorate([
    core_1.Component({
        selector: 'favorite',
        template: "<i\n            (click)=\"onClick()\"\n            class=\"fi fi-heart\" \n             [class.isFavorite] = \"isFavorite\">\n             \n  </i>\n  <span>{{counter}}</span>\n     ",
        styles: [
            "\n    .fi\n    {\n        font-size: 30px;\n        vertical-align: text-top;\n        color: #ccc;\n        cursor: pointer;\n    }\n\n    .fi.isFavorite\n    {\n        \n        color: deeppink;\n        \n    }\n    \n    \n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], FavoriteComponent);
exports.FavoriteComponent = FavoriteComponent;
//# sourceMappingURL=favorites.component.js.map