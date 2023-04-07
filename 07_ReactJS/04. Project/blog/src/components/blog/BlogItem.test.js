import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as router from 'react-router'
import BlogItem from './BlogItem';

const mockPost = {
    "objectId": "Sk4aW5mmFj",
    "title": "Graceful building opinions",
    "text": "Delightful remarkably mr on announcing themselves entreaties favourable.",
    "picture": { "url": "https://images.unsplash.com/photo-1618336215696-6673cf4549ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80" },
    "author": {
        "objectId": "crqTEkdvaf",
        "firstName": "Gaco",
        "lastName": "Bacov",
    },
    "createdAt": "2023-03-23T14:14:41.135Z",
    "updatedAt": "2023-03-23T14:14:41.135Z"
};

const mockSearch = jest.fn();

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useSearchParams: jest.fn(),
}));

const blogItemWithRoute = () => {
    render(
        <router.MemoryRouter initialEntries={['/posts']}>
            <BlogItem post={mockPost} onSearch={mockSearch} />
        </router.MemoryRouter>
    );
}

it('Should correctly display information', () => {

    jest.spyOn(router, 'useSearchParams').mockReturnValue({});

    blogItemWithRoute();

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.text)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', `/posts/${mockPost.objectId}/details`);
    expect(screen.getByRole('link', { name: [mockPost.title] })).toHaveAttribute('href', `/posts/${mockPost.objectId}/details`);
    expect(screen.getByTitle(mockPost.title)).toHaveAttribute('href', `/posts/${mockPost.objectId}/details`);
    expect(screen.getByAltText('post')).toHaveAttribute('src', mockPost.imageUrl);
    expect(screen.getByText(new Date(mockPost.createdAt).toDateString())).toBeInTheDocument();
    expect(screen.getByRole('button', { name: [`By ${mockPost.author.firstName} ${mockPost.author.lastName}`] })).toBeInTheDocument();
});

it('Should call search with correct parameters', async () => {
    jest.spyOn(router, 'useSearchParams').mockReturnValue({});

    blogItemWithRoute();

    fireEvent.click(screen.getByRole('button', { name: [`By ${mockPost.author.firstName} ${mockPost.author.lastName}`] }));

    await waitFor(() => {
        expect(mockSearch).toHaveBeenCalledTimes(1);
        const arg = mockSearch.mock.calls[0][0];
        expect(JSON.stringify(arg)).toEqual(JSON.stringify({ 'author': mockPost.author.objectId }));
    });
});

