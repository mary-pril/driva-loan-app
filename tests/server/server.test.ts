import request from 'supertest';
import {server, serverInst} from '../../src/server';
import * as loanService from '../../src/server/services/loanService';
import { loanData } from './fixtures';

describe('Express Server', () => {
    afterAll((done) => {
        if (serverInst) {
            serverInst.close(done);
        } else {
          done();
        }
      });

    it('should respond with 200 for the ping route', async () => {
        const response = await request(server).get('/ping');
        expect(response.status).toBe(200);
    });

    it('should respond with 200 for the home route', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
    });

    it('should respond with 404 for unknown routes', async () => {
        const response = await request(server).get('/unknown-route');
        expect(response.status).toBe(404);
    });

    it('should respond with 200 for /api/loan', async () => {
        jest.spyOn(loanService, 'getLoanResults').mockImplementation(() => {
            return Promise.resolve({ results: [] });
        });
    
        const response = await request(server).post('/api/loan').send(loanData);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ results: [] });
    });

    it('should respond with 500 for exception', async () => {
        jest.spyOn(loanService, 'getLoanResults').mockImplementation(() => {
            throw new Error('Mocked error');
        });

        const response = await request(server).post('/api/loan' ).send(loanData);
        expect(response.status).toBe(500);
        expect(response.text).toBe('{"message":"Internal Server Error"}');

        jest.restoreAllMocks();
    });
});