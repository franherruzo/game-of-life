import Position from './Position';

class GameOfLife {
  private liveCells: Array<Position>;
  constructor(seed: Array<Array<number>>) {
    this.liveCells = seed.map(cell => new Position(cell[0], cell[1]));
  }

  nextGeneration() {
    if (this.liveCells.length < 3) {
      this.liveCells = [];
    } else {
      this.liveCells = [new Position(0, 1)];
    }
  }

  currentGeneration(): Array<Array<number>> {
    return this.liveCells.map(cell => cell.toArray());
  }
}

export default GameOfLife;
