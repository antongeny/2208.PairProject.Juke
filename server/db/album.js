const Sequelize = require("sequelize");
//const { SELECT } = require("sequelize/types/query-types");
const db = require("./db");

const Album = db.define("album", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	artworkUrl: {
		type: Sequelize.STRING,
		defaultValue: "default-album.jpg",
	},
});

module.exports = Album;
