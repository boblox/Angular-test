"use strict";
var CoderService = (function () {
    function CoderService() {
        var _this = this;
        this.shift = 20;
        this.encodeFunc = function (s) { return s.charCodeAt(0) + _this.shift; };
        this.decodeFunc = function (s) { return s.charCodeAt(0) - _this.shift; };
    }
    CoderService.prototype.code = function (s, func) {
        if (s) {
            return s.split('')
                .map(function (char) { return String.fromCharCode(func(char)); })
                .join('');
        }
        return null;
    };
    CoderService.prototype.encode = function (s) {
        return encodeURI(this.code(s, this.encodeFunc));
    };
    CoderService.prototype.decode = function (s) {
        return decodeURI(this.code(s, this.decodeFunc));
    };
    return CoderService;
}());
exports.CoderService = CoderService;
//# sourceMappingURL=coder.service.js.map