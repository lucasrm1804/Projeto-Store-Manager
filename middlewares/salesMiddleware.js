const salesValidator = require('../helpers/salesValidation');

const productMiddle = (req, res, next) => {
    const check = salesValidator(req.body);
    if (check) return res.status(check.status).send({ message: check.msg });

    next();
};

module.exports = productMiddle;