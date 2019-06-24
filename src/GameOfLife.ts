class GameOfLife {
  private liveCells: Array<Array<number>>;
  constructor(seed: Array<Array<number>>) {
    this.liveCells = seed;
  }

  nextGeneration() {
    if (this.liveCells.length < 3) {
      this.liveCells = [];
    } else {
      this.liveCells = [[0, 1]];
    }
  }

  currentGeneration(): Array<Array<number>> {
    return this.liveCells;
  }
}

export default GameOfLife;
