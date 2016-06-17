const videoGames = [
	{
		title: `Call of Duty`,
		rating: `M`
	},
	{
		title: `Starcraft`,
		rating: `T`
	},
	{
		title: `Mortal Kombat`,
		rating: `M`
	}
]

module.exports = {
	getGames( req, res, next ) {
		return res.status( 200 ).json( videoGames );
	},
	favoriteGame( req, res, next ) {
		if ( !req.session.favoriteGames ) {
			req.session.favoriteGames = [ req.body ];
		} else {
			req.session.favoriteGames.push( req.body );
		}
		console.log( req.session );

		return res.status( 200 ).json( req.session.favoriteGames );
	},

	getFavorites( req, res, next ) {
		return res.status( 200 ).json( req.session.favoriteGames || [] );
	}
}