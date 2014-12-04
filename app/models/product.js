import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  picture: DS.attr('string'),
  price: DS.attr('number'),
  isFeatured: DS.attr('boolean'),

  purchasePrice: Ember.computed.alias('price'),
  picturePath: function() {
    return '/assets/images/' + this.get('picture');
  }.property('picture')
});
