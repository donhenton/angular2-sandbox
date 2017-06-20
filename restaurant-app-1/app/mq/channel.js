"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = require("rxjs/Rx");
var index_1 = require("./rx/index");
var index_2 = require("./utils/index");
/**
 * Rxmq channel class
 */
var Channel = (function () {
    /**
    * Represents a new Rxmq channel.
    * Normally you wouldn't need to instantiate it directly, you'd just work with existing instance.
    * @constructor
    * @param  {Array}   plugins  Array of plugins for new channel
    * @return {void}
    */
    function Channel(plugins) {
        if (plugins === void 0) { plugins = []; }
        /**
         * Internal set of utilities
         * @type {Object}
         * @private
         */
        this.utils = {
            findSubjectByName: index_2.findSubjectByName,
            compareTopics: index_2.compareTopics,
        };
        /**
         * Instances of subjects
         * @type {Array}
         * @private
         */
        this.subjects = [];
        /**
         * Channel bus
         * @type {EndlessReplaySubject}
         * @private
         */
        this.channelBus = new index_1.EndlessReplaySubject();
        /**
         * Permanent channel bus stream as Rx.Observable
         * @type {Rx.Observable}
         * @private
         */
        //this.channelStream = this.channelBus.publish().refCount();
        this.channelStream = this.channelBus.share();
        // inject plugins
        plugins.map(this.registerPlugin.bind(this));
    }
    /**
     * Returns EndlessSubject representing given topic
     * @param  {String}         name           Topic name
     * @return {EndlessSubject}             EndlessSubject representing given topic
     * @example
     * const channel = rxmq.channel('test');
     * const subject = channel.subject('test.topic');
     */
    Channel.prototype.subject = function (name, _a) {
        var _b = (_a === void 0 ? {} : _a).Subject, Subject = _b === void 0 ? index_1.EndlessSubject : _b;
        var s = this.utils.findSubjectByName(this.subjects, name);
        if (!s) {
            s = new Subject();
            s.name = name;
            this.subjects.push(s);
            this.channelBus.next(s);
        }
        return s;
    };
    /**
     * Get an Rx.Observable for specific set of topics
     * @param  {String}         name        Topic name / pattern
     * @return {Rx.Observable}              Rx.Observable for given set of topics
     * @example
     * const channel = rxmq.channel('test');
     * channel.observe('test.topic')
     *        .subscribe((res) => { // default Rx.Observable subscription
     *            // handle results
     *        });
     */
    Channel.prototype.observe = function (name) {
        // create new topic if it's plain text
        if (name.indexOf('#') === -1 && name.indexOf('*') === -1) {
            return this.subject(name);
        }
        // this.channelStream.forEach((obs) => {
        //     //console.log("checking "+obs.name)
        //     let res = compareTopics(obs.name, name);
        //     console.log(`checking ${name} against registered ${obs.name} results ${res}`)
        //     if (res)
        //     {
        //        // console.log("hit "+obs.name)
        //        return obs;
        //     }
        // })
        //this.subjects.push(s);
        //this.channelBus.next(s);
        // return stream
        return this.channelStream.filter(function (obs) { return index_2.compareTopics(obs.name, name); }).mergeAll();
    };
    /**
     * Do a request that will be replied into returned Rx.AsyncSubject
     * Alias for '.request()' that uses single object as params
     * @param  {Object}  options                   Request options
     * @param  {String}  options.topic             Topic name
     * @param  {Any}     options.data              Request data
     * @param  {Object}  options.DefaultSubject    Response subject, defaults to Rx.AsyncSubject
     * @return {Rx.AsyncSubject}                   AsyncSubject that will dispatch the response
     * @example
     * const channel = rxmq.channel('test');
     * channel.requestTo({
     *     topic: 'test.topic',
     *     data: 'test data',
     * }).subscribe((response) => { // default Rx.Observable subscription
     *     // handle response
     * });
     */
    Channel.prototype.request = function (_a) {
        var topic = _a.topic, data = _a.data, _b = _a.Subject, Subject = _b === void 0 ? Rx_1.default.AsyncSubject : _b;
        var subj = this.utils.findSubjectByName(this.subjects, topic);
        if (!subj) {
            return Rx_1.default.Observable.never();
        }
        // create reply subject
        var replySubject = new Subject();
        subj.next({ replySubject: replySubject, data: data });
        return replySubject;
    };
    /**
     * Channel plugin registration
     * @param  {Object} plugin Plugin object to apply
     * @return {void}
     */
    Channel.prototype.registerPlugin = function (plugin) {
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
    return Channel;
}());
/**
 * Channel definition
 */
exports.default = Channel;
//# sourceMappingURL=channel.js.map