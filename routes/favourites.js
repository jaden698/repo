var express = require('express');
var router = express.Router();
var Favorite = require('../models/favorite');

/*router.route('/add').post((req,res,next)=>{
    Favorite.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})*/

router.post('/add',  function(req,res,next){
    var favorite = new Favorite({
      id: req.body.id,
      title:req.body.title,
      vote_average:req.body.vote_average




    });
  
    let promise = favorite.save();
  
    promise.then(function(doc){
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error registering favorite.'})
    })
  })


router.get('/ret',function(req,res,next){

     let promise=Favorite.find();

     promise.then(function(doc){
        return res.status(201).json(doc);
      })
    
     /* promise.catch(function(err){
        return res.status(501).json({message: 'Error in retreving favorites.'})
      })*/

    
    /*Favorite.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            return json(data)
        }
    })*/
})

module.exports = router;