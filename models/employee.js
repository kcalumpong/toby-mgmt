module.exports = (sequelize, DataTypes) =>{
    const Employee = sequelize.define("Employee", {
    // "PERSONAL"
    //GENDER
        genderInput: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     genderCheck(gender){
            //         if(gender = "Male" || "Female" || "Other"){
            //             return gender
            //         }
            //         return console.error(error);
                    
            //     }
            // }
        },
    //NAME
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 40]
            // }
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 40]
            // }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 40]
            // }
        },
    //BIRTHDAY
        month: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     is: /^[a-zA-Z]+$/i,
            //     len: [3, 4]
            // }
        },
        day: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isNumeric: true,
            //     is: /^[0-9]+$/i,
            //     len: [2]
            // }
        },
        year: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isNumeric: true,
            //     is: /^[0-9]+$/i,
            //     len: [4]
            // }
        },
    //EMAIL
        workEmail: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 140],
            //     isEmail: true
            // }
        },
        personalEmail: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 140],
            //     isEmail: true
            // }
        },
    //PHONE
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [12]
            // }  
        },
    //ADDRESS
        streetAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     is: /^[a-zA-Z0-9 ]+$/i
            // }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 140],
            //     is: /^[a-zA-Z ]+$/i
            // }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [2],
            //     is: /^[A-Z]+$/i
            // }
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [5],
            //     isNumeric: true
            // }
        },
        countryCode: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 5]
            // }
        },
    //SS#
        ssOne: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [3],
            //     isNumeric: true
            // }
        },
        ssTwo: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [2],
            //     isNumeric: true
            // }
        },
        ssThree: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [4],
            //     isNumeric: true
            // }
        },
    //EMERGENCY CONTACTS
    emergencyContactFirstNameOne: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 40]
            // }
        },
        emergencyContactLastNameOne: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 40]
            // }
        },
        emergencyContactPhoneOneCountry: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 5]
            // }
        },
        emergencyContactPhoneOne: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [12]
            // }
        },
        emergencyContactFirstNameTwo: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 40]
            // }
        },
        emergencyContactLastNameTwo: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 40]
            // }
        },
        emergencyContactPhoneTwoCountry: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 5]
            // }
        },
        emergencyContactPhoneTwo: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [12]
            // }
        },

    // "JOB"
    //EMP #
    employeeNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isNumeric: true,
            //     isUnique: true
            // }
        },
        status: {
            type: DataTypes.STRING,
            default: "Active",
            // validate: {
            //     equals: "Active"
            // }
        },
        hireDate: {
            type: DataTypes.DATEONLY,
            allowNull:true,
            // validate: {
            //     isDate: true
            // }
        },
        employmentDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            // validate: {
            //     isDate: true
            // }
        },
        department: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        reportsTo: {
            type: DataTypes.STRING,
            allowNull: true, // SET RELATIONSHIP FOR THIS 
        },
        compensationDate: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isDate: true,
            // }
        },
        hourlyPayRate: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isNumeric: true
            // }
        },
        salaryPayRate: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isNumeric: true
            // }
        },
        paySchedule: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        changeReason: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 150]
            // }
        },
    // "ASSETS"
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     len: [1, 150]
            // }
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateAssigned: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isDate: true
            // }
        },
        dateReturned: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isDate: true
            // }
        }
        
    });
    Employee.associate = (models) => {
        Employee.belongsToMany(models.Document, {
          through: "EmployeeDocs", foreignKey: "EmployeeId"
        });
    };
    return Employee;
};