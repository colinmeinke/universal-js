import expect from 'expect';

import reducer from '../../src/common/reducers/name';
import { UPDATE_NAME } from '../../src/common/actions/name';

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
