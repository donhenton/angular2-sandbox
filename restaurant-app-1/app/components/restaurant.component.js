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
var restaurant_action_service_1 = require("./../services/restaurant-action.service");
var pubsub_service_1 = require("./../services/pubsub.service");
var RestaurantComponent = (function () {
    function RestaurantComponent(actionService, subProvider) {
        var _this = this;
        this.subProvider = subProvider;
        this.sub = subProvider.getService();
        var channel = this.sub.getChannel();
        this.subscription = channel.observe(this.sub.getMessageTopic());
        this.subscription
            .subscribe(function (data) {
            _this.handleMessage(data);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
        this.displayMessage = "get a job";
    }
    RestaurantComponent.prototype.handleMessage = function (data) {
        if (data.show) {
            this.displayMessage = data.message;
        }
        else {
            this.displayMessage = "";
        }
    };
    return RestaurantComponent;
}());
RestaurantComponent = __decorate([
    core_1.Component({
        selector: 'restaurant-app',
        styles: [" \n\n     .restaurantApp   #mainDisplayMessage { \n       font-size: 20px;  \n       margin: 20px;\n       border: thin solid #ddd;\n       height: 40px;\n       \n      }\n\n    .restaurantApp   #mainDisplayMessage.success {\n      color: blue; }\n    .restaurantApp   #displayMessage.error {\n      color: red; }\n\n\n\n  "],
        template: "\n  \n  <h3>Restaurant List</h3>\n  <div id=\"reactRestaurantContainer\">\n      <div class=\"restaurantApp grouping\">\n      <wait-indicator [isProcessing]=\"true\"></wait-indicator>\n      <div   id=\"mainDisplayMessage\">{{displayMessage}}</div>\n      <restaurant-list></restaurant-list>\n\n      <div id=\"editControlGroup\" class=\"grouping\">\n\n        <edit-restaurant-container></edit-restaurant-container>\n        <edit-reviewDTO-container></edit-reviewDTO-container>\n        \n\n      </div>\n\n\n      </div>\n  </div>\n \n  \n  "
    }),
    __metadata("design:paramtypes", [restaurant_action_service_1.RestaurantActionService, pubsub_service_1.default])
], RestaurantComponent);
exports.RestaurantComponent = RestaurantComponent;
//# sourceMappingURL=restaurant.component.js.map