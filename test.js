import { Game } from './game.js';
const game1 = new Game();

// Game setup
game1.makePlayers(prompt('how many players?'));
game1.makeDeck();
game1.shuffleDeck();
game1.dealCards();
game1.allowCardSwap();

// Game start
game1.gameBegin();
