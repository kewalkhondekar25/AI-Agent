"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.openai = void 0;
var openai_1 = require("openai");
var globalForOpenAI = global;
var openai = (_a = globalForOpenAI.openai) !== null && _a !== void 0 ? _a : new openai_1.OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
exports.openai = openai;
if (!globalForOpenAI.openai) {
    globalForOpenAI.openai = openai;
}
