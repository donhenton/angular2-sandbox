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
var forms_1 = require("@angular/forms");
var username_validators_1 = require("./username.validators");
require("rxjs/Rx");
var SignUpFormComponent = (function () {
    function SignUpFormComponent(fb) {
        this.applicationMessage = "";
        this.formObject = fb.group({
            username: ['a.pismo.clam',
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    username_validators_1.UsernameValidators.cannotContainSpace,
                    forms_1.Validators.minLength(3)
                ]), username_validators_1.UsernameValidators.shouldBeUniqueAsync],
            password: ['getajob', forms_1.Validators.required],
            application: ['']
        });
        // this.formObject = new FormGroup({
        // username: new FormControl('bonzo',Validators.required ),
        // password: new FormControl('dog',Validators.required)
        //});
    }
    SignUpFormComponent.prototype.ngOnInit = function () {
        console.log("get a job 1000");
        this.formObject.controls.application.valueChanges
            .debounceTime(400)
            .map(function (app) { return app + " app"; })
            .subscribe(this.onApplicationChange.bind(this));
    };
    SignUpFormComponent.prototype.onApplicationChange = function (ev) {
        //console.log("whoa ev "+ev);
        this.applicationMessage = "Your application is '" + ev + "'";
    };
    SignUpFormComponent.prototype.log = function () {
        console.log(this.formObject.value);
        console.log(this.formObject.controls);
    };
    SignUpFormComponent.prototype.signup = function () {
        //var submitInfo = {username: this.formObject.control.username.value, password: this.formObject.password.value}
        //var result = authService.login(submitInfo);
        var result = false;
        if (!result) {
            this.formObject.controls.username.setErrors({ failedLogin: true });
            console.log(this.formObject.controls);
        }
    };
    return SignUpFormComponent;
}());
SignUpFormComponent = __decorate([
    core_1.Component({
        selector: 'signup-form',
        templateUrl: 'app/signup-form.component.html',
        styles: ["\n\n    .template-form\n    {\n       \n\n    }\n    \n    input.ng-invalid.ng-touched\n    {\n      border: 2px solid red;\n    }\n\n    .errorInfo\n    {\n      padding: 2px;\n      float:left;\n      margin-left: 5px;\n    }\n\n  "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SignUpFormComponent);
exports.SignUpFormComponent = SignUpFormComponent;
//# sourceMappingURL=signup-form.component.js.map