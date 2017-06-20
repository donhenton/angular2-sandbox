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
var _service = null;
var PubSubService = (function () {
    function PubSubService() {
        console.log("in the constructor of the pubsubservice");
        if (_service === null) {
            _service = new PubSubServiceImpl();
            console.log("created service in pubsub " + _service);
        }
    }
    PubSubService.prototype.getService = function () {
        return _service;
    };
    return PubSubService;
}());
PubSubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PubSubService);
exports.default = PubSubService;
var PubSubServiceImpl = (function () {
    function PubSubServiceImpl() {
        console.log("in the constructor assigning the channel");
        this.channel = index_1.default.channel("messages");
    }
    PubSubServiceImpl.prototype.getChannel = function () {
        return this.channel;
    };
    PubSubServiceImpl.prototype.getReviewEditTopic = function () {
        return 'review.edit';
    };
    PubSubServiceImpl.prototype.getRestaurantEditTopic = function () {
        return 'restaurant.edit';
    };
    PubSubServiceImpl.prototype.getWaitTopic = function () {
        return 'wait.indicator';
    };
    PubSubServiceImpl.prototype.getMessageTopic = function () {
        return 'message.topic';
    };
    PubSubServiceImpl.prototype.getRefreshTopic = function () {
        return "refresh.request";
    };
    return PubSubServiceImpl;
}());
//# sourceMappingURL=pubsub.service.js.map