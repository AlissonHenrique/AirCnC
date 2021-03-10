const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({ error: 'User exist' });
    }
    const user = await User.create({ email });

    return res.json(user);
  },
};
