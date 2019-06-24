import Position from './Position';
import Cell from './Cell';

class GameOfLife {
  private cells: Array<Cell>;
  constructor(seed: Array<Array<number>>) {
    this.cells = seed.map(
      position => new Cell('live', new Position(position[0], position[1]))
    );
  }

  nextGeneration() {
    const cells = this.expandDeadCellsFromLiveCells();
    this.cells = cells.reduce((newGeneration, cell) => {
      if (cell.isAlive()) {
        if (this.getLiveNeighbors(cell.position()) < 2) return newGeneration;
        if (this.getLiveNeighbors(cell.position()) > 3) return newGeneration;
      }
      newGeneration.push(cell);
      return newGeneration;
    }, []);
  }

  private expandDeadCellsFromLiveCells(): Array<Cell> {
    return this.cells;
  }
  private getLiveNeighbors(position: Position): number {
    return this.cells.reduce((liveNeighbors, liveCell) => {
      if (liveCell.position().isNeighbor(position)) liveNeighbors++;
      return liveNeighbors;
    }, 0);
  }

  currentGeneration(): Array<Array<number>> {
    return this.cells.map(cell => cell.position().toArray());
  }
}

export default GameOfLife;
