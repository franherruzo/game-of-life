import Position from './Position';
class Cell {
  private _position: Position;
  private _status: string;
  constructor(status: string, position: Position) {
    this._position = position;
    this._status = status;
  }

  position(): Position {
    return this._position;
  }

  isAlive(): boolean {
    return this._status === 'live';
  }
}

export default Cell;
