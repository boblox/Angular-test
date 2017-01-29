"use strict";
var Observable_1 = require('rxjs/Observable');
var LoadingService = (function () {
    function LoadingService() {
        var _this = this;
        this.loading = new Observable_1.Observable(function (observer) { return _this.observer = observer; });
    }
    LoadingService.prototype.showLoadingIndicator = function () {
        this.observer.next(true);
    };
    LoadingService.prototype.hideLoadingIndicator = function () {
        this.observer.next(false);
    };
    return LoadingService;
}());
exports.LoadingService = LoadingService;
//# sourceMappingURL=loading.service.js.map