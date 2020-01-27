import React from "react";
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from "./StarWarsCharacters"

test('it renders correctly', () => {
    const {fireEvent, getAllByText} = render(<StarWarsCharacters />)

    getAllByText(/next/i)
    
})