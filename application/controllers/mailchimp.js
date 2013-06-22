var View = App.View;

Class('MailChimp_Controller', {
	isa: App.Controller,
  	methods: {
		verify: function(Response, Request) {
			var content = View.render('public/mailchimp/verify');
			Response.render('layouts/public', { title: 'GotchaNinjas', content: content });
		},
		thanks: function(Response, Request) {
			var content = View.render('public/mailchimp/thanks');
			Response.render('layouts/public', { title: 'GotchaNinjas', content: content });
		},
		unsubscribe: function(Response, Request) {
			var content = View.render('public/mailchimp/unsubscribe');
			Response.render('layouts/public', { title: 'GotchaNinjas', content: content });
		}
	}
});

module.exports = new MailChimp_Controller;
