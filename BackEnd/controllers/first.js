var Model = require('../models/first');

const create = async (req, res, next) => {
    return res.status(201).json({message: 'created.'});
};

const get = async (req, res, next) => {
  return res.status(201).json({message: 'created.'});
};

const getID = async (req, res, next) => {
  return res.status(201).json({message: 'created.'});
};


const update = async (req, res, next) => {
  return res.status(201).json({message: 'created.'});
};

const del = async (req, res, next) => {
  return res.status(201).json({message: 'created.'});
};


exports.create = create;
exports.get = get;
exports.getID = getID;
exports.update = update;
exports.del = del;
