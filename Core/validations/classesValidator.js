const { body,param } = require('express-validator');

module.exports.addClass = [
    body('id').optional().isInt().withMessage('Invalid ID'),
    body('name').isString().withMessage('Wrong Name'),
    //body('supervisor').optional().isMongoId().withMessage('Wrong supervisor ID'),
    //body('children').isArray().withMessage('Wrong children _id format'),
    //body('children.*').isInt().withMessage('Wrong children _id format')
];

module.exports.updateClass = [
    body('id').optional().isInt().withMessage('Invalid ID'),
    body('name').optional().isString().withMessage('Wrong Name'),
    //body('supervisor').optional().isMongoId().withMessage('Wrong supervisor ID'),
    //body('children').optional().isArray().withMessage('Wrong children _id format'),
    //body('children.*').optional().isInt().withMessage('Wrong children _id format')
];
module.exports.deleteClass = [
    //body('id').isInt().withMessage('Invalid ID')
];
module.exports.getClass = [
   // param('id').isInt().withMessage('Invalid ID')
];
module.exports.getChildren = [
    param('id').isInt().withMessage('Invalid ID')
];
module.exports.getTeacher = [
    param('id').isInt().withMessage('Invalid ID')
];








// id
// name
// supervisor
// children