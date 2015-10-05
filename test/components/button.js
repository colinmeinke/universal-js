import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Button from '../../src/components/button/Button';

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
          isUpdating={ true }
        />
      );

      const updatingButton = renderer.getRenderOutput();

      expect( updatingButton.props.children ).toEqual( props.updatingText );
    });
  });
});
