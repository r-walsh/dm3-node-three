angular.module( `nodeThree` )
.factory( `gameService`, function( $http, url ) {
	return {
		getGames() {
			return $http.get( `/api/video-games` );
		},

		favoriteGame( game ) {
			return $http.post( `/api/video-games/favorite`, game );
			// return $http({
			// 	method: `POST`,
			// 	data: game,
			//  url: `/api/video-games/favorite`
			// } );
		},

		getFavorites() {
			return $http.get( `/api/video-games/favorite` );
		}
	}
} );