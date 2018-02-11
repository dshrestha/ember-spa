import Component from '@ember/component';
import { get, computed } from "@ember/object";

export default Component.extend({

  loopCount: computed('loop', function () {
    let list = [];
    for (let i = 1; i < get(this, 'loop'); i++) {
      list.push(i);
    }
    return list;
  })

});
