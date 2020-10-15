"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Restaurant = /** @class */ (function () {
    // prettier-ignore
    function Restaurant(id, name, address, kind, lat, lng) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.kind = kind;
        this.lat = lat;
        this.lng = lng;
        this.coordinates = [this.lat, this.lng];
        Restaurant.list.push(this);
    }
    Object.defineProperty(Restaurant, "getList", {
        // static
        get: function () {
            return Restaurant.list;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getId", {
        // getters
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getKind", {
        get: function () {
            return this.kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getAddress", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Restaurant.prototype, "getCoordinates", {
        get: function () {
            return this.coordinates;
        },
        enumerable: false,
        configurable: true
    });
    Restaurant.list = [];
    return Restaurant;
}());
exports.default = Restaurant;
