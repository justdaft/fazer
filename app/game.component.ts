import {Component} from 'angular2/core';
// import {Fazer} from './fazer';
import {MatchingPairs} from './matching_pairs/matching_pairs';
@Component({
    selector: 'my-game',
    templateUrl: 'app/game.component.html',
    styleUrls: ['app/game.component.css']
})

export class GameComponent {
    game: Phaser.Game;
    currentGame: any;
    constructor() {
        this.currentGame = new MatchingPairs();
        console.log('constructor');
    }
}
