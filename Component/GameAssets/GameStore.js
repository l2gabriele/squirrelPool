import { observable } from 'mobx';

class GameStore {
  @observable characterPosition = { x: 0, y: 0 };
  @observable stageX = 0;

  setCharacterPosition(position) {
    this.characterPosition = position;
  }

  setStageX(x) {
    if(x > 0) {
      this.stageX = 0;
    } else if (x < -576) {
      this.stageX = -576;
    } else {
      this.stageX = x;
    }
  }
}

export default new GameStore();
