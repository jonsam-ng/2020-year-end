import { observable, computed, action, decorate } from 'mobx';

class BaseStore {
  idx: number = 1;
  
  public get strIdx() {
    return `${this.idx*2}个`;
  }
  
  public add() {
    this.idx += 1;
  }
}

decorate(BaseStore, {
  idx: observable,
  strIdx: computed,
  add: action.bound
})

export default new BaseStore();