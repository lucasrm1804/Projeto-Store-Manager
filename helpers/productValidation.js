const validNameInput = (name) => {
  if (!name || name.length < 1) {
    return { status: 400, msg: '"name" is required' };
  }
};

const validNameFormat = (name) => {
  if (name.length < 5) {
    return { status: 422, msg: '"name" length must be at least 5 characters long' };
  }
};

const validName = (name) => 
  validNameInput(name)
  || validNameFormat(name);

const validQtyInput = (qty) => {
  if (qty === undefined) {
    return { status: 400, msg: '"quantity" is required' };
  }
};

const validQtyFormat = (qty) => { 
  if ((!Number.isInteger(qty)) || (qty < 1)) {
    return { status: 422, msg: '"quantity" must be greater than or equal to 1' };
  }
};

const validQty = (qty) => 
  validQtyInput(qty)
  || validQtyFormat(qty);

const validCreateInput = (body) =>
  validName(body.name)
  || validQty(body.quantity);

module.exports = validCreateInput;