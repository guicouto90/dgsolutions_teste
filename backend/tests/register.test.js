const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001/register';

beforeAll(() => {
  shell.exec('npx sequelize db:create && npx sequelize db:migrate');
})

afterAll(() => {
  shell.exec('npx sequelize db:drop');
  shell.exec('npx sequelize db:create && npx sequelize db:migrate');
})

describe('POST method', () => {
  it('Registered done successfully', async () => {
    await frisby
      .post(url, {
        name: "Guilherme Couto",
        birthDate: "1990-05-04"
      })
      .expect('status', 201)
  })

  it('When name is not a String type', async () => {
    await frisby
      .post(url, {
        name: 1,
        birthDate: "1990-05-04"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"name\" must be a string");
      })
  })

  it('When name is empty', async () => {
    await frisby
      .post(url, {
        name: "",
        birthDate: "1990-05-04"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"name\" is not allowed to be empty");
      })
  })

  it('When there is no field name', async () => {
    await frisby
      .post(url, {
        birthDate: "1990-05-04"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"name\" is required");
      })
  })

  it('When field name has less than 3 characters', async () => {
    await frisby
      .post(url, {
        name: "Gu",
        birthDate: "1990-05-04"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"name\" length must be at least 3 characters long");
      })
  })

  it('When there is no field birthDate', async () => {
    await frisby
      .post(url, {
        name: "Guilherme"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"birthDate\" is required");
      })
  })

  it('When field birthDate is not a valid date ISO 8601', async () => {
    await frisby
      .post(url, {
        name: "Guilherme",
        birthDate: 1
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"birthDate\" must be a valid date");
      })
  })
})

describe('PUT method', () => {
  it('Registered done successfully', async () => {
    await frisby
      .put(`${url}/1`, {
        name: "Guilherme Couto",
        birthDate: "1990-05-04"
      })
      .expect('status', 200)
  })

  it('When name is not a String type', async () => {
    await frisby
      .put(`${url}/1`, {
        name: 1,
        birthDate: "1990-05-04"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"name\" must be a string");
      })
  })

  it('When name is empty', async () => {
    await frisby
      .put(`${url}/1`, {
        name: "",
        birthDate: "1990-05-04"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"name\" is not allowed to be empty");
      })
  })

  it('When there is no field name', async () => {
    await frisby
      .put(`${url}/1`, {
        birthDate: "1990-05-04"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"name\" is required");
      })
  })

  it('When field name has less than 3 characters', async () => {
    await frisby
      .put(`${url}/1`, {
        name: "Gu",
        birthDate: "1990-05-04"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"name\" length must be at least 3 characters long");
      })
  })

  it('When there is no field birthDate', async () => {
    await frisby
      .put(`${url}/1`, {
        name: "Guilherme"
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"birthDate\" is required");
      })
  })

  it('When field birthDate is not a valid date ISO 8601', async () => {
    await frisby
      .put(`${url}/1`, {
        name: "Guilherme",
        birthDate: 1
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("\"birthDate\" must be a valid date");
      })
  })

  it('When an specific register doesnt exist', async () => {
    await frisby
      .get(`${url}/50`)
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("Register not found");
      })
  })
})

describe('GET method', () => {

  it('List all registers', async () => {
    await frisby
      .get(url)
      .expect('status', 200)
  })

  it('List an specific register by id', async () => {
    await frisby
      .get(`${url}/1`)
      .expect('status',200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.id).toBe(1);
        expect(result.name).toBe("Guilherme Couto");
        expect(result.birthDate).toBe("1990-05-04T00:00:00.000Z");
        expect(result.age).toBe(32)
      })
  })

  it('When an specific register doesnt exist', async () => {
    await frisby
      .get(`${url}/50`)
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("Register not found");
      })
  })
})

describe('DELETE method', () => {

  it('Delete an specific register by id', async () => {
    await frisby
      .delete(`${url}/1`)
      .expect('status',200)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("Register with id 1 removed");
      })
  })

  it('When an specific register doesnt exist', async () => {
    await frisby
      .get(`${url}/50`)
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe("Register not found");
      })
  })
})