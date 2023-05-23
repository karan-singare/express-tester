import request from 'supertest';
import {expect} from 'chai';
import mongoose from 'mongoose';
import Response from "../models/response.interface";
import Status from "../models/status.interface";

const ObjectId = mongoose.Types.ObjectId;

export class UnitTester {
  /**
   * @property app - an express app
   */
  static app = null;
  static config = null;

  /**
   * @description - initialize the UnitTester
   * @param app - an express app
   * @param config - object containing configuration
   */
  static init(app: any, config: any) {
    UnitTester.app = app;
    UnitTester.config = config;
    return UnitTester;
  }

  /**
   * @description - sends GET request to the given endpoint
   * @param {string} path - name of the endpoint
   */
  static async get(path: string) {
    try {
      const response = await request(this.app).get(path).set(this.config.headers).send();
      return response.body;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description - sends POST request to the given endpoint
   * @param {string} path - name of the endpoint
   * @param {object} payload - payload for the request
   */
  static async post(path: string, payload: object) {
    try {
      const response = await request(this.app).post(path).set(this.config.headers).send(payload);
      return response.body;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description - sends DELETE request to the given endpoint
   * @param {string} path - name of the endpoint
   */
  static async delete(path: string) {
    try {
      const response = await request(this.app).delete(path).set(this.config.headers).send();
      return response.body;
    } catch (error) {
      throw error;
    }
  }
  /**
   * @description - sends PUT request to the given endpoint
   * @param {string} path - name of the endpoint
   * @param {object} payload - payload for the request
   */
  static async put(path: string, payload: object) {
    try {
      const response = await request(this.app).put(path).set(this.config.headers).send(payload);
      return response.body;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description - validates the status and message
   * @param {{code: number, message: string}} status - status of the request
   * @param {object} response - payload for the request
   */
  static validateStatus(response: Response, status: Status) {
    try {
      expect(response).to.contain.property('status');
      expect(response.status.code).to.be.a('number');
      expect(response.status.code).to.equal(status.code);
      expect(response.status.message).to.be.a('string');
      expect(response.status.message).to.include(status.message);
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description - saves a document inside the collection
   * @param {object} payload
   * @param {function} model
   */
  static async createResource(payload: object, model: any) {
    try {
      const resource = new model(payload);
      return await resource.save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description - deletes a document from the collection for a given _id
   * @param {string} _id
   * @param {function} model
   */
  static async deleteResource(_id: string, model: any) {
    try {
      return await model.deleteOne({
        '$or': [
          {_id: new ObjectId(_id)},
          {_id},
        ]
      });
    } catch (error) {
      throw error;
    }
  }
}

