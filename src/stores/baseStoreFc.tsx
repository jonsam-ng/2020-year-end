import { observable, action, decorate } from 'mobx';

const BaseStoreFc =  observable({
  idx: 1,
  get strIdx() {
    return `${this.idx}个`;
  },
  add () {
    this.idx += 1;
  }
})
decorate(BaseStoreFc, {
  add: action
})

export default BaseStoreFc;