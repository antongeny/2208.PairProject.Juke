import React, { useState } from "react";

const AllAlbums = ({ dummyData }) => {
	const [albums, setAlbums] = useState([]);

	const grabAlbums = async () => {
		const response = await axios.get("https://reqres.in/api/users?page=2");
		setUsers(response.data.data);
	};

	return (
		<div className="container">
			<div id="albums" className="row wrap">
				<div className="album">
					<a>
						<img src="default-album.jpg" />
						<p>{dummyData[0].name}</p>
						<small>{dummyData[0].artist.name}</small>
					</a>
				</div>
				<div className="album">
					<a>
						<img src="default-album.jpg" />
						<p>{dummyData[1].name}</p>
						<small>{dummyData[1].artist.name}</small>
					</a>
				</div>
			</div>
		</div>
	);
};

export default AllAlbums;
