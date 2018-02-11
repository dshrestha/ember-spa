import Component from '@ember/component';

import { get, computed } from "@ember/object";

export default Component.extend({

  loopCount: computed('num', function () {
    let list = [];
    let num = get(this, 'num');
    for (let i = 0; i < num; i++) {
      list.push(num);
    }
    return list;
  })

});
