import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }
  
  private player: Phaser.Physics.Arcade.Sprite;

  private platforms: Phaser.Physics.Arcade.StaticGroup;

  private scoreValue: number = 0;

  private levelValue: number = 1;

  private stars: Phaser.Physics.Arcade.Group;

  private bombs: Phaser.Physics.Arcade.Group;

  private backgroundSong: Phaser.Sound;

  public preload () { // Preload of elements used in game (images, songs, etc)
    // Images
    this.load.image('sky', '/assets/sky.png');
    this.load.image('ground', '/assets/platform.png');
    this.load.image('star', '/assets/star.png');
    this.load.image('form', '/assets/forms.png');

    // Sprites
    this.load.spritesheet('dude', '/assets/dude.png', { frameWidth: 32, frameHeight: 48 });

    // Audios - Songs - Effects
    this.load.audio('backgroundSong', ['/assets/audio/backgroundSong.mp3']);

  }

  public create () { // Assignment & Bind of elements to Scene
    // Images
    this.add.image(400, 300, 'sky');
    
    // Elements
    // Element - Platforms
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(3).refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    // Element - Player
    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    // Element - Bombs
    this.bombs = this.physics.add.group();
  
    // Element - scoreText & scoreValue
    var scoreText = this.add.text(16, 20, 'score: 0', { fontSize: '32px', color: '#000' });
    // var scoreValue = 0;

    // Element - levelText & levelValue
    var levelText = this.add.text(16, 50, 'Level: 1', { fontSize: '32px', color: '#000' });
    // var levelValue = 1;

    // Element - Stars
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.stars.children.iterate((child) => {
      (child as Phaser.Physics.Arcade.Sprite).setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });

    // Colliders (Collision Events)
    this.physics.add.collider(this.player, this.platforms); // Collision of Players -> Platform
    this.physics.add.collider(this.bombs, this.platforms); // Collision of Bombs -> Platform
    this.physics.add.collider(this.stars, this.platforms); // Collision of Stars -> Platform
  
    // Overlaps
    
    // Animations
    // Animation - Player
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 30
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 20,
      repeat: -1
    });

    // Audios - Songs - Effects
    this.backgroundSong = this.sound.add('backgroundSong', {volume: 0.3});
    this.backgroundSong.play();

    // Events
    // Event - Cursor
    var cursors = this.input.keyboard.createCursorKeys();

  }

  public update () {

  }
}
