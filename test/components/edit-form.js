import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Button from '../../src/components/button/Button';
import EditForm from '../../src/components/edit-form/EditForm';
import Input from '../../src/components/input/Input';

describe( 'component', () => {
  describe( '<EditForm />', () => {
    let editForm;

    const props = {
      action: '/',
      name: 'name',
      history: {},
      isUpdating: false,
      onChange: () => {},
      placeholder: 'Your name...',
      value: 'Colin',
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
      expect( editForm.props.children[ 0 ].type ).toBe( Input );
      expect( editForm.props.children[ 1 ].type ).toBe( Button );
    });

    it( 'should render the correct form action', () => {
      expect( editForm.props.action ).toBe( props.action );
    });

    it( 'should pass correct props to <Input />', () => {
      const input = editForm.props.children[ 0 ];

      expect( input.props.name ).toEqual( props.name );
      expect( input.props.onChange ).toEqual( props.onChange );
      expect( input.props.placeholder ).toEqual( props.placeholder );
      expect( input.props.value ).toEqual( props.value );
    });

    it( 'should pass correct props to <Button />', () => {
      const button = editForm.props.children[ 1 ];
      expect( button.props.isUpdating ).toEqual( props.isUpdating );
    });
  });
});
