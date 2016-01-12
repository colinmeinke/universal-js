import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import EditForm from '../../src/common/components/EditForm/index';
import StatefulEditForm from '../../src/common/components/EditForm';

describe( 'component', () => {
  describe( '<EditForm />', () => {
    let editForm;

    const props = {
      action: '/',
      inputName: 'name',
      inputPlaceholder: 'Your name...',
      onSubmit: () => {},
    };

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <EditForm { ...props } />
      );

      editForm = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( editForm.type ).toBe( 'form' );
    });

    it( 'should render the correct form action', () => {
      expect( editForm.props.action ).toBe( props.action );
    });
  });

  describe( '<StatefulEditForm />', () => {
    let editForm;

    const props = {
      action: '/',
      inputName: 'name',
      inputPlaceholder: 'Your name...',
    };

    before(() => {
      const store = createStore(() => props );

      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Provider store={ store }>
          <StatefulEditForm { ...props } />
        </Provider>
      );

      editForm = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( editForm.type.displayName ).toEqual( 'Connect(EditForm)' );
    });
  });
});
