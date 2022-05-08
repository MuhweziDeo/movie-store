import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import {Error as ErrorComponent} from '../Error';

describe('Error', () => {
    it('should render error', async() => {
        const error = 'Something went wrong';
        render(<ErrorComponent message={error} />)
        await waitFor(async() => {
            expect(await screen.findAllByText(error)).not.toBeNull();
        })
    })
})