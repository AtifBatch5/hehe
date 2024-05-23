"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KBServices = void 0;
const KB_model_1 = require("./KB.model");
const createKBinDB = (KB) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield KB_model_1.KBModel.create(KB);
    return result;
});
const getAllKBsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield KB_model_1.KBModel.find();
    return result;
});
const getOneKBFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield KB_model_1.KBModel.findOne({ id });
    console.log(result);
    return result;
});
const getOneKBFromDBwith_id = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield KB_model_1.KBModel.findOne({ _id });
    console.log(result);
    return result;
});
const deleteOneKBFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield KB_model_1.KBModel.deleteOne({ id });
    return result;
});
const updateKBFromDB = (id, updatedKB) => __awaiter(void 0, void 0, void 0, function* () {
    const body = updatedKB;
    console.log("this is body: " + body);
    const result = yield KB_model_1.KBModel.findByIdAndUpdate(id, body, { new: true });
    console.log("this is result: " + result);
    return result;
});
const searchKBFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield KB_model_1.KBModel.find({
        name: { $regex: searchTerm, $options: 'i' },
    });
    return result;
});
exports.KBServices = {
    createKBinDB,
    getAllKBsFromDB,
    getOneKBFromDB,
    deleteOneKBFromDB,
    updateKBFromDB,
    searchKBFromDB,
    getOneKBFromDBwith_id,
};
