import Position from './Position';

class GameOfLife {
  private liveCells: Array<Position>;
  constructor(seed: Array<Array<number>>) {
    this.liveCells = seed.map(cell => new Position(cell[0], cell[1]));
  }

  nextGeneration() {
    this.liveCells = this.liveCells.reduce((newGeneration, cell) => {
      if (this.getLiveNeighbors(cell) < 2) return newGeneration;

      newGeneration.push(cell);
      return newGeneration;
    }, []);
  }

  private getLiveNeighbors(cell: Position): number {
    return this.liveCells.reduce((liveNeighbors, liveCell) => {
      if (liveCell.isNeighbor(cell)) liveNeighbors++;
      return liveNeighbors;
    }, 0);
  }

  currentGeneration(): Array<Array<number>> {
    return this.liveCells.map(cell => cell.toArray());
  }
}

export default GameOfLife;
