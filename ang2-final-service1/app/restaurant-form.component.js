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
var restaurant_service_1 = require("./restaurant.service");
var RestaurantFormComponent = (function () {
    function RestaurantFormComponent(restaurantService) {
        this.restaurantService = restaurantService;
        this.resultText = "{bonzo: 33}";
        this.isLoading = false;
    }
    RestaurantFormComponent.prototype.ngOnInit = function () {
        console.log("in on init()");
    };
    RestaurantFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.isLoading = true;
        this.restaurantService.getRestaurant(form.value.id)
            .subscribe(function (json) {
            _this.isLoading = false;
            _this.resultText = JSON.stringify(json, null, ' ');
        }, function (error) {
            _this.isLoading = false;
            var message = JSON.parse(error._body);
            _this.resultText = message.message;
        });
        return false;
    };
    return RestaurantFormComponent;
}());
RestaurantFormComponent = __decorate([
    core_1.Component({
        selector: 'restaurant-form',
        templateUrl: 'app/restaurant-form.component.html',
        styles: ["\n\n    .template-form\n    {\n      width 85%\n\n    }\n    #result-text\n    {\n       height: 200px;\n    }\n    input.ng-invalid.ng-touched\n    {\n      border: 2px solid red;\n    }\n\n    .errorInfo\n    {\n      padding: 2px;\n      float:right;\n      margin-right: 5px;\n    }\n\n  "]
    }),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantFormComponent);
exports.RestaurantFormComponent = RestaurantFormComponent;
//# sourceMappingURL=restaurant-form.component.js.map