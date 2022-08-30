import Phaser from 'phaser';
import config from './config';
import { LevelOne } from './Levels';
import { Game, Pause } from './scenes';

new Phaser.Game(
  Object.assign(config, {
    scene: [LevelOne, Pause],
  })
);
