module.exports = {
	// Default routing
	route: {
		directory: '',
		controller: 'home',
		action: 'index',
		arguments: []
	},
	routes: [
		['get api/:resource/*', '[api]:resource/:1'],
		['home/*', 'home/:1'],
		['*', 'home/:1']
  	],

	// 404 requests will be redirected to this controller and action if they exists
	controller_404: 'home',
	action_404: '_404',
	
	// Allowed characters in uri
	// If uri not match them then default routing is used
	allowed_characters: '-_:~%.\/a-zа-я0-9'
}

// module.exports = {
// 	route: {
//     directory: '',
//     controller: 'home',
//     action: 'index',
//     arguments: []
//   },

// 	routes: [
// 	  ['(login|signup)', '#auth/auth/:1'],
// 	  ['account/actions/*', '#auth/actions/:1'],
// 	  ['todo/actions/*', '[todo/actions]:1'],
//     ['home/*', 'home/:1'],
//     ['*', 'home/:1']
//   ],
