const collection = require('../../collection')
const express = require('express')
const router = express.Router()
const uuid = require('uuid')
//get single collection
router.get('/:id',(req, res) => {
    const found = collection.some(item => item.id === parseInt(req.params.id));

    if(found){
         res.json(collection.filter(item => item.id===parseInt(req.params.id)))
        }
    else{
        res.status(400).json({msg: ` item doesn't exist`})
    }

})

// get all collections
  router.get('/', (req, res) => {
    res.json(collection);
  });

//add collection
router.post('/', (req,res) => {
 const newItem = {
  id: uuid.v4(),
  img : req.body.img,
  title : req.body.title,
 }
 
if(!newItem.img || !newItem.title){

  return res.status(400).json({msg: "please add an image or a title"})
}
collection.push(newItem)
res.json(collection)

})
//update an item

router.put('/:id',(req, res) => {
  const found = collection.some(item => item.id === parseInt(req.params.id));

  if(found){
      const updateItem = req.body;
      collection.forEach(item => {
        if(item.id === parseInt(req.params.id) ){
          item.img = updateItem.img ? updateItem.img : item.img
          item.title = updateItem.title ? updateItem.title : item.title

          res.json({msg: 'item updated', item})
        }
      })
      }
  else{
      res.status(400).json({msg: ` item doesn't exist`})
  }

})

//delete item
router.delete('/:id',(req, res) => {
  const found = collection.some(item => item.id === parseInt(req.params.id));

  if(found){
      

          res.json({msg: 'item deleted', items: collection.filter(item => item.id !== parseInt(req.params.id))})
        }
      
      
  else{
      res.status(400).json({msg: ` item doesn't exist`})
  }

})



  module.exports = router