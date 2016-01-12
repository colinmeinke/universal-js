import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Input from '../../src/common/components/Input/index';
import StatefulInput from '../../src/common/components/Input';

describe( 'component', () => {
  describe( '<Input />', () => {
    let input;

    const props = {
      defaultValue: 'Colin',
      name: 'name',
      onChange: () => {},
      placeholder: 'Your name...',
    };

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Input { ...props } />
      );

      input = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( input.type ).toBe( 'input' );
    });

    it( 'should render correct input defaultValue', () => {
      expect( input.props.defaultValue ).toBe( props.defaultValue );
    });
  });

  describe( '<StatefulInput />', () => {
    let input;

    const props = {
      defaultValue: 'Colin',
      name: 'name',
      placeholder: 'Your name...',
    };

    before(() => {
      const store = createStore(() => props );

      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Provider store={ store }>
          <StatefulInput { ...props } />
        </Provider>
      );

      input = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( input.type.displayName ).toEqual( 'Connect(Input)' );
    });
  });
});
