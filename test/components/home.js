import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from '../../src/common/components/Home/index';
import StatefulHome from '../../src/common/components/Home';
import Title from '../../src/common/components/Title/index';

describe( 'component', () => {
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
      expect( home.props.children.type ).toBe( 'section' );
      expect( home.props.children.props.children[ 0 ].type ).toBe( Title );
      expect( home.props.children.props.children[ 1 ].type ).toBe( 'p' );
    });
  });

  describe( '<StatefulHome />', () => {
    let home;

    before(() => {
      const store = createStore(() => props );

      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Provider store={ store }>
          <StatefulHome />
        </Provider>
      );

      home = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( home.type.displayName ).toEqual( 'Connect(Home)' );
    });
  });
});
