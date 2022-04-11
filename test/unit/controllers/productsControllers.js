const chai = require("chai");
const sinon = require("sinon");
const connection = require("../../../models/mysql-connection");
const { afterEach } = require("mocha");
const productsControllers = require("../../../controllers/productsControllers");
const expect = chai.expect;

afterEach(() => {
  sinon.restore();
});

const res = {};
const req = {};

describe("Testa camada controllers de Product para rota /products", () => {
  it("testa função getAll ", async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(connection, "execute")
      .resolves([[{ id: 77, name: "Jurema", quantity: 13 }]]);
    await productsControllers.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith([{ id: 77, name: "Jurema", quantity: 13 }]));
  });
});

describe("Testa camada controllers de Product para rota /products/:id", () => {
  it("testa função getById", async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = { id: 77 };
    sinon
      .stub(connection, "execute")
      .resolves([[{ id: 77, name: "Jurema", quantity: 13 }]]);
    await productsControllers.getById(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith({ id: 77, name: "Jurema", quantity: 13 }));
  });
  it("testa se um id inexistente retorna 'not found'", async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = { id: 77 };
    sinon.stub(connection, "execute").resolves([[]]);
    await productsControllers.getById(req, res);
    expect(res.status.calledWith(404)).to.be.equal(true);
    expect(res.json.calledWith({ message: "Product not found" }));
  });
});