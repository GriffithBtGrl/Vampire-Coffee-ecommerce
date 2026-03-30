const request = require("supertest");
const app = require("../index");

describe("API Ecommerce", () => {
    
  test("GET / debe responder 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});

test("POST /login debe devolver token", async () => {
  const res = await request(app)
    .post("/login")
    .send({
      email: "cat@test.com",
      password: "123456"
    });

  expect(res.statusCode).toBe(200);
  expect(res.body.token).toBeDefined();
});

test("GET /productos sin token debe fallar", async () => {
  const res = await request(app).get("/productos");
  expect(res.statusCode).toBe(401);
});

test("POST /usuarios debe crear usuario", async () => {
  const res = await request(app)
    .post("/usuarios")
    .send({
      email: "test" + Date.now() + "@test.com",
      password: "123456"
    });

  expect(res.statusCode).toBe(201);
});
