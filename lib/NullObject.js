function NullObject () {}

NullObject.prototype = Object.create(null)

module.exports.NullObject = NullObject
