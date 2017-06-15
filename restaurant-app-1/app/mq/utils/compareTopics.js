"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts topic to search regex
 * @param  {String} topic   Topic name
 * @return {Regex}          Search regex
 * @private
 */
var topicToRegex = function (topic) { return "^" + topic.split('.')
    .reduce(function (result, segment, index, arr) {
    var res = '';
    if (arr[index - 1]) {
        res = arr[index - 1] !== '#' ? '\\.\\b' : '\\b';
    }
    if (segment === '#') {
        res += '[\\s\\S]*';
    }
    else if (segment === '*') {
        res += '[^.]+';
    }
    else {
        res += segment;
    }
    return result + res;
}, ''); };
/**
 * Compares given topic with existing topic
 * @param  {String}  topic         Topic name
 * @param  {String}  existingTopic Topic name to compare to
 * @return {Boolean}               Whether topic is included in existingTopic
 * @example
 * should(compareTopics('test.one.two', 'test.#')).equal(true);
 * @private
 */
var compareTopics = function (topic, existingTopic) {
    // if no # or * found, do plain string matching
    if (existingTopic.indexOf('#') === -1 && existingTopic.indexOf('*') === -1) {
        return topic === existingTopic;
    }
    // otherwise do regex matching
    var pattern = topicToRegex(existingTopic);
    var rgx = new RegExp(pattern);
    var result = rgx.test(topic);
    return result;
};
exports.compareTopics = compareTopics;
//# sourceMappingURL=compareTopics.js.map