(function(){
    'use strict'

    var App = {
        Views: {}
    };

    App.Views.Nav = Backbone.View.extend({
        render: function(){
            this.$el.html( _.template(  '<ul role="nav" class="nav-items">'+
                                            '<li><a href="#/dashboard">Dashboard</a></li>'+
                                            '<li><a href="/#/processes">Processes</a></li>'+
                                            '<li><a href="/#/binaries">Binaries</a></li>'+
                                        '</ul>') );
            return this;
        }
    });

    App.Views.Index = Backbone.View.extend({
        events: {
            'click .js-login': 'login'
        },
        render: function(){
            this.$el.html( _.template(  '<h1>Enterprise Response</h1>'+
                                            '<div><button class="js-login">Login</button></div>'
                                        ) );
            return this;
        },
        login: function(){
            window.location.href = '#/dashboard';
        }
    });

    App.Views.Processes = Backbone.View.extend({
        render: function(){
            this.$el.html( _.template('<h1>Processes</h1>') );
            return this;
        }
    });

    App.Views.Binaries = Backbone.View.extend({
        render: function(){
            this.$el.html( _.template('<h1>Binaries</h1>') );
            return this;
        }
    });

    var Router = Backbone.Router.extend({
        
        routes: {
            '' : 'index',
            'processes' : 'processes',
            'binaries' : 'binaries',
            'dashboard' : 'dashboard'
        },

        index: function() {
            var indexView = new App.Views.Index();
            indexView.render();
            $('#main-view').html(indexView.el);
            $('#main-view').show();
        },
        
        processes: function() {
            var processesView = new App.Views.Processes();
            processesView.render();
            $('#main-view').html(processesView.el);
            $('#main-view').show();
        },

        binaries: function() {
            var binariesView = new App.Views.Binaries();
            binariesView.render();
            $('#main-view').html(binariesView.el);
            $('#main-view').show();
        },

        dashboard: function(){
            $('#main-view').empty();
            $('#main-view').hide();
        }

    });

    App.router = new Router();
    Backbone.history.start();

    var navView = new App.Views.Nav();
    navView.render();
    $('.nav-container').html(navView.el);

}());