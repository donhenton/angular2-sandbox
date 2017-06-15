"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = require("./channel");
exports.Channel = channel_1.default;
var rxmq_1 = require("./rxmq");
var index_1 = require("./rx/index");
exports.EndlessSubject = index_1.EndlessSubject;
exports.EndlessReplaySubject = index_1.EndlessReplaySubject;
var rrr = new rxmq_1.default();
exports.default = rrr;
//# sourceMappingURL=index.js.map