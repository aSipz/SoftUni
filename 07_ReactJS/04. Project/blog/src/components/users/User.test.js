import { render, screen } from '@testing-library/react';

import User from './User';

const author = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    username: 'ivo',
    email: 'ivan@abv.bg',
    createdAt: '2023-03-21T11:55:00.424Z',
    imageUrl: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230203141341-07-elon-musk-tesla-shareholder-lawsuit-0124.jpg',
    role: 'author'
}

const user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    username: 'ivo',
    email: 'ivan@abv.bg',
    createdAt: '2023-03-21T11:55:00.424Z',
    imageUrl: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230203141341-07-elon-musk-tesla-shareholder-lawsuit-0124.jpg',
}

it('Should show first name', () => {
    render(<table><tbody><User user={user} /></tbody></table>);

    expect(screen.getAllByText('Ivan')).toBeInTheDocument;
});

it('Should show last name', () => {
    render(<table><tbody><User user={user} /></tbody></table>);

    expect(screen.getAllByText('Ivanov')).toBeInTheDocument;
});

it('Should show username', () => {
    render(<table><tbody><User user={user} /></tbody></table>);

    expect(screen.getAllByText('ivo')).toBeInTheDocument;
});

it('Should show join date', () => {
    render(<table><tbody><User user={user} /></tbody></table>);

    expect(screen.getAllByText('Tue Mar 21 2023')).toBeInTheDocument;
});

it('Should show email', () => {
    render(<table><tbody><User user={user} /></tbody></table>);

    expect(screen.getAllByText('ivan@abv.bg')).toBeInTheDocument;
});

it('Should show image', () => {
    render(<table><tbody><User user={user} /></tbody></table>);

    const image = screen.getByAltText('Ivan');

    expect(image).toHaveAttribute('src', 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230203141341-07-elon-musk-tesla-shareholder-lawsuit-0124.jpg');
});

it('Should show correct author status for user', () => {
    render(<table><tbody><User user={user} /></tbody></table>);

    const element = screen.getByTestId('add_author');

    expect(element).toBeInTheDocument;
    expect(element).toHaveClass('add_author');
});

it('Should show correct author status for author', () => {
    render(<table><tbody><User user={author} /></tbody></table>);

    const visible = screen.getByTestId('author');
    const hidden = screen.getByTestId('remove_author');

    expect(visible).toBeInTheDocument;
    expect(hidden).toBeInTheDocument;
    expect(visible).toHaveClass('author');
    expect(hidden).toHaveClass('remove_author');
});
