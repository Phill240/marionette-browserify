import ShowController from './show/controller';

export default {
    API: {
        showHeader: function() {
            ShowController.showHeader();
        }
    },

    start: function() {
        this.API.showHeader();
    }
};