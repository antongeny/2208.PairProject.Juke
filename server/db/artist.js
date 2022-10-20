const Sequelize = require("sequelize");
//const { SELECT } = require("sequelize/types/query-types");
const db = require("./db");

const Artist = db.define("artist", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Artist;
