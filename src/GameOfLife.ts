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
      const numbersOfLiveNeighbors = this.getLiveNeighbors(cell.position());
      if (cell.isAlive() && (numbersOfLiveNeighbors < 2 || numbersOfLiveNeighbors > 3))
        return newGeneration;

      if (numbersOfLiveNeighbors === 2 || numbersOfLiveNeighbors === 3) newGeneration.push(cell);

      if (!cell.isAlive() && numbersOfLiveNeighbors === 3)
        newGeneration.push(new Cell('live', cell.position()));

      return newGeneration;
    }, []);
  }

  private expandDeadCellsFromLiveCells(): Array<Cell> {
    return this.cells.reduce((expandedCells, cell) => {
      const neighbors = cell.position().getNeighbors();
      const newDeadCells = neighbors.reduce((deadCells, neighbor) => {
        if (!this.existsCell(expandedCells, neighbor))
          deadCells.push(new Cell('dead', neighbor));
        return deadCells;
      }, []);
      return [...expandedCells, ...newDeadCells];
    }, this.cells);
  }

  private existsCell(cells: Array<Cell>, position: Position): boolean {
    return cells.some(cell => {
      return cell.position().isEqual(position);
    });
  }
  private getLiveNeighbors(position: Position): number {
    return this.cells.reduce((liveNeighbors, liveCell) => {
      if (liveCell.position().isNeighbor(position)) liveNeighbors++;
      return liveNeighbors;
    }, 0);
  }

  currentGeneration(): Array<Array<number>> {
    return this.cells.reduce((liveCells, cell) => {
      if (cell.isAlive()) liveCells.push(cell.position().toArray());
      return liveCells;
    }, []);
  }
}

export default GameOfLife;
