const router = require("express").Router();

const Message = require("../models/Message");

router.post("/", async (req, res) => {

    try {

        const message = await Message.create({
            name: req.body.name,
            message: req.body.message
        });

        res.status(201).json(message);

    } catch(err) {

        res.status(500).json(err);

    }

});

router.get("/", async(req,res)=>{

    const messages = await Message.find()
    .sort({createdAt:-1});

    res.json(messages);

});

module.exports = router;
