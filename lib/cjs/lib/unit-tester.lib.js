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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitTester = void 0;
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
class UnitTester {
    /**
     * @description - initialize the UnitTester
     * @param app - an express app
     * @param config - object containing configuration
     */
    static init(app, config) {
        UnitTester.app = app;
        UnitTester.config = config;
        return UnitTester;
    }
    /**
     * @description - sends GET request to the given endpoint
     * @param {string} path - name of the endpoint
     */
    static get(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, supertest_1.default)(this.app).get(path).set(this.config.headers).send();
                return response.body;
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @description - sends POST request to the given endpoint
     * @param {string} path - name of the endpoint
     * @param {object} payload - payload for the request
     */
    static post(path, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, supertest_1.default)(this.app).post(path).set(this.config.headers).send(payload);
                return response.body;
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @description - sends DELETE request to the given endpoint
     * @param {string} path - name of the endpoint
     */
    static delete(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, supertest_1.default)(this.app).delete(path).set(this.config.headers).send();
                return response.body;
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @description - sends PUT request to the given endpoint
     * @param {string} path - name of the endpoint
     * @param {object} payload - payload for the request
     */
    static put(path, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, supertest_1.default)(this.app).put(path).set(this.config.headers).send(payload);
                return response.body;
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @description - validates the status and message
     * @param {{code: number, message: string}} status - status of the request
     * @param {object} response - payload for the request
     */
    static validateStatus(response, status) {
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
    }
    /**
     * @description - saves a document inside the collection
     * @param {object} payload
     * @param {function} model
     */
    static createResource(payload, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resource = new model(payload);
                return yield resource.save();
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @description - deletes a document from the collection for a given _id
     * @param {string} _id
     * @param {function} model
     */
    static deleteResource(_id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model.deleteOne({
                    '$or': [
                        { _id: new ObjectId(_id) },
                        { _id },
                    ]
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
/**
 * @property app - an express app
 */
UnitTester.app = null;
UnitTester.config = null;
exports.UnitTester = UnitTester;
