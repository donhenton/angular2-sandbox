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
var VoteComponent = (function () {
    function VoteComponent() {
        this.voteCount = 0;
        this.myVote = 0;
        this.myVoteChange = new core_1.EventEmitter();
        this.doSubtract = false;
    }
    VoteComponent.prototype.ngOnInit = function () {
        if (this.myVote === 0) {
            this.doSubtract = true;
        }
    };
    VoteComponent.prototype.onClick = function (param, $event) {
        // console.log("click hit "+param+" "+$event.target)
        this.myVote = this.myVote + param;
        if (this.myVote < -1) {
            this.myVote = -1;
            this.doSubtract = false;
        }
        if (this.myVote > 1) {
            this.myVote = 1;
            this.doSubtract = false;
        }
        if (this.myVote === 0) {
            this.doSubtract = true;
        }
        if (this.doSubtract) {
            this.voteCount = this.voteCount + param;
            this.myVoteChange.emit({
                myVoteUpdate: this.myVote
            });
        }
    };
    return VoteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "voteCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "myVote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VoteComponent.prototype, "myVoteChange", void 0);
VoteComponent = __decorate([
    core_1.Component({
        selector: 'vote',
        template: " \n        <div class=\"vote-Component\">\n        <div class=\"up\" \n        [class.active] = \"myVote > 0\"\n        [class.no-pointer] = \"myVote == 1\"\n        (click)=\"onClick(1,$event)\" >&#9650;</div>\n        <div>{{voteCount}}</div>\n        <div class=\"up\" \n        [class.active] = \"myVote < 0\"\n        [class.no-pointer] = \"myVote == -1\"\n        (click)=\"onClick(-1,$event)\" >&#9660;</div>\n        </div>\n    ",
        styles: [
            "\n    .vote-Component\n    {\n      text-align: center;\n      width: 50px;\n      border: thin solid black;\n      font-size: 30px;\n    }\n\n    .active\n    {\n      color: orange;\n    }\n\n    .up,.down\n    {\n       cursor: pointer;\n    }\n\n    .no-pointer\n    {\n      cursor: default;\n    }\n\n\n"
        ]
    }),
    __metadata("design:paramtypes", [])
], VoteComponent);
exports.VoteComponent = VoteComponent;
//# sourceMappingURL=vote.component.js.map