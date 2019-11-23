module.exports = (sequelize, Datatypes) =>{

    const Document = sequelize.define("Document", {

        name: {
            type: Datatypes.STRING,
            allowNull: true,
            // validate: {
            //     employeeFile(){
            //         if(username){
            //             return Document.name
            //         }
            //         return ("Username Does Not Match");
            //     }
            // }
        }
    });

    Document.associate = (models) =>{
        Document.belongsTo(models.Employee, {
            through: "EmployeeDocs", foreignKey: "DocumentId"
        });
    }
    return Document;
};