const EventAttendCtrl = {};
const EventAttend =  require('../models/eventAttend');

EventAttendCtrl.getAttend = async (req,res ) => {
   const eventAttend = await EventAttend.find()
    res.json(eventAttend); 
};
EventAttendCtrl.createEventAttend = async (req,res) => {
    const eventAttend = new EventAttend(req.body);
    await eventAttend.save();
    res.json(eventAttend);
};
EventAttendCtrl.getEventAttend = async (req,res) =>  {
    const eventAttend = await EventAttend.findById(req.params.id);
    res.json(eventAttend);
};

EventAttendCtrl.putEventAttend = async (req,res) =>  {
    const {id} = req.params;
    const eventAttend = {
        _id: req.body._id,
        UserID: req.body.UserID,
        AttendID: req.body.AttendID,
        willYouAttend: req.body.willYouAttend,
        
    }
   await EventAttend.findByIdAndUpdate(id,{$set:eventAttend},{new:true});
    res.json({status: 'evento actualizado'})
};
EventAttendCtrl.deleteEventAttend = async (req,res) => { 
   await EventAttend.findByIdAndRemove(req.params.id);
    res.json({status: 'Asistencia eliminada'});
};
 
module.exports = EventAttendCtrl