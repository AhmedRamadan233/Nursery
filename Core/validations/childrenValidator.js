const { body,param } = require('express-validator');

module.exports.addChild = [
    body('id').optional().isInt().withMessage('Invalid ID'),
    body('fullName').isString().withMessage('Wrong Name'),
    body('age').isInt().withMessage('Wrong Age'),
    //body('level').isIn(['PreKG','KG1','KG2']).withMessage('Wrong Level'),
    //body('address').isObject().withMessage('Invalid Address'),
    //body('address.city').isString().withMessage('Invalid City Name'),
    //body('address.street').isString().withMessage('Invalid street Name'),
    //body('address.building').isInt().withMessage('Invalid building number'),
];

module.exports.updateChild = [
    body('id').optional().isInt().withMessage('Invalid ID'),
    body('fullName').optional().isString().withMessage('Wrong Name'),
    body('age').optional().isInt().withMessage('Wrong Age'),
    //body('level').optional().isIn(['PreKG','KG1','KG2']).withMessage('Wrong Level'),
    //body('address').optional().isObject().withMessage('Invalid Address'),
    //body('address.city').optional().isString().withMessage('Invalid City Name'),
    //body('address.street').optional().isString().withMessage('Invalid street Name'),
    //body('address.building').optional().isInt().withMessage('Invalid building number'),
];

module.exports.deleteChild = [
    //body('id').isInt().withMessage('Invalid ID')
];
module.exports.getChild = [
    //param('id').isInt().withMessage('Invalid ID')
];
