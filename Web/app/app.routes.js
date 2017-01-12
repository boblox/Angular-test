"use strict";
var router_1 = require('@angular/router');
var tv_component_1 = require('./tv/tv.component');
var coder_component_1 = require('./coder/coder.component');
exports.routes = [
    { path: '', redirectTo: 'tv', pathMatch: 'full' },
    { path: 'tv', component: tv_component_1.TVComponent },
    { path: 'coder', component: coder_component_1.CoderComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map