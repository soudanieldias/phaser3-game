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
    this.load.spritesheet('dude', '/assets/dude.png', { frameWidth: 32, frameHeight: 48 });

    // Audios - Songs - Effects
    this.load.audio('backgroundSong', ['/assets/audio/backgroundSong.mp3']);

  }

  create() { // Assignment & Bind of elements to Scene
    // Images
    this.add.image(400, 300, 'sky');
    
    // Elements
    // Element - Platforms
    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(3).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // Element - Player
    var player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // Element - Bombs
    var bombs = this.physics.add.group();
  
    // Element - scoreText
    var scoreText = this.add.text(16, 20, 'score: 0', { fontSize: '32px', color: '#000' });
    
    // Element - levelText
    var levelText = this.add.text(16, 50, 'Level: 1', { fontSize: '32px', color: '#000' });

    // Colliders (Collision Events)
    this.physics.add.collider(player, platforms); // Collision of Players -> Platform
    this.physics.add.collider(bombs, platforms); // Collision of Bombs -> Platform
  
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
    var backgroundSong = this.sound.add('backgroundSong', {volume: 0.3});
    backgroundSong.play();

    // Events
    // Event - Cursor
    var cursors = this.input.keyboard.createCursorKeys();

  }

  update () {

  }
}
