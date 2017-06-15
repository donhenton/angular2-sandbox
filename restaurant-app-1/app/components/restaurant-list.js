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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var restaurant_service_1 = require("./../services/restaurant.service");
var restaurant_list_row_1 = require("./restaurant-list-row");
var pubsub_service_1 = require("./../services/pubsub.service");
var RestaurantList = (function () {
    function RestaurantList(restaurantService, renderer, sub) {
        var _this = this;
        this.restaurantService = restaurantService;
        this.renderer = renderer;
        this.sub = sub;
        this.isLoading = false;
        this.doRoll = false;
        this.selectedRowId = -1;
        this.restaurantList = [];
        var channel = sub.getChannel();
        this.deleteSubject
            = channel.subject("delete." + sub.getRestaurantEditTopic());
        this.editSubject
            = channel.subject("edit.update." + sub.getRestaurantEditTopic());
        this.addSubject
            = channel.subject("add.update." + sub.getRestaurantEditTopic());
        this.waitSubject
            = channel.subject(sub.getWaitTopic());
        this.refreshSubscription = channel.observe(sub.getRefreshTopic());
        this.refreshSubscription
            .subscribe(function (data) {
            console.log('got refresh message');
            if (data.selectedRestaurantId) {
                //if this is an add, roll
                _this.selectedRowId = data.selectedRestaurantId;
            }
            _this.ngOnInit();
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    RestaurantList.prototype.performAdd = function () {
        var emptyRestaurant = {};
        emptyRestaurant.id = -1;
        emptyRestaurant.version = 1;
        emptyRestaurant.name = "";
        emptyRestaurant.city = "";
        emptyRestaurant.state = "";
        emptyRestaurant.zipCode = "";
        this.addSubject.next({ selectedRestaurant: emptyRestaurant });
    };
    RestaurantList.prototype.getRowClass = function (rowId) {
        var classString = "restaurantRow";
        if (rowId === this.selectedRowId) {
            classString += " highLighted";
        }
        return classString;
    };
    RestaurantList.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.rowItems && this.selectedRowId > -1 && this.doRoll) {
            var activeRow = this.rowItems.filter(function (r) {
                return r.row.id === _this.selectedRowId;
            });
            if (activeRow && activeRow.length == 1) {
                //console.log("did the scroll")
                this.renderer.invokeElementMethod(activeRow[0].getDom(), 'scrollIntoView', [{
                        behavior: "smooth",
                        block: "start",
                    }]);
                //console.log("xxx "+activeRow[0].row.name)
                this.doRoll = false;
            }
            else {
                //console.log("active row not found")
                this.doRoll = false;
            }
        }
    };
    RestaurantList.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("init "+this.rowItems)
        var waitMessage = {};
        waitMessage.state = false;
        this.restaurantService.getAllRestaurants()
            .subscribe(function (json) {
            _this.isLoading = false;
            _this.restaurantList = [];
            json.forEach(function (j) {
                _this.restaurantList.push(j);
            });
            //console.log("sending " + JSON.stringify(waitMessage) + " to " + this.sub.getWaitTopic())
            _this.waitSubject.next(waitMessage);
            if (_this.selectedRowId && _this.selectedRowId > 0) {
                //you are coming in on an ADD so roll the window
                _this.doRoll = true;
                //console.log("doing an add so roll")
            }
        }, function (error) {
            _this.isLoading = false;
            console.error(error);
            _this.waitSubject.next(waitMessage);
        });
    };
    RestaurantList.prototype.onEditChangeEvent = function (ev) {
        var message = null;
        this.selectedRowId = ev.selectedRestaurant.id;
        if (ev.type === 'delete') {
            var confirmMessage = 'Do you want to delete "' + ev.selectedRestaurant.name + '" ?';
            var confirm = window.confirm(confirmMessage);
            if (confirm && confirm === true) {
                this.deleteSubject.next(ev);
            }
        }
        else {
            this.editSubject.next(ev);
        }
    };
    return RestaurantList;
}());
__decorate([
    core_1.ViewChildren(restaurant_list_row_1.RestaurantListRow),
    __metadata("design:type", Array)
], RestaurantList.prototype, "rowItems", void 0);
RestaurantList = __decorate([
    core_1.Component({
        selector: 'restaurant-list',
        template: "\n   \n   \n<div class=\"restaurantListContainer\">\n<button (click)=\"performAdd($event)\" class=\"editButton addButton\" >Add Record</button>\n    <div id=\"restaurantScrollList\">\n        <div id=\"tHeadContainer\" data-reactid=\".0.1.1.0\">\n            <table>\n                <tbody>\n                    <tr>\n                        <th class=\"nameItem\">Name</th>\n                        <th class=\"cityItem\">City</th>\n                        <th class=\"stateItem\">State</th>\n                        <th class=\"zipCodeItem\">Zip Code</th>\n                        <th class=\"versionItem\">Version</th>\n                        <th class=\"actionItems\">&nbsp;</th>\n                        <th class=\"actionItems\">&nbsp;</th>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div id=\"tbodyContainer\">\n            <table>\n                <tbody>\n                  <tr  [attr.data-id]=\"row.id\" [ngClass]=\"getRowClass(row.id)\" *ngFor=\"let row of this.restaurantList\">\n                  <restaurant-list-row [row]=\"row\"   (edit-event)=\"onEditChangeEvent($event)\" ></restaurant-list-row>\n                  </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n\n\n    </div>\n</div>\n  \n  "
    }),
    __param(1, core_1.Inject(core_1.Renderer)),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService, core_1.Renderer,
        pubsub_service_1.default])
], RestaurantList);
exports.RestaurantList = RestaurantList;
//# sourceMappingURL=restaurant-list.js.map