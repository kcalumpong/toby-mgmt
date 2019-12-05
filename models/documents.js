module.exports = (sequelize, DataTypes) => {

    const Document = sequelize.define("Document", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     employeeFile(){
            //         if(username){
            //             return Document.name
            //         }
            //         return ("Username Does Not Match");
            //     }
            // }
        },
        src: {
            type: Datatypes.TEXT,
            allowNull: true,
            isUrl: true
        },
    });

    // Document.associate = (models) =>{
    //     Document.belongsTo(models.Employee, {
    //         through: "EmployeeDocs", foreignKey: "DocumentId"
    //     });
    // }
    Document.associate = (models) => {
        Document.belongsTo(models.Employee, {
            // allowNull: false
            foreignKey: "DocumentId"
        });
    };

    return Document;
};