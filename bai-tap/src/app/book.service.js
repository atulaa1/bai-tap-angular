"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var c,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(n=(i<3?c(n):i>3?c(t,r,n):c(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),BookService=function(){function e(e){this.http=e,this.url="http://fakerestapi.azurewebsites.net/api/Books"}return e.prototype.getBook=function(){return this.http.get(this.url)},e=__decorate([core_1.Injectable({providedIn:"root"})],e)}();exports.BookService=BookService;