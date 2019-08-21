const List = require('../models/list');

module.exports.create = function(req, res){
    List.create({
        task:req.body.task,
        category: req.body.category,
        duedate:req.body.date
    },function(err,list){
        if(err){
            console.log("cant add list"+req.body);
            return;
        }
        console.log(list);
        return res.redirect('back');
    });
    
};

module.exports.list = function(req ,res){
    List.find({},function(err,list){
        if(list){
            
            return res.render('home',{title:"List Content",list:list});
        }

    })
};
module.exports.delete = function(req ,res){
    let id = req.query.id;
    List.findByIdAndDelete(id,function(err){
        if(err){
            console.log('There is problem while deleting this List Items');
        }
        return res.redirect('back');
    })
};