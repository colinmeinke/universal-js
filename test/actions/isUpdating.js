import expect from 'expect';

import {
  COMPLETE_UPDATE,
  REQUEST_UPDATE,
  completeUpdate,
  requestUpdate,
} from '../../src/common/actions/isUpdating';

describe( 'action creator', () => {
  describe( 'isUpdating', () => {
    describe( 'completeUpdate()', () => {
      it( 'should create an action to complete update', () => {
        const expectedAction = {
          type: COMPLETE_UPDATE,
        };

        expect( completeUpdate()).toEqual( expectedAction );
      });
    });

    describe( 'requestUpdate()', () => {
      it( 'should create an action to request update', () => {
        const expectedAction = {
          type: REQUEST_UPDATE,
        };

        expect( requestUpdate()).toEqual( expectedAction );
      });
    });
  });
});
