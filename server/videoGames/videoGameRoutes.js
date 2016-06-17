const videoGameCtrl = require( './videoGameCtrl' );

module.exports = app => {
	app.get( `/api/video-games`, videoGameCtrl.getGames );
	app.post( `/api/video-games/favorite`, videoGameCtrl.favoriteGame );
	app.get( `/api/video-games/favorite`, videoGameCtrl.getFavorites );
}