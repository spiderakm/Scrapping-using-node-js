const e = require('express');
const express = require('express')
const routes = express.Router();

const main = require('../scrapfun/scrape')

routes.post('/indeed',async(req,res) => {
    try {
        const {skills} = req.body;
        let scrap = await main(skills)
        res.status(200).json({
            status:'ok',
            list : scrap && typeof scrap === 'object' && scrap.list ? scrap.list : {}
        })


    } catch (error) {
        return res.status(500).send(error)
        
    }
})



module.exports = routes