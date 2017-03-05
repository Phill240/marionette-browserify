import {Backbone} from '../../../vendor/vendor';

var MenuEntry = Backbone.Model.extend({

});

var Menu = Backbone.Collection.extend({
    model: MenuEntry
});

function getMenuEntries() {
    return new Menu([
        {name: 'First entry', link: '/first'},
        {name: 'Second entry', link: '/second'},
        {name: 'Third entry', link: '/third'},
    ]);
}

export { getMenuEntries }