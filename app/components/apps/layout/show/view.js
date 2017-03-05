import {Marionette, Backbone} from '../../../../../vendor/vendor';
import template from './templates/layout.jst';

export default Marionette.View.extend({

    template: template,

    regions: {
        'header': '#header',
        'menu': '#menu',
        'main': '#main',
        'footer': '#footer',
    }

});