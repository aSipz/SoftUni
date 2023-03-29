import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import AuthorPreview from './AuthorPreview';

const mockAuthor = {
    "objectId": "crqTEkdvaf",
    "firstName": "Gaco",
    "lastName": "Bacov",
    "username": "gaconi",
    "email": "gaco@abv.bg",
    "imageUrl": "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
    "createdAt": "2023-03-10T13:03:14.317Z",
    "updatedAt": "2023-03-24T12:39:41.557Z",
    "description": "Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond she.",
};

it('Should show description', async () => {
    render(<AuthorPreview author={mockAuthor} />, { wrapper: BrowserRouter });

    expect(await screen.findByText(mockAuthor.description)).toBeInTheDocument();
});

it('Should show full name', async () => {
    render(<AuthorPreview author={mockAuthor} />, { wrapper: BrowserRouter });

    expect(await screen.findByText(new RegExp(mockAuthor.firstName, 'i'))).toBeInTheDocument();
    expect(await screen.findByText(new RegExp(mockAuthor.lastName, 'i'))).toBeInTheDocument();
});

it('Should show image', async () => {
    render(<AuthorPreview author={mockAuthor} />, { wrapper: BrowserRouter });

    const image = await screen.findByAltText('author');

    expect(image).toHaveAttribute('src', mockAuthor.imageUrl);
});