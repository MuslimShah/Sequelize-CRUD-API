module.exports = (sequelize, DataTypes) => {
    // const sequelize = require('../database/index');???

    const Contact = sequelize.define('contact', {
        // Model attributes are defined here
        permanentAddress: {
            type: DataTypes.STRING,
            allowNull: false,


        },
        currentAddress: {
            type: DataTypes.STRING,
            // defaultValue: "khan"
            // allowNull defaults to true
        }
    }, {

    });
    return Contact;
}