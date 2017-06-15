"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Find a specific subject by given name
 * @param  {Array}                  subjects    Array of subjects to search in
 * @param  {String}                 name        Name to search for
 * @return {(EndlessSubject|void)}              Found subject or void
 */
var findSubjectByName = function (subjects, name) {
    var res = subjects.filter(function (s) { return s.name === name; });
    if (!res || res.length < 1) {
        return undefined;
    }
    return res[0];
};
exports.findSubjectByName = findSubjectByName;
//# sourceMappingURL=findTopicByName.js.map