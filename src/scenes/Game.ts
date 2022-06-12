import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() { // Preload of elements used in game (images, songs, etc)
    // Images
    this.load.image('sky', '/assets/sky.png');
    this.load.image('ground', '/assets/platform.png');
    this.load.image('star', '/assets/star.png');
    this.load.image('form', '/assets/forms.png');

    // Sprites
    this.load.spritesheet('dude', '../public/assets/dude.png', { frameWidth: 32, frameHeight: 48 });

    // Audios - Songs - Effects
    this.load.audio('backgroundSong', ['../public/assets/audio/backgroundSong.mp3']);
  
  }

  create() { // Assignment & Bind of elements to Scene
    this.add.image(400, 300, 'sky');

    const backgroundSong = this.sound.add('backgroundSong', {volume: 0.3});
    backgroundSong.play();
  }

  update () {

  }
}
