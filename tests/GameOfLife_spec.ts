import should from 'should';
import GameOfLife from '../src/GameOfLife';

describe('Game Of Life', () => {
  it('all cells are dead all continues dead in the next generation', () => {
    const game = new GameOfLife([]);

    game.nextGeneration();

    should(game.currentGeneration()).eql([]);
  });
});
