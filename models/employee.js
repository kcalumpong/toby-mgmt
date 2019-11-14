module.exports = (sequelize, DataTypes) =>{
    const Employee = sequelize.define("Employee", {
    // "PERSONAL"
    //GENDER
        genderInput: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                genderCheck(gender){
                    if(gender = "MALE" || "FEMALE" || "OTHER"){
                        return gender
                    }
                    return console.error(error);
                    
                }
            }
        },
    //USERNAME
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUnique: true,
                is: /^[a-zA-Z0-9]+$/i
            }
        },
    //NAME
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
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
        month: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-zA-Z]+$/i,
                len: [3, 4]
            }
        },
        day: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                is: /^[0-9]+$/i,
                len: [2]
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                is: /^[0-9]+$/i,
                len: [4]
            }
        },
    //EMAIL
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140],
                isEmail: true
            }
        },
    //PHONE
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10]
            }  
        },
    //ADDRESS
        streetAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-zA-Z0-9 ]+$/i
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
                len: [2],
                is: /^[A-Z]+$/i
            }
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5],
                isNumeric: true
            }
        },
    //SS#
        socialSecurity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [9],
                isNumeric: true
            }
        },
    //EMERGENCY CONTACTS
    emergencyContactNameOne: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emergencyContactPhoneOne: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emergencyContactNameTwo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emergencyContactPhoneTwo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

    // "JOB"
    employeeNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: "Document",
            //     key: "id"
            // },
            validate: {
                isNumeric: true,
                isUnique: true
            }
        },
    //EMP #
        status: {
            type: DataTypes.STRING,
            default: "Active",
            validate: {
                equals: "Active"
            }
        },
        hireDate: {
            type: DataTypes.DATEONLY,
            allowNull:false,
            validate: {
                isDate: true
            }
        },
        employmentDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reportsTo: {
            type: DataTypes.STRING,
            allowNull: false, // SET RELATIONSHIP FOR THIS 
            // references: {
            //     model: "User",
            //     key: "id"
            // }
        },
        compensationDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        hourlyPayRate: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isDecimal: true
            }
        },
        salaryPayRate: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true
            }
        },
        payType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paySchedule: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                frequency() {
                    if(hourlyRate !== null && hourlyRate < 0){
                        payCycle.type = "Bi-weekly"
                    } else if (salary !== null && salary < 0){
                        payCycle.type = "Salary"
                    } else {
                        return null
                    }

                }
            }
        },
        changeReason: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 150]
            }
        },
    // "ASSETS"
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 150]
            }
        },
        assets: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateAssigned: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        dateReturned: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            validate: {
                isDate: true
            }
        }
        
    });
    Employee.associate = (models) => {
        Employee.belongsToMany(models.Document, {
          through: "EmployeeDocs", foreignKey: "EmployeeId"
        });
    };
    return Employee;
};