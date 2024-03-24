"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uuid_1 = require("uuid");
function compmap(dataArray, Component) {
    var keyGenerator = function (dataItem) {
        return dataItem.key ? dataItem.key : (0, uuid_1.v4)();
    };
    return dataArray.map(function (dataItem) { return (react_1.default.createElement(Component, __assign({ key: keyGenerator(dataItem) }, dataItem))); });
}
exports.default = compmap;
//# sourceMappingURL=compmap.js.map