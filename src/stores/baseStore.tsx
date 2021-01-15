import { observable, computed, action } from 'mobx';

class BaseStore {
  @observable idx: number = 1;
  /**
   * {keepAlive: true}
   * when cumputed happened, the value will be memoed.Be aware, this can easily lead to memory leaks 
   * as it will result in every observable used by this computed value, keeping the computed value in memory!
   */
  @computed
  public get strIdx() {
    return `${this.idx}个`;
  }
  @action.bound
  public add() {
    this.idx += 1;
  }
}

export default new BaseStore();