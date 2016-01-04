import expect from 'expect';

import reducer from '../../src/common/reducers/isUpdating';
import { COMPLETE_UPDATE, REQUEST_UPDATE } from '../../src/common/actions/isUpdating';

describe( 'reducer', () => {
  describe( 'isUpdating()', () => {
    it( 'should return the initial state by default', () => {
      expect( reducer( undefined, {})).toEqual( false );
    });

    it( 'should handle COMPLETE_UPDATE action type', () => {
      expect( reducer( true, {
        type: COMPLETE_UPDATE,
      })).toEqual( false );
    });

    it( 'should handle REQUEST_UPDATE action type', () => {
      expect( reducer( false, {
        type: REQUEST_UPDATE,
      })).toEqual( true );
    });
  });
});
