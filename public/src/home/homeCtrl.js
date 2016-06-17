angular.module( `nodeThree` )
.controller( `homeCtrl`, function( $scope, gameService ) {

	$scope.games = [];
	$scope.favorites = [];

	$scope.getGames = () => {
		gameService.getGames()
			.then( ( games ) => {
				$scope.games = games.data;
			} );
	}
	$scope.getGames();

	$scope.saveToFavorites = game => {
		gameService.favoriteGame( game );
	}

	$scope.getFavorites = () => {
		gameService.getFavorites()
			.then( ( favorites ) => {
				$scope.favorites = favorites.data;
			} );
	}
	$scope.getFavorites();

} );