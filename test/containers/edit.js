import createHistory from 'history/lib/createMemoryHistory';
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ConnectedEdit, { Edit } from '../../src/common/containers/Edit';

import EditForm from '../../src/common/components/EditForm';

describe( 'container', () => {
  const history = createHistory();

  const props = {
    history,
    isUpdating: false,
    name: 'Colin',
    updateName: () => {},
  };

  describe( '<Edit />', () => {
    let edit;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Edit { ...props } />
      );

      edit = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( edit.type ).toBe( EditForm );
    });

    it( 'should pass correct props to <EditForm />', () => {
      expect( edit.props.history ).toEqual( props.history );
      expect( edit.props.isUpdating ).toEqual( props.isUpdating );
      expect( edit.props.value ).toEqual( props.name );
      expect( edit.props.onChange ).toEqual( props.updateName );
    });
  });

  describe( '<ConnectedEdit />', () => {
    let edit;

    before(() => {
      const store = createStore(() => props );

      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Provider store={ store }>
          <ConnectedEdit />
        </Provider>
      );

      edit = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( edit.type.displayName ).toEqual( 'Connect(Edit)' );
    });
  });
});
