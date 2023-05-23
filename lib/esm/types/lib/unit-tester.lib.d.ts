import Response from "../models/response.interface";
import Status from "../models/status.interface";
export declare class UnitTester {
    /**
     * @property app - an express app
     */
    static app: any;
    static config: any;
    /**
     * @description - initialize the UnitTester
     * @param app - an express app
     * @param config - object containing configuration
     */
    static init(app: any, config: any): typeof UnitTester;
    /**
     * @description - sends GET request to the given endpoint
     * @param {string} path - name of the endpoint
     */
    static get(path: string): Promise<any>;
    /**
     * @description - sends POST request to the given endpoint
     * @param {string} path - name of the endpoint
     * @param {object} payload - payload for the request
     */
    static post(path: string, payload: object): Promise<any>;
    /**
     * @description - sends DELETE request to the given endpoint
     * @param {string} path - name of the endpoint
     */
    static delete(path: string): Promise<any>;
    /**
     * @description - sends PUT request to the given endpoint
     * @param {string} path - name of the endpoint
     * @param {object} payload - payload for the request
     */
    static put(path: string, payload: object): Promise<any>;
    /**
     * @description - validates the status and message
     * @param {{code: number, message: string}} status - status of the request
     * @param {object} response - payload for the request
     */
    static validateStatus(response: Response, status: Status): void;
    /**
     * @description - saves a document inside the collection
     * @param {object} payload
     * @param {function} model
     */
    static createResource(payload: object, model: any): Promise<any>;
    /**
     * @description - deletes a document from the collection for a given _id
     * @param {string} _id
     * @param {function} model
     */
    static deleteResource(_id: string, model: any): Promise<any>;
}
//# sourceMappingURL=unit-tester.lib.d.ts.map