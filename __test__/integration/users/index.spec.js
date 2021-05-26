const request = require('supertest');
const app = require('../../../src/app');
const { userSuccess, userFailEmail } = require('../../mocks/userMock');

describe('Tests Units Users', () => {
    it('should return success create user', async () => {
        const res = await request(app).post('/users')
            .send(userSuccess);
        expect(res.status).toBe(201);
        expect(res.body.email).toBe(userSuccess.email)
    })

    it('should success return user ', async () => {
        const res = await request(app).get('/users')
        expect(res.status).toBe(200)
    })

    it('should success return user from id ', async () => {
        const res = await request(app).get('/users/1')
        expect(res.status).toBe(200)
        expect(res.body.email).toBe(userSuccess.email)
    })

    it('should success return user update ', async () => {
        userSuccess.nome = 'Fulano de Tal'
        const res = await request(app).patch('/users/1')
            .send(userSuccess)
        expect(res.status).toBe(201)
        expect(res.body.nome).toBe(userSuccess.nome)
    })
})