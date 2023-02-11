module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            primarykey: true

        },
        lastName: {
            type: DataTypes.STRING,
            // defaultValue: "khan"
            // allowNull defaults to true
        }
    }, {
        tablename: 'users',
        // timestamps: false
    });
    return User;
}