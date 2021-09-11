export default class Const {
  static get MAX_BOARD_X() {
    return 2000
  }

  static get MIN_BOARD_X() {
    return -2000
  }

  static get MAX_BOARD_Y() {
    return 2000
  }

  static get MIN_BOARD_Y() {
    return -2000
  }

  static get MAX_BOARD_SCALE() {
    return 3.0
  }

  static get BOARD_WIDTH() {
    return Const.MAX_BOARD_X - Const.MIN_BOARD_X
  }

  static get BOARD_HEIGHT() {
    return Const.MAX_BOARD_Y - Const.MIN_BOARD_Y
  }

  static get ALIGN_PADDING() {
    return 15
  }

  static get defaults() {
    return {
      cardWidth: 200,
      cardHeight: null,
      fontColor: '#101010',
    }
  }

  static get colors() {
    return {
      board: [
        '#B2EBF2',
        '#FFCDD2',
        '#FFF59D',
        '#DCEDC8',
        '#FAFAFA',
        '#00000000',
      ],
      cardSelectedRect: '#2196F3',
      transparent: '#00000000',
      grey: 'grey darken-1',
    }
  }

  static get fontColors() {
    return {
      board: ['#20221F', '#FFFFFF', '#F44336', '#1E88E5'],
      transparent: '#00000000',
      grey: 'grey darken-1',
    }
  }

  static get zIndex() {
    return {
      // movable-controll-boxが3000なのでそれより大きい数字
      sharedBoardOverview: 3004,
      sharedBoardOverlay: 3005,
      boardMenuBar: 3006,
      stockView: 3010,
      sharedCardMenuBar: 3015,
      mainMenuBar: 3020,
      dialog: 3025,
      snackBar: 3030,
      loadingBlocker: 3035,
    }
  }

  static get fontSize() {
    return {
      small: 1.0,
      medium: 1.5,
      large: 2.25,
      xlarge: 3.375,
      xxlarge: 5,
    }
  }
}
