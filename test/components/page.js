import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Page from '../../src/common/components/Page';

describe( 'component', () => {
  describe( '<Page />', () => {
    let body;
    let page;

    const props = {
      description: '...',
      html: 'app',
      language: 'en',
      scripts: [ 'browser.min.js' ],
      state: '{}',
      styles: [],
      title: 'Hello world',
    };

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Page { ...props } />
      );

      page = renderer.getRenderOutput();
      body = page.props.children[ 1 ];
    });

    it( 'should render correct markup', () => {
      expect( page.type ).toBe( 'html' );
      expect( body.type ).toBe( 'body' );
    });

    it( 'should render correct lang attribute', () => {
      expect( page.props.lang ).toBe( props.language );
    });

    it( 'should render correct content', () => {
      const content = body.props.children.filter( child => {
        return child.type === 'section';
      })[ 0 ];

      expect( content.props.dangerouslySetInnerHTML.__html )
        .toEqual( props.html );
    });

    it( 'should render correct scripts', () => {
      const firstScript = body.props.children.filter( child => {
        if ( Array.isArray( child )) {
          return child[ 0 ].type === 'script';
        }

        return false;
      })[ 0 ][ 0 ];

      expect( firstScript.props.src ).toEqual( props.scripts[ 0 ]);
    });
  });
});
