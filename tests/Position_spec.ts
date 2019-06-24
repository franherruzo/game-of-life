import should from 'should';
import Position from '../src/Position';

describe('Position', () => {
  it('returns true if is the top neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(4, 5))).eql(true);
  });

  it('returns true if is the top-rigth neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(4, 6))).eql(true);
  });

  it('returns true if is the rigth neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(5, 6))).eql(true);
  });

  it('returns true if is the bottom-rigth neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(6, 6))).eql(true);
  });

  it('returns true if is the bottom neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(6, 5))).eql(true);
  });

  it('returns true if is the bottom-left neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(6, 4))).eql(true);
  });

  it('returns true if is the left neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(5, 4))).eql(true);
  });

  it('returns true if is the top-left neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(4, 4))).eql(true);
  });

  it('returns false if is not a neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(0, 0))).eql(false);
  });

  it('returns 8 neighbors', () => {
    const position = new Position(5, 5);
    const neighbors = position.getNeighbors();

    should(neighbors.length).be.eql(8);
    neighbors.forEach(neighbor => {
      should(neighbor.isNeighbor(position)).be.ok();
    });
  });
});
