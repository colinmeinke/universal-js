import expect from 'expect';

import { UPDATE_NAME, updateName } from '../../src/common/actions/name';

describe( 'action creator', () => {
  describe( 'name', () => {
    describe( 'updateName()', () => {
      it( 'should create an action to update name', () => {
        const name = 'Colin';

        const expectedAction = {
          type: UPDATE_NAME,
          name,
        };

        expect( updateName( name )).toEqual( expectedAction );
      });
    });
  });
});
