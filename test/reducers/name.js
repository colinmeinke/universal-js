import expect from 'expect';

import reducer from '../../src/reducers/name';
import { UPDATE_NAME } from '../../src/actions/name';

describe( 'reducer', () => {
  describe( 'name()', () => {
    it( 'should return the initial state by default', () => {
      expect( reducer( undefined, {})).toEqual( '' );
    });

    it( 'should handle UPDATE_NAME action type', () => {
      const name = 'Colin';

      expect( reducer( '', {
        type: UPDATE_NAME,
        name,
      })).toEqual( name );
    });
  });
});

