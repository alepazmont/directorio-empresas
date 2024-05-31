const Empresas = require("./empresas.model");


// FUNCIONES CRUD

const create = async (req, res, next) => {
  try {
    const empresa = await Empresas.create(req.body);
    res.json({
      status: 201,
      msg: "creado",
      data: empresa,
    });
  } catch (error) {
    next(error);
  }
};

const createMany = async (req, res, next) => {
  try {
    let empresasData = req.body;

    // Verificar si req.body es un array
    if (!Array.isArray(empresasData)) {
      empresasData = [empresasData]; // Convertir a array si no lo es
    }

    // Crear un array para almacenar los resultados
    const empresasCreated = [];

    // Iterar sobre cada elemento en empresasData
    for (let empresaData of empresasData) {
      const empresa = await Empresas.create(empresaData);
      empresasCreated.push(empresa);
    }

    // Respondemos con el array de empresas creadas
    res.status(201).json({
      status: 201,
      msg: "Empresas creadas exitosamente",
      data: empresasCreated,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const empresas = await Empresas.findById(id);
    res.json({
      status: 200,
      msg: "ok",
      data: empresas,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const empresas = await Empresas.find();
    res.json({
      status: 200,
      msg: "ok",
      data: empresas,
    });
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const empresa = await Empresas.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json({
      status: 200,
      msg: "ok",
      data: empresa,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const empresa = await Empresas.findByIdAndDelete(id);
    res.json({
      status: 200,
      msg: "ok",
      data: empresa,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, createMany, getOne, getAll, updateOne, deleteOne };