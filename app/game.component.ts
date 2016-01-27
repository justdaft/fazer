import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-game',
    templateUrl: 'app/game.component.html',
    styleUrls: ['app/game.component.css']
})

export class GameComponent implements OnInit {
    game: Phaser.Game;
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-content', {
            preload: this.preload,
            create: this.create });
        console.log('constructor');
    }
    create() {
        console.log('create');
        this.game.stage.backgroundColor = '#2d2d2d';
    }

    preload() {
        console.log('preload');
    }

    ngOnInit() {
        console.log('on int');
    };
}
