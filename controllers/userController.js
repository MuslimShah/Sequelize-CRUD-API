const User = require('../database/index').User;
//GET ALL USERS 
module.exports.getUsers = async(req, res, next) => {
        try {
            //gets all records
            const users = await User.findAll();
            if (!users)
            //incase there are no users in db
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
            //finds and gets single record with matching id
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
    //get data from request object
    const user = req.body;
    try {
        //if data is in bulk 
        if (user.length > 1) {
            await User.bulkCreate(user);
            res.json({ msg: "user added to db" })
        } else {
            //if user is single
            await User.create(user);
            res.json({ msg: "user added to db" })
        }
    } catch (err) {
        res.json({ msg: "error while adding user" })
    }

}

// ============= DELETING USER =====================
module.exports.deleteUser = async(req, res, next) => {
        const id = req.params.id;

        try {
            //finds and gets single record with matching id

            const delUser = await User.destroy({
                where: {
                    id: id
                }
            });
            if (delUser === 0) {
                res.json({ msg: `user with id :${id} not found` })
            } else {
                res.json({ msg: `user with id :${id} deleted` })
            }
        } catch (err) {
            console.log(`error occured deleting user :${err}`);
        }
    }
    //================ update user ======================
module.exports.updateUser = async(req, res, next) => {
    const userid = req.params.id;
    const data = req.body;
    try {
        const updated = await User.update(data, {
            where: {
                id: userid
            }
        });
        res.json({ msg: `user updated` })


    } catch (err) {
        console.log(`error occured deleting user :${err}`);
    }
}