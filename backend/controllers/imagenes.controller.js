const Imagenesctrl = {};
const Imagenes =  require('../models/imagenes');

Imagenesctrl.getImagenes = async (req,res ) => {
   const imagenes = await Imagenes.find()
    res.json(imagenes); 
};
Imagenesctrl.createImagenes = async (req,res) => {
    const imagenes = new Imagenes(req.body);
    await imagenes.save();

};

Imagenesctrl.deleteImagenes = async (req,res) => { 
    await Imagenes.findByIdAndRemove(req.params.id);
     res.json({status: 'imagen eliminado'});
 };
  

module.exports = Imagenesctrl