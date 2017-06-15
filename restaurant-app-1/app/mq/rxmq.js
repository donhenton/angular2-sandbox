"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = require("./channel");
/**
 * Rxmq message bus class
 */
var Rxmq = (function () {
    /**
    * Represents a new Rxmq message bus.
    * Normally you'd just use a signleton returned by default, but it's also
    * possible to create a new instance of Rxmq should you need it.
    * @constructor
    * @example
    * import {Rxmq} from 'rxmq';
    * const myRxmq = new Rxmq();
    */
    function Rxmq() {
        /**
         * Holds channels definitions
         * @type {Object}
         * @private
         */
        this.channels = {};
        /**
         * Holds channel plugins definitions
         * @type {Object}
         * @private
         */
        this.channelPlugins = [];
    }
    /**
     * Returns a channel for given name
     * @param  {String} name  Channel name
     * @return {Channel}      Channel object
     * @example
     * const testChannel = rxmq.channel('test');
     */
    Rxmq.prototype.channel = function (name) {
        if (name === void 0) { name = 'defaultRxmqChannel'; }
        if (!this.channels[name]) {
            this.channels[name] = new channel_1.default(this.channelPlugins);
        }
        return this.channels[name];
    };
    /**
     * Register new Rxmq plugin
     * @param  {Object} plugin      Plugin object
     * @return {void}
     * @example
     * import myPlugin from 'my-plugin';
     * rxmq.registerPlugin(myPlugin);
     */
    Rxmq.prototype.registerPlugin = function (plugin) {
        for (var prop in plugin) {
            if (!this.hasOwnProperty(prop)) {
                /**
                 * Hide from esdoc
                 * @private
                 */
                this[prop] = plugin[prop];
            }
        }
    };
    /**
     * Register new Channel plugin
     * @param  {Object} plugin      Channel plugin object
     * @return {void}
     * @example
     * import myChannelPlugin from 'my-channel-plugin';
     * rxmq.registerChannelPlugin(myChannelPlugin);
     */
    Rxmq.prototype.registerChannelPlugin = function (plugin) {
        this.channelPlugins.push(plugin);
        for (var name_1 in this.channels) {
            if (this.channels.hasOwnProperty(name_1)) {
                this.channels[name_1].registerPlugin(plugin);
            }
        }
    };
    return Rxmq;
}());
/**
 * Rxmq bus definition
 */
exports.default = Rxmq;
//# sourceMappingURL=rxmq.js.map