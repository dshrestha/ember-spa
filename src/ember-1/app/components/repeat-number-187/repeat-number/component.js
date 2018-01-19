import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  loopCount: computed('num', function () {
    let list = [];
    let num = this.get('num');
    for (let i = 0; i < num; i++) {
      list.push(num);
    }
    return list;
  })

});
