const request = require('supertest');
const app = require('../app');

describe('Equipment API Endpoints', () => {
    it('should create new equipment', async () => {
        const response = await request(app)
            .post('/equipment')
            .send({ name: 'Test Equipment', category: 'Test Category' });
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Test Equipement');
        });

        it('should retrieve all equipment', async () => {
            const response = await request(app).get('/equipment');
            expect(response.status).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });