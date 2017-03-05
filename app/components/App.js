import {Marionette, Backbone} from '../../vendor/vendor';
import LayoutApp from './apps/layout/layout_app';
import HeaderApp from './apps/header/header_app';
import MenuApp from './apps/menu/menu_app';

export default Marionette.Application.extend({
    region: '#app',

    channelName: 'app',

    radioRequests: {
        'set:view': 'setMainView',
    },

    setMainView: function(view) {
        this.showView(view);
    },

    onStart: function(app, options) {
        this.initApps();
        Backbone.history.start();
    },

    initApps: function() {
        LayoutApp.start();
        HeaderApp.start();
        MenuApp.start();
    }
});