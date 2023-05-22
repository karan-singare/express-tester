"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitTester = void 0;
var request = require("supertest");
var chai_1 = require("chai");
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.default.Types.ObjectId;
var UnitTester = exports.UnitTester = /** @class */ (function () {
    function UnitTester() {
    }
    /**
     * @description - initialize the UnitTester
     * @param app - an express app
     * @param config - object containing configuration
     */
    UnitTester.init = function (app, config) {
        UnitTester.app = app;
        UnitTester.config = config;
        return UnitTester;
    };
    /**
     * @description - sends GET request to the given endpoint
     * @param {string} path - name of the endpoint
     */
    UnitTester.get = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request(this.app).get(path).set(this.config.headers).send()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - sends POST request to the given endpoint
     * @param {string} path - name of the endpoint
     * @param {object} payload - payload for the request
     */
    UnitTester.post = function (path, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request(this.app).post(path).set(this.config.headers).send(payload)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - sends DELETE request to the given endpoint
     * @param {string} path - name of the endpoint
     */
    UnitTester.delete = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request(this.app).delete(path).set(this.config.headers).send()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - sends PUT request to the given endpoint
     * @param {string} path - name of the endpoint
     * @param {object} payload - payload for the request
     */
    UnitTester.put = function (path, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request(this.app).put(path).set(this.config.headers).send(payload)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - validates the status and message
     * @param {{code: number, message: string}} status - status of the request
     * @param {object} response - payload for the request
     */
    UnitTester.validateStatus = function (response, status) {
        try {
            (0, chai_1.expect)(response).to.contain.property('status');
            (0, chai_1.expect)(response.status.code).to.be.a('number');
            (0, chai_1.expect)(response.status.code).to.equal(status.code);
            (0, chai_1.expect)(response.status.message).to.be.a('string');
            (0, chai_1.expect)(response.status.message).to.include(status.message);
        }
        catch (error) {
            throw error;
        }
    };
    /**
     * @description - saves a document inside the collection
     * @param {object} payload
     * @param {function} model
     */
    UnitTester.createResource = function (payload, model) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        resource = new model(payload);
                        return [4 /*yield*/, resource.save()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - deletes a document from the collection for a given _id
     * @param {string} _id
     * @param {function} model
     */
    UnitTester.deleteResource = function (_id, model) {
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model.deleteOne({
                                '$or': [
                                    { _id: new ObjectId(_id) },
                                    { _id: _id },
                                ]
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_6 = _a.sent();
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @property app - an express app
     */
    UnitTester.app = null;
    UnitTester.config = null;
    return UnitTester;
}());