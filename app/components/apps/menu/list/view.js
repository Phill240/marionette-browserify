import {Marionette} from '../../../../../vendor/vendor';
import entryTemplate from './templates/entry.jst';

var EntryView = Marionette.View.extend({
    template: entryTemplate,
    tagName: 'span'
});

var MenuView = Marionette.CollectionView.extend({
    childView: EntryView
});

export default MenuView;