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
    const link = await Links.create({
        long_url,
        short_url
    });
    res.json(link);
});


router.get('/:short_url', async (req, res) => {
    const short_url = req.params.short_url;
    const link = await Links.findOne({
        where: {
            short_url
        }
    });
    // if (link) {
    //     res.redirect(link.long_url);
    // }
    res.json(link);
});

module.exports = router;