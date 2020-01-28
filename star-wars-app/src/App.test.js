import React from 'react';
import {render, getByAltText} from '@testing-library/react';
import App from "./App";

test('App renders correctly', () => {
    const { getByAltText } = render(<App/>)
    
    getByAltText(/logo/i)
})