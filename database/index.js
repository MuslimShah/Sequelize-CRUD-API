const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('recap_node', 'root', 'Root@ali20405', {
    host: 'localhost',
    dialect: 'mysql'

});

//=============== testing connection ==============
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Contact = require('../models/contact')(sequelize, DataTypes)
db.User = require('../models/user')(sequelize, DataTypes)
db.sequelize.sync().then(() => {
    console.log('============= hurrrahhhhh ============');
}).catch(err => {});

module.exports = db;