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
/**
 * import { Injectable } from '@angular/core';
 */
var TwitterService = (function () {
    function TwitterService() {
    }
    TwitterService.prototype.getUrl = function () {
        var t = Math.floor((Math.random() * 10000) + 1);
        return "http://lorempixel.com/100/100/people?" + t;
    };
    TwitterService.prototype.getTwitterPosts = function () {
        var posts = [];
        posts.push({
            username: 'bonzo',
            handle: '@bonzodog',
            text: 'you know you love him, woof!!!',
            url: this.getUrl(),
            count: 10
        });
        posts.push({
            username: 'vlad baby',
            handle: '@vladtheimpaler',
            text: 'hmmmmm, garlic!!',
            url: this.getUrl(),
            count: 6
        });
        posts.push({
            username: 'burkenHare',
            handle: '@BurkeAndHare',
            text: 'whats wrong with Abby Normal?',
            url: this.getUrl(),
            count: 22
        });
        return posts;
    };
    return TwitterService;
}());
TwitterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TwitterService);
exports.default = TwitterService;
//# sourceMappingURL=twitter.service.js.map