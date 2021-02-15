const EventsCtrl = {};
const Events =  require('../models/events');

EventsCtrl.getEvents = async (req,res ) => {
   const events = await Events.find()
    res.json(events); 
};
EventsCtrl.createEvents = async (req,res) => {
    const event = new Events(req.body);

    if (req.file) {
        const path = req.file.path;
        event.imagen = '/assets/' + req.file.filename;
    }
    await event.save();
};
EventsCtrl.getEvent = async (req,res) =>  {
    const event = await Events.findById(req.params.id);
    res.json(event);
};

EventsCtrl.putEvent = async (req,res) =>  {
    const {id} = req.params;
    const event = {
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        imagen: req.body.imagen,
        attendances: req.body.attendances,
        willYouAttend: req.body.attendances,
        location: req.body.location

    }
   await Events.findByIdAndUpdate(id,{$set:event},{new:true});
    res.json({status: 'evento actualizado'})
};
EventsCtrl.deleteEvent = async (req,res) => { 
   await Events.findByIdAndRemove(req.params.id);
    res.json({status: 'evento eliminado'});
};
module.exports = EventsCtrl