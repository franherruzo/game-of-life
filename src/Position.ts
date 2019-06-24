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
    if (position.column === this.column && position.row === this.row - 1)
      return true;
    if (position.column === this.column + 1 && position.row === this.row - 1)
      return true;
    if (position.column === this.column + 1 && position.row === this.row)
      return true;
    if (position.column === this.column + 1 && position.row === this.row + 1)
      return true;
    if (position.column === this.column && position.row === this.row + 1)
      return true;
    if (position.column === this.column - 1 && position.row === this.row + 1)
      return true;
    if (position.column === this.column - 1 && position.row === this.row)
      return true;
    if (position.column === this.column - 1 && position.row === this.row - 1)
      return true;
    return false;
  }
}

export default Position;
