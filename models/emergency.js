module.exports = (sequelize, Datatypes) => {
    let Emergency = sequelize.define("Emergency", {
        contactName: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },    
        contactPhone: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10]
            }
        }
    });
    Emergency.associate = (models) => {
        Emergency.belongsToMany(models.Employee, { through: "EmergencyContacts" });
    };
    return Emergency;
};