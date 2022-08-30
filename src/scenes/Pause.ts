import Phaser from 'phaser';

export default class Pause extends Phaser.Scene {
  constructor() {
    super('PauseScene');
  }

  private resumeButton: any;

  public preload () { // Preload of elements used in game (images, songs, etc)
    // Images

    // Sprites

    // Audios - Songs - Effects

  }

  public create () { // Assignment & Bind of elements to Scene
    // Images
    
    // Elements
    // Element - resumeButton
    this.resumeButton = this.add.text(300, 400, 'Resume', { fontSize: '60px', color: '#000' })
    .setInteractive({ useHandCursor: true })
    .on('pointerdown', () => this.resumeGame());

    // Overlaps
  
    // Animations

    // Audios - Songs - Effects

    // Events
  }

  public update () {
  }

  private resumeGame () {
    this.scene.switch('GameScene');
  }
}
