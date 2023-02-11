const User = require('../database/index').User;

module.exports.getUsers = async(req, res, next) => {
    const users = await User.findAll();
    res.json(users);
}

module.exports.postUser = async(req, res) => {

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName

    };
    try {
        await User.create(user);
        res.json({ msg: "user added to db" })
    } catch (err) {
        res.json({ msg: "error while adding user" })
    }

}