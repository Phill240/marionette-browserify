import {Backbone} from '../../../../../vendor/vendor';
import HeaderView from './view'

export default {

    showHeader: function() {
        var layoutChannel = Backbone.Radio.channel('layout');
        var headerView = this.getHeaderView();
        layoutChannel.request('set:header', headerView);
    },

    getHeaderView: function() {
        return new HeaderView;
    }
};