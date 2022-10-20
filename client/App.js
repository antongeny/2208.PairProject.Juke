import React from "react";

const App = () => {
	return (
		<div id="app">
			<div id="main" className="row container">
				<div id="sidebar">
					<img src="juke.svg" id="logo" />
					<section>
						<h4>
							<a>ALBUMS</a>
						</h4>
					</section>
				</div>

				<div class="container">
					<div id="albums" class="row wrap">
						<div class="album">
							<a>
								<img src="default-album.jpg" />
								<p>ALBUM 1</p>
								<small>Artist Name</small>
							</a>
						</div>
						<div class="album">
							<a>
								<img src="default-album.jpg" />
								<p>ALBUM 2</p>
								<small>Artist Name</small>
							</a>
						</div>
					</div>
				</div>

				<div id="player-container">
					<div id="player-controls">
						<div class="row center">
							<i class="fa fa-step-backward"></i>
							<i class="fa fa-pause-circle"></i>
							<i class="fa fa-step-forward"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
