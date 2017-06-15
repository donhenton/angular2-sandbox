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
var pubsub_service_1 = require("./../services/pubsub.service");
var core_1 = require("@angular/core");
var WaitIndicator = (function () {
    function WaitIndicator(sub) {
        var _this = this;
        this.sub = sub;
        this.isProcessing = false;
        var channel = sub.getChannel();
        // console.log(`wait observing ${sub.getWaitTopic()}`)
        this.subscription = channel.observe(sub.getWaitTopic());
        this.subscription
            .subscribe(function (data) {
            console.log("wait got " + JSON.stringify(data));
            _this.handleRequest(data);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    WaitIndicator.prototype.handleRequest = function (data) {
        this.isProcessing = data.state;
    };
    return WaitIndicator;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WaitIndicator.prototype, "isProcessing", void 0);
WaitIndicator = __decorate([
    core_1.Component({
        selector: 'wait-indicator',
        template: "\n   \n  <div [class.waitIndicator]=\"isProcessing\">\n      \n  </div>\n \n  \n  "
    }),
    __metadata("design:paramtypes", [pubsub_service_1.default])
], WaitIndicator);
exports.WaitIndicator = WaitIndicator;
//# sourceMappingURL=wait-indicator.js.map