const express = require('express')
const router = express.Router()
const {handleGenerateNewShortURL, redirectURL, handleGetAnalytics} = require('../controllers/url')


router.post('/' , handleGenerateNewShortURL)
router.get('/:shortId' , redirectURL)
router.get('/analytics/:shortId' , handleGetAnalytics)

module.exports = router