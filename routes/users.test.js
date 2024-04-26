process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");
const db = require("../db");

let testUser;
beforeEach(async () => {
  const result = await db.query(
    `INSERT INTO users (name, type) VALUES ('Peanut', 'admin') RETURNING id, name, type`
  );
  testUser = result.rows[0];
});

describe("hope this works", () => {
  test("BLAH", () => {
    console.log(testUser);
    expect(1).toBe(1);
  });
});
