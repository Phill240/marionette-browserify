import {Marionette, Backbone} from '../../../../../vendor/vendor';
import MenuView from './view'
import * as MenuEntity from '../../../entities/menu'

export default Marionette.Object.extend({
    initialize: function() {
        var layoutChannel = Backbone.Radio.channel('layout');
        var menu = MenuEntity.getMenuEntries();
        var menuView = this.getMenuView(menu);
        layoutChannel.request('set:menu', menuView);
    },

    getMenuView: function(menu) {
        return new MenuView({
            collection: menu
        });
    }
});