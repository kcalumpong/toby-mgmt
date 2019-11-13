module.exports = (sequelize, DataTypes) =>{
    let Employee = sequelize.define("Employee", {
    //EMP #
        empStatus: {
            type: DataTypes.STRING,
            validate: {
                equals: "active"
            }
        },
    //GENDER
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
    //NAME
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },
    //BIRTHDAY
        birthdate: {
            type:DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
    //EMAIL
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 140],
              isEmail: true
            }
        },
    //ADDRESS
        streetNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 6]
            }
        },
        streetName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40],
                isAlphanumeric: true,
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 140],
              is: /^[a-zA-Z ]+$/i
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [2]
            }
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [5],
              isNumeric: true
            }
        },
    //SS#
        sSI: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [9],
                isNumeric: true
            }
        }        
    });
    Employee.associate = (models) => {
        Employee.belongsToMany(models.Emergency, {
          through: "EmergencyContacts"
        });
    };
    return Employee;
};