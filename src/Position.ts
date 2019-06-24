const NEIGHBOR_POSITIONS = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1]
];
class Position {
  private row: number;
  private column: number;
  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  toArray(): Array<number> {
    return [this.row, this.column];
  }

  isNeighbor(position: Position): boolean {
    return NEIGHBOR_POSITIONS.some(relativePosition => {
      return (
        position.row === this.row + relativePosition[0] &&
        position.column === this.column + relativePosition[1]
      );
    });
  }

  getNeighbors(): Array<Position> {
    return NEIGHBOR_POSITIONS.map(relativePosition => {
      return new Position(
        this.row + relativePosition[0],
        this.column + relativePosition[1]
      );
    });
  }

  isEqual(position: Position): boolean {
    return this.row === position.row && this.column === position.column;
  }
}

export default Position;
