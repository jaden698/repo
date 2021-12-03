var mongoose = require('mongoose');

var FavoriteSchema = new mongoose.Schema({
    id: {type:Number},
    title: {type:String},
    //poster_path: {type:String},
    vote_average: {type:Number}
});

module.exports = mongoose.model('Favorite', FavoriteSchema);