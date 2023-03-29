import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Like from './Like';

const mockPost = {
    "objectId": "rgGHKZInbh",
    "title": "My second post",
    "author": {
        "objectId": "SazYTpcjCg",
    },
    "createdAt": "2023-03-12T20:49:51.249Z",
    "updatedAt": "2023-03-26T20:29:17.993Z",
    "likes": [
        {
            "objectId": "ePgBzWHmal",
            "post": {
                "__type": "Pointer",
                "className": "Post",
                "objectId": "rgGHKZInbh"
            },
            "owner": {
                "__type": "Pointer",
                "className": "_User",
                "objectId": "vGh5fzhuVS"
            },
            "createdAt": "2023-03-13T20:28:55.089Z",
            "updatedAt": "2023-03-13T20:28:55.089Z"
        },
        {
            "objectId": "LjpeF2VpX0",
            "post": {
                "__type": "Pointer",
                "className": "Post",
                "objectId": "rgGHKZInbh"
            },
            "owner": {
                "__type": "Pointer",
                "className": "_User",
                "objectId": "7ZB0wYBn4D"
            },
            "createdAt": "2023-03-14T15:03:34.025Z",
            "updatedAt": "2023-03-14T15:03:34.025Z"
        },
        {
            "objectId": "Xnj22QOeZc",
            "post": {
                "__type": "Pointer",
                "className": "Post",
                "objectId": "rgGHKZInbh"
            },
            "owner": {
                "__type": "Pointer",
                "className": "_User",
                "objectId": "crqTEkdvaf"
            },
            "createdAt": "2023-03-23T14:07:00.171Z",
            "updatedAt": "2023-03-23T14:07:00.171Z"
        }
    ]
};

const mockUser = {
    "objectId": "cld9BBTJOq",
    "firstName": "Katia",
    "lastName": "Petrova",
    "username": "kat",
    "email": "k.pet@abv.bg",
    "imageUrl": "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "createdAt": "2023-03-21T13:02:17.762Z",
    "roles": [
        "user"
    ]
};

const mockUserLiked = {
    "objectId": "7ZB0wYBn4D",
    "firstName": "Elon",
    "lastName": "Musk",
    "username": "starship",
    "email": "musk@gmail.com",
    "createdAt": "2023-03-14T15:03:18.587Z",
    "updatedAt": "2023-03-23T13:56:22.650Z",
    "roles": [
        "user"
    ]
};

const mockDispatch = jest.fn();

const renderWithContext = (user, post, dispatch) => {
    return render(

        <AuthContext.Provider value={{ user }}>
            <MemoryRouter initialEntries={[`/posts/${post.objectId}/details`]}>
                <Like dispatch={dispatch} post={post} />
            </MemoryRouter>
        </AuthContext.Provider>
    );
}

it('Should show Like button if it is not liked', async () => {
    renderWithContext(mockUser, mockPost);

    expect(await screen.findByText('Like')).toBeInTheDocument();
    expect(screen.queryByText('Liked')).not.toBeInTheDocument();
});

it('Should show Liked button if it is liked', async () => {
    renderWithContext(mockUserLiked, mockPost);

    expect(await screen.findByText('Liked')).toBeInTheDocument();
    expect(screen.queryByText('Like')).not.toBeInTheDocument();
});

it('Should dislike when liked button is clicked', async () => {
    const mockFetch = jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify({})));

    renderWithContext(mockUserLiked, mockPost, mockDispatch);

    fireEvent.click(await screen.findByText('Liked'));

    await waitFor(() => {
        expect(mockDispatch.mock.calls).toHaveLength(1);
        expect(mockFetch.mock.calls).toHaveLength(1);
    });

});

it('Should like when like button is clicked', async () => {
    const mockFetch = jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify({})));

    renderWithContext(mockUser, mockPost, mockDispatch);

    fireEvent.click(await screen.findByText('Like'));

    await waitFor(() => {
        expect(mockDispatch.mock.calls).toHaveLength(1);
        expect(mockFetch.mock.calls).toHaveLength(1);
    });

});
