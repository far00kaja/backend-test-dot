const request = require("supertest");
const app = require("../../src/app");

describe("Post Login Endpoints", () => {
  it("should login with correct email and password", async () => {
    const res = await request(app).post("/users/login").send({
      email: "admin@admin.com",
      password: "asdasd123",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
    // expect(res.body).toHaveProperty("post");
  });
});

describe("Post Login Endpoints", () => {
  it("should login with incorrect email and correct password", async () => {
    const res = await request(app).post("/users/login").send({
      email: "admin@admin.coms",
      password: "asdasd123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });
});

describe("Post Login Endpoints", () => {
  it("should login with correct email and incorrect password", async () => {
    const res = await request(app).post("/users/login").send({
      email: "admin@admin.coms",
      password: "asdasd123asd",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });
});

// ---------------------------------------------------------------------------------------------------
describe("Put Update Profiles", () => {
  it("should update profile end return success", async () => {
    const res = await request(app).put("/users/update-profile").send({
      email: "admin@admin.com",
      password: "asdasd123",
      firstName: "Dickyyyy",
      lastName: "darmawanss",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });
});

describe("Put Update Profiles", () => {
  it("should update profile failed because lastName not in body request", async () => {
    const res = await request(app).put("/users/update-profile").send({
      email: "admin@admin.coms",
      password: "asdasd123",
      firstName: "Dickyyyy",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.result.error).toEqual("Please enter lastName");
    expect(res.body).toHaveProperty("message");
  });
});

describe("Put Update Profiles", () => {
  it("should update profile failed because firstName not in body request", async () => {
    const res = await request(app).put("/users/update-profile").send({
      email: "admin@admin.coms",
      password: "asdasd123",
      lastName: "Darmawan",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.result.error).toEqual("Please enter firstName");
    expect(res.body).toHaveProperty("message");
  });
});

describe("Put Update Profiles", () => {
  it("should update profile failed because email not in body request", async () => {
    const res = await request(app).put("/users/update-profile").send({
      password: "asdasd123",
      lastName: "Darmawan",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.result.error).toEqual("Please enter email");
    expect(res.body).toHaveProperty("message");
  });
});

describe("Put Update Profiles", () => {
  it("should update profile failed because password not in body request", async () => {
    const res = await request(app).put("/users/update-profile").send({
      email: "admin@admin.coms",
      lastName: "Darmawan",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.result.error).toEqual("Please enter password");
    expect(res.body).toHaveProperty("message");
  });
});

//-------------------------------------------------------------------------------------------------
describe("PATCH Update Password", () => {
  it("should update password correctly", async () => {
    const res = await request(app).patch("/users/change-password").send({
      email: "admin@admin.com",
      password: "asdasd123",
      newPassword: "asdasd123",
      confirmPassword: "asdasd123",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
    // expect(res.body).toHaveProperty("post");
  });
});

describe("PATCH Update Password", () => {
  it("should update password failed", async () => {
    const res = await request(app).patch("/users/change-password").send({
      email: "admin@admin.com",
      password: "asdasd123s",
      newPassword: "asdasd123",
      confirmPassword: "asdasd123",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.result.error).toEqual("email or password tidak cocok");
    expect(res.body.message).toEqual("failed");
    expect(res.body).toHaveProperty("message");
    // expect(res.body).toHaveProperty("post");
  });
});

describe("PATCH Update Password", () => {
  it("should update password failed", async () => {
    const res = await request(app).patch("/users/change-password").send({
      email: "admin@admin.com",
      password: "asdasd123",
      newPassword: "asdasd123",
      confirmPassword: "asdasd123x",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.result.error).toEqual(
      "newPassword and confirmPassword tidak cocok"
    );
    expect(res.body.message).toEqual("failed");
    expect(res.body).toHaveProperty("message");
    // expect(res.body).toHaveProperty("post");
  });
});

describe("PATCH Update Password", () => {
  it("should update password failed", async () => {
    const res = await request(app).patch("/users/change-password").send({
      email: "admin@admin.com",
      password: "asdasd123",
      confirmPassword: "asdasd123"
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.result.error).toEqual(
      "Please enter newPassword"
    );
    expect(res.body.message).toEqual("failed");
    expect(res.body).toHaveProperty("message");
    // expect(res.body).toHaveProperty("post");
  });
});

describe("PATCH Update Password", () => {
  it("should update password failed", async () => {
    const res = await request(app).patch("/users/change-password").send({
      email: "admin@admin.com",
      password: "asdasd123",
      newPassword: "asdasd123"
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.result.error).toEqual(
      "Please enter confirmPassword"
    );
    expect(res.body.message).toEqual("failed");
    expect(res.body).toHaveProperty("message");
    // expect(res.body).toHaveProperty("post");
  });
});

// ------------------------------------------------------------------------------------------------------

describe("PATCH Find all Product", () => {
  it("should success find all product", async () => {
    const res = await request(app).get("/products?page=1&limit=10&sorting=desc").send();
    expect(res.statusCode).toEqual(200);
    // expect(res.body.result.error).toEqual(
    //   "Please enter confirmPassword"
    // );
    expect(res.body.message).toEqual("success");
    expect(res.body).toHaveProperty("message");
    // expect(res.body).toHaveProperty("post");
  });
});

describe("PATCH Find all Product", () => {
  it("should failed find all product", async () => {
    const res = await request(app).get("/products?page=1&limit=10").send();
    expect(res.statusCode).toEqual(400);
    // expect(res.body.result.error).toEqual(
    //   "Please enter confirmPassword"
    // );
    expect(res.body.message).toEqual("failed");
    expect(res.body.result.error).toEqual("Please enter query sorting");
    expect(res.body).toHaveProperty("message");
    // expect(res.body).toHaveProperty("post");
  });
});
