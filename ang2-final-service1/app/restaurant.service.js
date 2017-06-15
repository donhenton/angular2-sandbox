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
var http_1 = require("@angular/http");
//import 'rxjs/Rx'; for all
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var RestaurantService = (function () {
    function RestaurantService(_http) {
        this._http = _http;
    }
    RestaurantService.prototype.getRestaurant = function (id) {
        var url = "http://donhenton-springmvc3.herokuapp.com:80/app/backbone/restaurant/" + id;
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    return RestaurantService;
}());
RestaurantService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RestaurantService);
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=restaurant.service.js.map