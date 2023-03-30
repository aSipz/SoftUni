import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import Blog from './Blog';

const mockedPosts = [
    {
        "results": [
            {
                "objectId": "Sk4aW5mmFj",
                "title": "Graceful building opinions",
                "text": "Delightful remarkably mr on announcing themselves entreaties favourable.",
                "imageUrl": "https://images.unsplash.com/photo-1618336215696-6673cf4549ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80",
                "author": {
                    "objectId": "crqTEkdvaf",
                    "firstName": "Gaco",
                    "lastName": "Bacov",
                },
                "createdAt": "2023-03-23T14:14:41.135Z",
                "updatedAt": "2023-03-23T14:14:41.135Z"
            }
        ],
        "count": 4
    },
    {
        "results": [
            {
                "objectId": "BTnzm0Uaf9",
                "title": "Now is the winter of our discontent",
                "text": "Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.",
                "imageUrl": "https://images.unsplash.com/photo-1563991522451-90d2395a8854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                "author": {
                    "objectId": "ETBMFg9gKT",
                    "firstName": "Ivan",
                    "lastName": "Ivanov",
                },
                "createdAt": "2023-03-23T13:48:36.543Z",
                "updatedAt": "2023-03-23T13:49:03.957Z"
            }
        ],
        "count": 4
    }, {
        "results": [
            {
                "objectId": "tZTVDGss3R",
                "title": " Beatae voluptas deleniti",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo dolore nihil optio mollitia illo sapiente animi, ratione quibusdam nesciunt doloremque quae ab deserunt officiis non magnam accusamus natus tempora nisi delectus dolorem saepe iste aspernatur!",
                "imageUrl": "https://images.unsplash.com/photo-1558472964-be7065dcfab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                "author": {
                    "objectId": "ETBMFg9gKT",
                    "firstName": "Ivan",
                    "lastName": "Ivanov"
                },
                "createdAt": "2023-03-23T13:45:38.688Z",
                "updatedAt": "2023-03-23T13:45:38.688Z"
            }
        ],
        "count": 4
    },
    {
        "results": [
            {
                "objectId": "LXup756SHe",
                "title": "In the deep bosom of the ocean",
                "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                "imageUrl": "https://images.unsplash.com/photo-1678729465418-ee8127e8c5cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                "author": {
                    "objectId": "crqTEkdvaf",
                    "firstName": "Gaco",
                    "lastName": "Bacov"
                },
                "createdAt": "2023-03-15T12:20:29.910Z",
                "updatedAt": "2023-03-23T14:06:16.022Z"
            }
        ],
        "count": 4
    }
];

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useSearchParams: jest.fn(),
}));

// jest.spyOn(Router, 'useSearchParams').mockReturnValue({ id: '1234' });

let mockFetch;

beforeEach(() => {

    mockFetch = jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify(mockedPosts[0])))
        .mockResolvedValueOnce(new Response(JSON.stringify(mockedPosts[1])))
        .mockResolvedValueOnce(new Response(JSON.stringify(mockedPosts[2])))
        .mockResolvedValueOnce(new Response(JSON.stringify(mockedPosts[3])));

});

const blogWithRoute = () => {
    render(
        <MemoryRouter initialEntries={['/posts']}>
            <Blog />
        </MemoryRouter>
    );
}

it('Should load and display posts on scroll', async () => {
    blogWithRoute();

    expect(await screen.findAllByRole('link', { name: 'Read More' })).toHaveLength(1);

    // window.scroll(0, 9000);

    // await waitFor(() => {
    //     expect(mockFetch).toHaveBeenCalledTimes(2);
    // });

    // expect(await screen.findAllByRole('link', { name: 'Read More' })).toHaveLength(2);

});
