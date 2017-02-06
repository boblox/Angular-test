"use strict";
var router_1 = require('@angular/router');
exports.routes = [
    { path: '', redirectTo: 'tv', pathMatch: 'full' },
    { path: 'tv', loadChildren: 'app/tv/tv.module' },
    { path: 'coder', loadChildren: 'app/coder/coder.module' } //lazy-loading
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map