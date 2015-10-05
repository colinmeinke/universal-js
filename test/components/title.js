import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Link } from 'react-router';

import Title from '../../src/common/components/Title';

describe( 'component', () => {
  describe( '<Title />', () => {
    let h1;
    let link;
    let title;

    const props = {
      name: 'Colin',
    };

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Title { ...props } />
      );

      title = renderer.getRenderOutput();
      link = title.props.children;
      h1 = link.props.children;
    });

    it( 'should render correct markup', () => {
      expect( title.type ).toBe( 'div' );
      expect( link.type ).toBe( Link );
      expect( h1.type ).toBe( 'h1' );
      expect( h1.props.children[ 0 ].type ).toBe( 'span' );
      expect( h1.props.children[ 3 ].type ).toBe( 'span' );
    });

    it( 'should render correct <Link /> to URL', () => {
      expect( link.props.to ).toEqual( `/edit?name=${ props.name }` );
    });

    it( 'should render correct title text', () => {
      expect( h1.props.children[ 1 ].trim()).toEqual( 'Hello' );
      expect( h1.props.children[ 2 ]).toEqual( props.name );
    });
  });
});
