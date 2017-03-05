import ListController from './list/controller';

export default {
    API: {
        list: function() {
            new ListController();
        }
    },

    start: function() {
        this.API.list();
    }
};