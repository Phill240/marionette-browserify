import ShowController from './show/controller';

export default {
    API: {
        showLayout: function() {
            new ShowController();
        }
    },

    start: function() {
        this.API.showLayout();
    }
};