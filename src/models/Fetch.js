"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Fetch loaded");
var Fetch = /** @class */ (function () {
    function Fetch(URL, action) {
        if (action === void 0) { action = "get"; }
        this.URL = URL;
        this.action = action;
        Fetch.list.push(this);
    }
    Object.defineProperty(Fetch.prototype, "setURL", {
        // setters
        set: function (url) {
            this.URL = url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fetch.prototype, "getURL", {
        // getters
        get: function () {
            return this.URL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fetch.prototype, "getAction", {
        get: function () {
            return this.action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fetch, "getList", {
        // static
        get: function () {
            return Fetch.list;
        },
        enumerable: false,
        configurable: true
    });
    return Fetch;
}());
exports.default = Fetch;
