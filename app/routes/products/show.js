import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("product", params.product_id);
  },
  setupController: function(controller, model) {
    this.controllerFor('products').set('category', null);
    controller.set('page', null);
    this._super(controller, model);
  }
});
