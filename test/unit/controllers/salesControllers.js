const chai = require("chai");
const sinon = require("sinon");
const connection = require("../../../models/mysql-connection");
const { afterEach } = require("mocha");
const salesControllers = require("../../../controllers/salesControllers");
const expect = chai.expect;

afterEach(() => {
  sinon.restore();
});

const res = {};
const req = {};

describe("Testa camada controllers de Sales para rota /Sales", () => {
    it("testa função getAll", async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(connection, "execute").resolves([
        [
          {
            saleId: 1,
            date: "2021-09-09 04:54:29",
            productId: 1,
            quantity: 1,
          },
        ],
      ]);
      await salesControllers.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(
        res.json.calledWith([
          {
            saleId: 1,
            date: "2021-09-09 04:54:29",
            productId: 1,
            quantity: 1,
          },
        ])
      );
    });
  });

describe("Testa camada controllers de Product para rota /products/:id", () => {
  it ("testa função getById", async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    req.params = { id: 77 };
    sinon
      .stub(connection, "execute")
      .resolves([[[
        {
          saleId: 1,
          date: '2021-09-09T04:54:29.000Z',
          productId: 1,
          quantity: 2
        }
      ]]]);
    await salesControllers.getById(req, res);
    expect(res.json.calledWith([
      {
        saleId: 1,
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2
      }
    ]));
  });
});
