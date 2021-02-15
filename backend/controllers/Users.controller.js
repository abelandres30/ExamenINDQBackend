const Usersctrl = {};
const Users =  require('../models/users');

Usersctrl.getUsers = async (req,res ) => {
   const users = await Users.find()
    res.json(users); 
};
Usersctrl.createUsers = async (req,res) => {
    const user = new Users(req.body);
    await user.save();
};
Usersctrl.getUser = async (req,res) =>  {
    const user = await Users.findById(req.params.id);
    res.json(user);
};

Usersctrl.putUser = async (req,res) =>  {
    const {id} = req.params;
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender
    }
   await Users.findByIdAndUpdate(id,{$set:user},{new:true});
    res.json({status: 'usuario actualizado'})
};
Usersctrl.deleteUser = async (req,res) => { 
   await Users.findByIdAndRemove(req.params.id);
    res.json({status: 'user eliminado'});
};
 
module.exports = Usersctrl