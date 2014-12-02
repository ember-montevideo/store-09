import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  isFeatured: DS.attr('boolean'),

  purchasePrice: function() {
    return this.get('price') * (this.get('isFeatured') ? 0.8 : 1.0);
  }.property('price'),
  imageUrl: function() {
    return "/images/" + this.get('id') + ".png";
  }.property()
});
