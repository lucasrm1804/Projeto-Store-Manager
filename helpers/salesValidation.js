const validIdInput = (productId) => {
  if (!productId) {
    return { status: 400, msg: '"productId" is required' };
  }
};

const validQtyInput = (qty) => {
  if (!qty) {
    return { status: 400, msg: '"quantity" is required' };
  }
};

const validQtyFormat = (qty) => {
  if ((!Number.isInteger(qty)) || qty < 1) {
    return { status: 422, msg: '"quantity" must be greater than or equal to 1' };
  }
};

const validCreateInput = ([body]) =>
  validIdInput(body.productId)
  || validQtyInput(body.quantity)
  || validQtyFormat(body.quantity);

module.exports = validCreateInput;