const express = require('express');
const router = express.Router();


const { Links } = require('../models');

const generateShortUrl = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

router.post('/addLink', async (req, res) => {
    const long_url = req.body.long_url;
    const short_url = generateShortUrl(5).trim();
    try{
        const link = await Links.create({
            long_url,
            short_url
        });
        res.json(link);
    }catch(e){
        res.json(e.message);
    }
});


router.get('/:short_url', async (req, res) => {
    const short_url = req.params.short_url;
    try {
        const link = await Links.findOne({
            where: {
                short_url
            }
        });
        if (link) {
            res.json(link);
            return;
        }
    } catch (e) {
        const message = { error: "Link not found" };
        res.json(message);
    }

});

module.exports = router;