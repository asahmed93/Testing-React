import React from "react";
import { render, fireEvent, wait} from '@testing-library/react';
import StarWarsCharacters from "./StarWarsCharacters"
import {getData} from "../api"

test('renders', () => {
    const {getByText} = render(<StarWarsCharacters/>)
    const prevBtn = getByText(/previous/i)
    const nextBtn = getByText(/next/i)
})

test('nextBtn', () => {
    const {queryByText} = render(<StarWarsCharacters/>)
})