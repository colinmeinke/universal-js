import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Input from '../../src/components/input/Input';

describe( 'component', () => {
  describe( '<Input />', () => {
    let input;

    const props = {
      name: 'name',
      onChange: () => {},
      placeholder: 'Your name...',
      value: 'Colin',
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
      expect( input.props.defaultValue ).toBe( props.value );
    });
  });
});
