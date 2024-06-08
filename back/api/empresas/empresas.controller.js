const Empresas = require("./empresas.model");

const create = async (req, res, next) => {
  try {
    const logo = req.files['logo'] ? req.files['logo'][0].path : null;
    const galeriaFotos = req.files['galeriaFotos'] ? req.files['galeriaFotos'].map(file => file.path) : [];

    const empresaData = {
      ...req.body,
      logo,
      galeriaFotos
    };

    const empresa = await Empresas.create(empresaData);
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

    if (!Array.isArray(empresasData)) {
      empresasData = [empresasData];
    }

    const empresasCreated = [];

    for (let empresaData of empresasData) {
      const logo = empresaData.logo ? empresaData.logo.path : null;
      const galeriaFotos = empresaData.galeriaFotos ? empresaData.galeriaFotos.map(file => file.path) : [];

      const newEmpresaData = {
        ...empresaData,
        logo,
        galeriaFotos
      };

      const empresa = await Empresas.create(newEmpresaData);
      empresasCreated.push(empresa);
    }

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

const approveEmpresa = async (req, res) => {
  const { empresaId } = req.params;
  console.log(req.params)

  try {
    const empresa = await Empresa.findById(empresaId);
    if (!empresa) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }

    empresa.aprobada = true;
    await empresa.save();

    res.json({ message: 'Empresa aprobada exitosamente', empresa });
  } catch (error) {
    console.error('Error al aprobar la empresa:', error);
    res.status(500).json({ message: 'Error al aprobar la empresa', error });
  }
};

module.exports = { create, createMany, getOne, getAll, updateOne, deleteOne, approveEmpresa };
