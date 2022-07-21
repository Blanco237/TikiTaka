module.exports = (sequelize, DataTypes) => {
    const Links = sequelize.define('Links', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        short_url : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true        // unique short_url
        },
        long_url : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Links',
        timestamps: true,
        underscored: true,
        paranoid: true,
    });

    return Links;
}