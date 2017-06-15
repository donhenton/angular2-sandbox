"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var restaurant_component_1 = require("./components/restaurant.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var restaurant_service_1 = require("./services/restaurant.service");
var restaurant_action_service_1 = require("./services/restaurant-action.service");
var pubsub_service_1 = require("./services/pubsub.service");
var restaurant_list_1 = require("./components/restaurant-list");
var wait_indicator_1 = require("./components/wait-indicator");
var restaurant_list_row_1 = require("./components/restaurant-list-row");
var edit_restaurant_container_1 = require("./components/edit-restaurant-container");
var edit_reviewDTO_container_1 = require("./components/edit-reviewDTO-container");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
        providers: [restaurant_service_1.RestaurantService, pubsub_service_1.default, restaurant_action_service_1.RestaurantActionService],
        declarations: [restaurant_component_1.RestaurantComponent, restaurant_list_1.RestaurantList, wait_indicator_1.WaitIndicator, edit_reviewDTO_container_1.EditReviewDTOContainer,
            edit_restaurant_container_1.EditRestaurantContainer, restaurant_list_row_1.RestaurantListRow],
        bootstrap: [restaurant_component_1.RestaurantComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map