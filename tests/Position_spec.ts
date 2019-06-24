import should from 'should';
import Position from '../src/Position';

describe('Position', () => {
  it('returns true if is the top neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(4, 5))).eql(true);
  });

  it('returns false if is not a neighbor', () => {
    const position = new Position(5, 5);

    should(position.isNeighbor(new Position(0, 0))).eql(false);
  });
});
