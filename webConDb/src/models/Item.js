"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ItemSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: String,
});
exports.default = mongoose_1.default.model('Item', ItemSchema);
