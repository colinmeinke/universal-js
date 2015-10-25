import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeContainer, { Home } from '../../src/common/containers/Home';

import Title from '../../src/common/components/Title';

describe( 'container', () => {
  const props = {
    name: 'Colin',
  };

  describe( '<Home />', () => {
    let home;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Home { ...props }>
          <p></p>
        </Home>
      );

      home = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( home.type ).toBe( 'section' );
      expect( home.props.children[ 0 ].type ).toBe( Title );
      expect( home.props.children[ 1 ].type ).toBe( 'p' );
    });

    it( 'should pass correct props to <Title />', () => {
      const title = home.props.children[ 0 ];
      expect( title.props.name ).toEqual( props.name );
    });
  });

  describe( '<HomeContainer />', () => {
    let home;

    before(() => {
      const store = createStore(() => props );

      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Provider store={ store }>
          <HomeContainer />
        </Provider>
      );

      home = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( home.type.displayName ).toEqual( 'Connect(Home)' );
    });
  });
});
