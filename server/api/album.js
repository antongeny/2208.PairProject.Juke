const express = require("express");
const router = new express.Router();
const { Album, Artist, Song } = require("../db");

//localhost:8080/api/albums
router.get("/", async (req, res, next) => {
	const albums = await Album.findAll({
		include: [Artist],
	});
	res.send(albums);
});

router.get("/:albumId", async (req, res, next) => {
	const urlId = +req.params.albumId;
	const albumToFind = await Album.findByPk(urlId, {
		include: [Artist, Song],
	});
	res.send(albumToFind);
});

module.exports = router;
