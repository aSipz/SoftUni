import { render, screen } from '@testing-library/react';

import User from './User';
import { AuthContext } from '../../contexts/AuthContext';

const author = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    username: 'ivo',
    email: 'ivan@abv.bg',
    createdAt: '2023-03-21T11:55:00.424Z',
    picture: { url: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230203141341-07-elon-musk-tesla-shareholder-lawsuit-0124.jpg' },
    role: 'author'
}

const user = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    username: 'ivo',
    email: 'ivan@abv.bg',
    createdAt: '2023-03-21T11:55:00.424Z',
    picture: { url: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230203141341-07-elon-musk-tesla-shareholder-lawsuit-0124.jpg' },
}

const componentWithContext = (user) => {
    render(
        <AuthContext.Provider value={{ user: author }}>
            <table><tbody><User account={user} /></tbody></table>
        </AuthContext.Provider >
    )
};

it('Should show first name', async () => {
    componentWithContext(user);

    expect(await screen.findByText('Ivan')).toBeInTheDocument();
});

it('Should show last name', async () => {
    componentWithContext(user);

    expect(await screen.findByText('Ivanov')).toBeInTheDocument();
});

it('Should show username', async () => {
    componentWithContext(user);

    expect(await screen.findByText('ivo')).toBeInTheDocument();
});

it('Should show join date', async () => {
    componentWithContext(user);

    expect(await screen.findByText('Tue Mar 21 2023')).toBeInTheDocument();
});

it('Should show email', async () => {
    componentWithContext(user);

    expect(await screen.findByText('ivan@abv.bg')).toBeInTheDocument();
});

it('Should show image', async () => {
    componentWithContext(user);

    const image = await screen.findByAltText('Ivan');

    expect(image).toHaveAttribute('src', 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230203141341-07-elon-musk-tesla-shareholder-lawsuit-0124.jpg');
});

it('Should show correct author status for user', () => {
    componentWithContext(user);

    const element = screen.getByTestId('add_author');

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('add_author');
});

it('Should show correct author status for author', () => {
    componentWithContext(author);

    const visible = screen.getByTestId('author');
    const hidden = screen.getByTestId('remove_author');

    expect(visible).toBeInTheDocument();
    expect(hidden).toBeInTheDocument();
    expect(visible).toHaveClass('author');
    expect(hidden).toHaveClass('remove_author');
});
