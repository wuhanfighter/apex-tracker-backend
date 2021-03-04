// module import
const fetch = require('node-fetch')

// user details by gamer tag
exports.detail = async (req, res) => { 
    try { 
        const headers = {'TRN-Api-Key': process.env.TRACKER_API_KEY}
        const {platform, gamertag} = req.params
        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, {headers})
        const data = await response.json();
        
        // if (data.errors && data.erros.length > 0) {
        //     res.status(404).json({message: `${gamertag} doesn't exist`})
        // } else {
        //     res.json(data)
        // }

        // improved condition check by using ternary
        data.errors && data.errors.length > 0 ? res.status(404).json({message: `${gamertag} doesn't exist`}) : res.json(data);
    }
    catch (error) { 
        res.status(500).json({message: 'Internal server error'})
    }
}