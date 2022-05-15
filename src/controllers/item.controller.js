const mongoose = require("mongoose");
const Item = require('../models/item.model');


const createItem = async (req,res) => {
    if(req.body){
        const item = new Item(req.body);
        await item.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
       // console.log(req.body.selectedCategories);
    }
}

const getAllItems = async (req,res) => {
    await Item.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        })
}

// const getAllOrders= async (req,res) => {
//     await Room.find({}).populate('categories','name description')
//         .then(data => {
//             res.status(200).send({ data: data });
//         })
//         .catch(error => {
//             res.status(500).send({ error: error.message });
//             console.log("kasuni");
//         })
// }





module.exports = {
    createItem,
    getAllItems,

}