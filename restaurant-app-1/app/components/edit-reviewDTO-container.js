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
var core_1 = require("@angular/core");
var restaurant_service_1 = require("./../services/restaurant.service");
var pubsub_service_1 = require("./../services/pubsub.service");
var forms_1 = require("@angular/forms");
var EditReviewDTOContainer = (function () {
    function EditReviewDTOContainer(restaurantService, sub, fb) {
        var _this = this;
        this.restaurantService = restaurantService;
        this.sub = sub;
        this.backUp = null;
        console.log("in review con");
        var channel = sub.getChannel();
        this.subscription = channel.observe("#.update." + sub.getRestaurantEditTopic());
        this.subscription
            .subscribe(function (data) {
            console.log("reviews got " + data);
            _this.backUp = __assign({}, data.selectedRestaurant);
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    }
    EditReviewDTOContainer.prototype.formOkay = function () {
        //return this.editForm.valid && !this.equalToBackup();
    };
    /**
     * return true if you are equal to the backup
     * false if not
    
    equalToBackup() {
      if (!this.backUp) {
        return true;
      }
      var isEqual:boolean = true;
      this.backUp.forEach( b => {
          let formItems:ReviewDTOs[] = this.editForm.value();
          formItems.forEach(f => {
            isEqual = isEqual && this.reviewsEqualToBackup(b,f);
            if (!isEqual)
            {
              return false;
            }
          });
          
      });
      return isEqual;
    }
     */
    EditReviewDTOContainer.prototype.reviewsEqualToBackup = function (backupItem, currentItem) {
        var akeys = Object.keys(currentItem);
        var bkeys = Object.keys(backupItem);
        var len = akeys.length;
        if (len != bkeys.length)
            return false;
        for (var i = 0; i < len; i++) {
            if (backupItem[akeys[i]] !== currentItem[akeys[i]])
                return false;
        }
        return true;
    };
    return EditReviewDTOContainer;
}());
EditReviewDTOContainer = __decorate([
    core_1.Component({
        selector: 'edit-reviewDTO-container',
        template: "\n    <section [hidden]=\"backUp === null\" className=\"editReviewContainer\">\n    get a review job\n    </section>\n  \n  "
    }),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService,
        pubsub_service_1.default, forms_1.FormBuilder])
], EditReviewDTOContainer);
exports.EditReviewDTOContainer = EditReviewDTOContainer;
//# sourceMappingURL=edit-reviewDTO-container.js.map