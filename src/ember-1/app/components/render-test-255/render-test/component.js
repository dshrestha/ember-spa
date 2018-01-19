import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  loopCount: computed('loop', function () {
    let list = [];
    for (let i = 1; i < this.get('loop'); i++) {
      list.push(i);
    }
    return list;
  })


});
