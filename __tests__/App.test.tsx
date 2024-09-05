/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, screen} from '@testing-library/react-native';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Hello World! 👋')).toBeTruthy();
  });

  it('matches snapshot', () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
});
