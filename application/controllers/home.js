var View = App.View;

Class('Home_Controller', {
	isa: App.Controller,
  	methods: {
		index: function(Response, Request) {
			var content = View.render('public/index');
			Response.render('layouts/public', { title: 'GotchaNinjas', content: content });
		},
		erro404: function(Response, Request) {
			Response.render('public/404');	
		},
		_404: function(Response, Request) {
			var content = View.render('public/404');
			Response.render('layouts/public', { title: 'Error 404 - Page not found', content: content });
		},
		_500: function(Response, Request) {
			var content = View.render('public/500');
			Response.render('layouts/public', { title: 'Error 500 - Internal Server Error', content: content });
		}
	}
});

module.exports = new Home_Controller;
