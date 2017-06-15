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
//import 'rxjs/Rx'; for all
//import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/Observable';
var core_1 = require("@angular/core");
var index_1 = require("./../mq/index");
var PubSubService = (function () {
    function PubSubService() {
        this.channel = index_1.default.channel("messages");
    }
    PubSubService.prototype.getChannel = function () {
        return this.channel;
    };
    PubSubService.prototype.getReviewEditTopic = function () {
        return 'review.edit';
    };
    PubSubService.prototype.getRestaurantEditTopic = function () {
        return 'restaurant.edit';
    };
    PubSubService.prototype.getWaitTopic = function () {
        return 'wait.indicator';
    };
    PubSubService.prototype.getMessageTopic = function () {
        return 'message.topic';
    };
    PubSubService.prototype.getRefreshTopic = function () {
        return "refresh.request";
    };
    return PubSubService;
}());
PubSubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PubSubService);
exports.default = PubSubService;
//# sourceMappingURL=pubsub.service.js.map