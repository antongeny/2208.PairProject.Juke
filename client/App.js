import React from "react";
import AllAlbums from "./AllAlbums.jsx"; //webpack version
import Sidebar from "./Sidebar.jsx";
import Player from "./Player.jsx";

const dummyData = [
	{
		id: 1,
		name: "No Dummy",
		artworkUrl: "default-album.jpg",
		artistId: 1,
		artist: {
			id: 1,
			name: "The Crash Test Dummies",
		},
	},
	{
		id: 2,
		name: "I React to State",
		artworkUrl: "default-album.jpg",
		artistId: 1,
		artist: {
			id: 1,
			name: "The Crash Test Dummies",
		},
	},
];

const App = () => {
	return (
		<div id="app">
			<div id="main" className="row container">
				<Sidebar />

				<AllAlbums dummyData={dummyData} />
				<Player />
			</div>
		</div>
	);
};

export default App;
