import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Button from '../../src/common/components/Button/index';
import StatefulButton from '../../src/common/components/Button';

describe( 'component', () => {
  describe( '<Button />', () => {
    let button;

    const props = {
      isUpdating: false,
      text: 'Save',
      type: 'submit',
      updatingText: 'Saving',
    };

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Button { ...props } />
      );

      button = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( button.type ).toBe( 'button' );
    });

    it( 'should render correct default text', () => {
      expect( button.props.children ).toEqual( props.text );
    });

    it( 'should render correct updating text', () => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Button
          { ...props }
          isUpdating
        />
      );

      const updatingButton = renderer.getRenderOutput();

      expect( updatingButton.props.children ).toEqual( props.updatingText );
    });
  });

  describe( '<StatefulButton />', () => {
    let button;

    const props = {
      isUpdating: false,
      text: 'Save',
      type: 'submit',
      updatingText: 'Saving',
    };

    before(() => {
      const store = createStore(() => props );

      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Provider store={ store }>
          <StatefulButton { ...props } />
        </Provider>
      );

      button = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( button.type.displayName ).toEqual( 'Connect(Button)' );
    });
  });
});
