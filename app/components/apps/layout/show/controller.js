import {Marionette, Backbone} from '../../../../../vendor/vendor';
import LayoutView from './view'

export default Marionette.Object.extend({
    channelName: 'layout',
    layoutView: null,

    radioRequests: {
        'set:header': 'setHeaderView',
        'set:menu': 'setMenuView',
        'set:main': 'setMainView',
        'set:footer': 'setFooterView'
    },

    initialize: function() {
        var appChannel = Backbone.Radio.channel('app');
        this.layoutView = this.getLayoutView();
        appChannel.request('set:view', this.layoutView);
    },

    setHeaderView: function(view) {
        this.layoutView.showChildView('header', view);
    },

    setMenuView: function(view) {
        this.layoutView.showChildView('menu', view);
    },

    getLayoutView: function() {
        return new LayoutView;
    }
});