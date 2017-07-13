webpackJsonp([0],{

/***/ 167:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(76);
var s3_manager_1 = __webpack_require__(417);
var HomePage = (function () {
    function HomePage(navCtrl, s3Object) {
        //let s3Object:S3Manager;
        this.navCtrl = navCtrl;
        this.s3Object = s3Object;
        s3Object.s3Setup();
    }
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        selector: 'page-home',template:/*ion-inline-start:"/Users/muzammil/Desktop/ionic/wallpaper/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/muzammil/Desktop/ionic/wallpaper/src/pages/home/home.html"*/,
        providers: [s3_manager_1.S3Manager]
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, s3_manager_1.S3Manager])
], HomePage);
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(76);
var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    core_1.Component({
        selector: 'page-list',template:/*ion-inline-start:"/Users/muzammil/Desktop/ionic/wallpaper/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/muzammil/Desktop/ionic/wallpaper/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.NavParams])
], ListPage);
exports.ListPage = ListPage;
var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(350);
var app_module_1 = __webpack_require__(368);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(48);
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(76);
var app_component_1 = __webpack_require__(408);
var home_1 = __webpack_require__(271);
var list_1 = __webpack_require__(348);
var status_bar_1 = __webpack_require__(267);
var splash_screen_1 = __webpack_require__(270);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.MyApp,
            home_1.HomePage,
            list_1.ListPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.MyApp,
            home_1.HomePage,
            list_1.ListPage
        ],
        providers: [
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen,
            { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ionic_angular_1 = __webpack_require__(76);
var status_bar_1 = __webpack_require__(267);
var splash_screen_1 = __webpack_require__(270);
var home_1 = __webpack_require__(271);
var list_1 = __webpack_require__(348);
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = home_1.HomePage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: home_1.HomePage },
            { title: 'List', component: list_1.ListPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    core_1.ViewChild(ionic_angular_1.Nav),
    __metadata("design:type", ionic_angular_1.Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/muzammil/Desktop/ionic/wallpaper/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/muzammil/Desktop/ionic/wallpaper/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.Platform, status_bar_1.StatusBar, splash_screen_1.SplashScreen])
], MyApp);
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
__webpack_require__(418);
var AWS = __webpack_require__(419);
var S3Manager = (function () {
    function S3Manager() {
    }
    S3Manager.prototype.s3Setup = function () {
        var credentials = new AWS.CognitoIdentityCredentials({ IdentityPoolId: "us-west-2:6c3ae1d3-cfd5-4d3b-8015-d5852f746ed2" });
        AWS.config.credentials = credentials;
        AWS.config.region = 'us-west-2';
        var s3 = new AWS.S3();
        var params = {
            Bucket: 'wallpapertriffortapp',
            Delimiter: '/' //if you want all folders, subfolder and files, you can remove delimiter key.
        };
        //console.log (JSON.stringify(params));
        s3.listObjects(params, function (error, data) {
            if (error) {
                console.log(error, error.stack); // an error occurred
            }
            else {
                console.log(JSON.stringify(data));
            }
        });
    };
    return S3Manager;
}());
S3Manager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], S3Manager);
exports.S3Manager = S3Manager;
//# sourceMappingURL=s3-manager.js.map

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[349]);
//# sourceMappingURL=main.js.map