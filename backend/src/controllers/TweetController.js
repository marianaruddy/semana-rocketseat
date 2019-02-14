const Tweet = require('../models/Tweet');

module.exports = {
  async index(req, res) {
    console.log('GET /tweets');
    const tweets = await Tweet.find({}).sort('-createdAt');
    return res.json(tweets);
  },

  async store(req, res) {
    console.log('POST /tweets');
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.json(tweet);
  }
};