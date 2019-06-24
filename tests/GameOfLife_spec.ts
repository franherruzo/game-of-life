import should from 'should';
import GameOfLife from '../src/GameOfLife';

describe('Game Of Life', () => {
  it('all cells are dead all continues dead in the next generation', () => {
    const game = new GameOfLife([]);

    game.nextGeneration();

    should(game.currentGeneration()).eql([]);
  });

  it('returns all dead cells given only 1 live cell', () => {
    const game = new GameOfLife([[0, 0]]);

    game.nextGeneration();

    should(game.currentGeneration()).eql([]);
  });

  it('returns all dead cells given only 2 live cells', () => {
    const game = new GameOfLife([[0, 0], [2, 0]]);

    game.nextGeneration();

    should(game.currentGeneration()).eql([]);
  });

  it('any live cell with fewer than two live neighbor dies', () => {
    const game = new GameOfLife([[0, 0], [0, 1], [0, 2]]);

    game.nextGeneration();

    should(game.currentGeneration()).eql([[0, 1]]);
  });

  it(' any live cell with two of three live neighbor lives', () => {
    const game = new GameOfLife([[0, 0], [0, 1], [1, 1], [1, 0]]);

    game.nextGeneration();

    should(game.currentGeneration()).eql([[0, 0], [0, 1], [1, 1], [1, 0]]);
  });

  it('any live cell with more than three live neighbor dies', () => {
    const game = new GameOfLife([[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]]);

    game.nextGeneration();

    should(game.currentGeneration()).eql([[0, 0], [0, 2], [1, 0]]);
  });
});
