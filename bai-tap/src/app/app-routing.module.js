"use strict";var __decorate=this&&this.__decorate||function(e,o,t,r){var n,p=arguments.length,a=p<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,t,r);else for(var u=e.length-1;u>=0;u--)(n=e[u])&&(a=(p<3?n(a):p>3?n(o,t,a):n(o,t))||a);return p>3&&a&&Object.defineProperty(o,t,a),a};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),router_1=require("@angular/router"),book_detail_page_component_1=require("./book-detail-page/book-detail-page.component"),book_list_page_component_1=require("./book-list-page/book-list-page.component"),routes=[{path:"detail",component:book_detail_page_component_1.BookDetailPageComponent},{path:"",component:book_list_page_component_1.BookListPageComponent}],AppRoutingModule=function(){function e(){}return e=__decorate([core_1.NgModule({exports:[router_1.RouterModule],imports:[router_1.RouterModule.forRoot(routes)],declarations:[]})],e)}();exports.AppRoutingModule=AppRoutingModule;