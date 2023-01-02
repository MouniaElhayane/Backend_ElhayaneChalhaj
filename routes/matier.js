let Matier = require('../model/matier');


function getMatier(req, res) {
   
    Matier.find( {},
  
   (err, assignments) => {
     if (err) {
       res.send(err);
     }
     res.send(assignments);
   }
 );
}



module.exports = { getMatier };
