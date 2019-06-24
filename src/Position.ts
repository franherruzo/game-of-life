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
}

export default Position;
