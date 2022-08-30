import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';
import PauseScene from './scenes/Pause';

new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene, PauseScene]
  })
);
