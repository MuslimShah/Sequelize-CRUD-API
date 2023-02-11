const User = require('../database/index').User;


//GET ALL USERS 
module.exports.getUsers = async(req, res, next) => {
    try {
        const users = await User.findAll();
        if (!users)
            return res.json({ error: `no users found` })

        res.json({ msg: 'users found', users });


    } catch (err) {
        console.log(`error fetchig all users `);
    }

}

//GET SINGLE USER
module.exports.getUser = async(req, res, next) => {
    const id = req.params.id;

    try {
        const user = await User.findByPk(id);
        if (!user)
            return res.json({ error: `user with id: ${id} not found` })

        res.json({ msg: 'user found', user });

    } catch (err) {
        console.log(`error occured getting single user :${err}`);
    }
}

// POST USER DATA 
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