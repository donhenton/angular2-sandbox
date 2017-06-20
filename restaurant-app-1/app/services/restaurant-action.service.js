"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var pubsub_service_1 = require("./pubsub.service");
var restaurant_service_1 = require("./restaurant.service");
var restaurant_interface_1 = require("./../model/restaurant.interface");
var core_1 = require("@angular/core");
var FeedbackMessageImpl_1 = require("./../model/FeedbackMessageImpl");
var RestaurantActionService = (function () {
    function RestaurantActionService(restaurantService, subProvider) {
        var _this = this;
        this.restaurantService = restaurantService;
        this.subProvider = subProvider;
        this.sub = subProvider.getService();
        var channel = this.sub.getChannel();
        this.feedbackSubject = channel.subject(this.sub.getMessageTopic());
        this.waitRequestSubject = channel.subject(this.sub.getWaitTopic());
        this.refreshListSubject = channel.subject(this.sub.getRefreshTopic());
        this.editSubject = channel.subject("edit.update." + this.sub.getRestaurantEditTopic());
        this.saveSubscription = channel.observe("save." + this.sub.getRestaurantEditTopic());
        this.newRestaurantSubscription = channel.observe("new." + this.sub.getRestaurantEditTopic());
        this.deleteRestaurantSubscription = channel.observe("delete." + this.sub.getRestaurantEditTopic());
        this.deleteRestaurantSubscription
            .subscribe(function (data) {
            _this.handleDelete(data);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
        this.saveSubscription
            .subscribe(function (data) {
            _this.handleSave(data);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
        this.newRestaurantSubscription
            .subscribe(function (data) {
            _this.handleNewRestaurant(data);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    RestaurantActionService.prototype.handleDelete = function (data) {
        var _this = this;
        this.restaurantService.deleteRestaurant(data.selectedRestaurant).subscribe(function () {
            var waitMessage = {};
            waitMessage.state = true;
            _this.waitRequestSubject.next(waitMessage);
            var f = new FeedbackMessageImpl_1.default();
            f.message = "Restaurant Deleted";
            f.show = true;
            f.type = restaurant_interface_1.messageType.info;
            _this.feedbackSubject.next(f);
            _this.refreshListSubject.next({ doRefresh: true, selectedRestaurantId: null });
        }, function (err) { console.log(JSON.stringify(err)); });
    };
    RestaurantActionService.prototype.handleNewRestaurant = function (data) {
        var _this = this;
        var f = new FeedbackMessageImpl_1.default();
        f.message = "Restaurant Added";
        f.show = true;
        f.type = restaurant_interface_1.messageType.info;
        var waitMessage = {};
        waitMessage.state = true;
        this.waitRequestSubject.next(waitMessage);
        this.restaurantService.addRestaurant(data).subscribe(function (idInfo) {
            _this.feedbackSubject.next(f);
            _this.refreshListSubject.next({ doRefresh: true, selectedRestaurantId: idInfo.id });
            var newItem = __assign({}, data);
            newItem.id = idInfo.id;
            _this.editSubject.next({ selectedRestaurant: newItem });
        }, function (err) { console.log(JSON.stringify(err)); });
    };
    RestaurantActionService.prototype.handleSave = function (data) {
        var _this = this;
        console.log("in save " + JSON.stringify(data, null, " "));
        var f = new FeedbackMessageImpl_1.default();
        f.message = "Save completed";
        f.show = true;
        f.type = restaurant_interface_1.messageType.info;
        var waitMessage = {};
        waitMessage.state = true;
        this.waitRequestSubject.next(waitMessage);
        this.restaurantService.saveResaurant(data).subscribe(function () {
            _this.feedbackSubject.next(f);
            _this.refreshListSubject.next({ doRefresh: true, selectedRestaurantId: data.id });
        }, function (err) { console.log(JSON.stringify(err)); });
    };
    return RestaurantActionService;
}());
RestaurantActionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService,
        pubsub_service_1.default])
], RestaurantActionService);
exports.RestaurantActionService = RestaurantActionService;
//# sourceMappingURL=restaurant-action.service.js.map