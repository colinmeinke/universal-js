import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Link } from 'universal-redux-router';

import Title from '../../src/common/components/Title/index';

describe( 'component', () => {
  describe( '<Title />', () => {
    let h1;
    let link;
    let title;

    const props = {
      linkUrl: '/edit',
      text: 'Hello Colin',
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
    });

    it( 'should render correct <Link /> url', () => {
      expect( link.props.url ).toEqual( props.linkUrl );
    });

    it( 'should render correct title text', () => {
      expect( h1.props.children.trim()).toEqual( props.text );
    });
  });
});
