const productsValidator = require('../helpers/productValidation');

const productMiddle = (req, res, next) => {
    const check = productsValidator.validCreateInput(req.body);
    if (check) return res.status(check.status).send({ message: check.msg });

    next();
};

module.exports = productMiddle;