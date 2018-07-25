"use strict";var __decorate=this&&this.__decorate||function(o,e,t,r){var p,n=arguments.length,_=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(o,e,t,r);else for(var a=o.length-1;a>=0;a--)(p=o[a])&&(_=(n<3?p(_):n>3?p(e,t,_):p(e,t))||_);return n>3&&_&&Object.defineProperty(e,t,_),_};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),app_component_1=require("./app.component"),app_routing_module_1=require(".//app-routing.module"),forms_1=require("@angular/forms"),book_header_component_1=require("./book-header/book-header.component"),book_footer_component_1=require("./book-footer/book-footer.component"),book_list_page_component_1=require("./book-list-page/book-list-page.component"),book_detail_page_component_1=require("./book-detail-page/book-detail-page.component"),http_1=require("@angular/common/http"),AppModule=function(){function o(){}return o=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,book_header_component_1.BookHeaderComponent,book_footer_component_1.BookFooterComponent,book_list_page_component_1.BookListPageComponent,book_detail_page_component_1.BookDetailPageComponent],imports:[platform_browser_1.BrowserModule,app_routing_module_1.AppRoutingModule,forms_1.FormsModule,http_1.HttpClientModule],providers:[],bootstrap:[app_component_1.AppComponent]})],o)}();exports.AppModule=AppModule;