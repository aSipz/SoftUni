import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import * as router from 'react-router'
import { AuthContext } from '../../contexts/AuthContext';
import Post from './Post';

const mockPost = {
    "objectId": "rgGHKZInbh",
    "title": "My second post",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet reprehenderit libero saepe, expedita at non neque explicabo ullam hic quas quam omnis. Nemo commodi unde est ab aliquam adipisci vero, odio minus molestiae incidunt deleniti tempora et optio, amet corporis animi ipsa accusantium atque doloribus. \nMolestias, voluptatum corrupti minima quae exercitationem asperiores enim magnam nihil sint repellat sunt non saepe illum eligendi, ad consequatur ducimus ipsam distinctio maxime facilis optio. Nemo officiis at facere, veniam dolores doloribus adipisci! Atque, quas error autem, dolorem quod quibusdam minima laborum sed expedita, adipisci cupiditate odit consequatur nobis eveniet animi sapiente voluptatem tempore ea enim fugiat eligendi itaque. \nRepellat esse quam maxime, qui adipisci facere, commodi asperiores obcaecati a voluptas delectus iste repudiandae perferendis ea nemo porro numquam quod provident autem nobis magnam dolorum voluptates temporibus quaerat? Alias quam sunt tenetur eligendi repellat, fugiat ducimus recusandae officiis suscipit laboriosam dignissimos optio! \nOdit, illum natus laudantium rerum magnam quia, alias error corrupti, aliquam temporibus nam consequuntur? Harum dignissimos ducimus doloribus? Nihil a laborum fugit delectus provident ut quibusdam sit sapiente, totam quasi soluta fuga id laboriosam molestiae aperiam excepturi maiores enim facere sint, ipsam doloribus. Cumque voluptatibus possimus alias odio vel facere! Voluptate, quidem.\n",
    "picture": { "url": "https://images.unsplash.com/photo-1664891569632-ebc4dd321388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" },
    "author": {
        "objectId": "SazYTpcjCg",
        "firstName": "Random",
        "lastName": "Guy",
        "username": "admin",
        "email": "admin@abv.bg",
        "picture": { "url": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" },
        "createdAt": "2023-03-09T10:31:23.813Z",
        "updatedAt": "2023-03-23T13:53:12.438Z",
        "description": "To fright the souls of fearful adversaries,\nHe capers nimbly in a lady's chamber\nTo the lascivious pleasing of a lute.\nBut I, that am not shaped for sportive tricks,\nNor made to court an amorous looking-glass;\nI, that am rudely stamp'd, and want love's majesty\nTo strut before a wanton ambling nymph;\nI, that am curtail'd of this fair proportion,",
        "ACL": {
            "*": {
                "read": true
            },
            "SazYTpcjCg": {
                "read": true,
                "write": true
            }
        },
        "__type": "Object",
        "className": "_User"
    },
    "createdAt": "2023-03-12T20:49:51.249Z",
    "updatedAt": "2023-03-26T20:29:17.993Z"
};

const mockLikes = {
    "results": [
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

const mockComments = {
    "results": [
        {
            "objectId": "fiwpMSAdTA",
            "text": "I az sym tuk",
            "post": {
                "__type": "Pointer",
                "className": "Post",
                "objectId": "rgGHKZInbh"
            },
            "owner": {
                "objectId": "vGh5fzhuVS",
                "firstName": "Naiden",
                "lastName": "Nikolov",
                "username": "naiNik",
                "email": "nai_nik@abv.bg",
                "picture": { "url": "https://i.redd.it/8fqzw8yxpkp11.jpg" },
                "createdAt": "2023-03-13T20:28:11.736Z",
                "updatedAt": "2023-03-23T13:58:04.532Z",
                "ACL": {
                    "*": {
                        "read": true
                    },
                    "vGh5fzhuVS": {
                        "read": true,
                        "write": true
                    }
                },
                "__type": "Object",
                "className": "_User"
            },
            "createdAt": "2023-03-14T10:12:22.823Z",
            "updatedAt": "2023-03-14T10:12:22.823Z"
        },
        {
            "objectId": "214y9blWgL",
            "text": "My first comment1",
            "post": {
                "__type": "Pointer",
                "className": "Post",
                "objectId": "rgGHKZInbh"
            },
            "owner": {
                "objectId": "crqTEkdvaf",
                "firstName": "Gaco",
                "lastName": "Bacov",
                "username": "gaconi",
                "email": "gaco@abv.bg",
                "picture": { "url": "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" },
                "createdAt": "2023-03-10T13:03:14.317Z",
                "updatedAt": "2023-03-24T12:39:41.557Z",
                "description": "Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond she.",
                "ACL": {
                    "*": {
                        "read": true
                    },
                    "crqTEkdvaf": {
                        "read": true,
                        "write": true
                    }
                },
                "__type": "Object",
                "className": "_User"
            },
            "createdAt": "2023-03-14T13:38:50.863Z",
            "updatedAt": "2023-03-29T09:48:32.382Z"
        },
        {
            "objectId": "29AgBZLToY",
            "text": "My third comment",
            "post": {
                "__type": "Pointer",
                "className": "Post",
                "objectId": "rgGHKZInbh"
            },
            "owner": {
                "objectId": "crqTEkdvaf",
                "firstName": "Gaco",
                "lastName": "Bacov",
                "username": "gaconi",
                "email": "gaco@abv.bg",
                "picture": { "url": "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" },
                "createdAt": "2023-03-10T13:03:14.317Z",
                "updatedAt": "2023-03-24T12:39:41.557Z",
                "description": "Far quitting dwelling graceful the likewise received building. An fact so to that show am shed sold cold. Unaffected remarkably get yet introduced excellence terminated led. Result either design saw she esteem and. On ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond she.",
                "ACL": {
                    "*": {
                        "read": true
                    },
                    "crqTEkdvaf": {
                        "read": true,
                        "write": true
                    }
                },
                "__type": "Object",
                "className": "_User"
            },
            "createdAt": "2023-03-14T14:12:34.014Z",
            "updatedAt": "2023-03-29T09:32:11.336Z"
        },
        {
            "objectId": "6c2scC8CzK",
            "text": "Da se tagna i az a sega",
            "post": {
                "__type": "Pointer",
                "className": "Post",
                "objectId": "rgGHKZInbh"
            },
            "owner": {
                "objectId": "7ZB0wYBn4D",
                "firstName": "Elon",
                "lastName": "Musk",
                "username": "starship",
                "email": "musk@gmail.com",
                "picture": { "url": "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230203141341-07-elon-musk-tesla-shareholder-lawsuit-0124.jpg" },
                "createdAt": "2023-03-14T15:03:18.587Z",
                "updatedAt": "2023-03-23T13:56:22.650Z",
                "ACL": {
                    "*": {
                        "read": true
                    },
                    "7ZB0wYBn4D": {
                        "read": true,
                        "write": true
                    }
                },
                "__type": "Object",
                "className": "_User"
            },
            "createdAt": "2023-03-14T15:03:45.661Z",
            "updatedAt": "2023-03-14T15:10:47.827Z"
        }
    ]
};

const mockUser = {
    "objectId": "cld9BBTJOq",
    "firstName": "Katia",
    "lastName": "Petrova",
    "username": "kat",
    "email": "k.pet@abv.bg",
    "picture": { "url": "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    "createdAt": "2023-03-21T13:02:17.762Z",
    "roles": [
        "user"
    ]
};

const mockAuthor = {
    "objectId": "SazYTpcjCg",
    "firstName": "Random",
    "lastName": "Guy",
    "username": "admin",
    "email": "admin@abv.bg",
    "picture":{"url": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"},
    "createdAt": "2023-03-09T10:31:23.813Z",
    "updatedAt": "2023-03-23T13:53:12.438Z",
    "description": "To fright the souls of fearful adversaries,\nHe capers nimbly in a lady's chamber\nTo the lascivious pleasing of a lute.\nBut I, that am not shaped for sportive tricks,\nNor made to court an amorous looking-glass;\nI, that am rudely stamp'd, and want love's majesty\nTo strut before a wanton ambling nymph;\nI, that am curtail'd of this fair proportion,",
    "roles": [
        "user",
        "author"
    ]
};

const mockNewComment = {
    "objectId": "mVVdA8fzxj",
    "createdAt": "2023-03-29T14:04:37.294Z",
    "owner": {
        "__type": "Pointer",
        "className": "_User",
        "objectId": "cld9BBTJOq",
        "firstName": "Katia",
        "lastName": "Petrova"
    },
    "text": "sdfsdfsdfasdfs",
    "updatedAt": "2023-03-29T14:04:37.294Z"
};

const renderWithContext = (user, postId) => {
    return render(
        <AuthContext.Provider value={{ user }}>
            <router.MemoryRouter initialEntries={[`/posts/${postId}/details`]}>
                <Post />
            </router.MemoryRouter>
        </AuthContext.Provider>
    );
}

let fetchPost;

beforeEach(() => {

    fetchPost = jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify(mockPost)))
        .mockResolvedValueOnce(new Response(JSON.stringify(mockComments)))
        .mockResolvedValueOnce(new Response(JSON.stringify(mockLikes)));

});

it('Should correctly display post information with nonauthor user', async () => {
    renderWithContext(mockUser, mockPost.objectId);

    expect(await screen.findByText(new Date(mockPost.createdAt).toDateString())).toBeInTheDocument();
    expect(await screen.findByText(mockPost.title)).toBeInTheDocument();
    expect(await screen.findByText(`${mockPost.author.firstName} ${mockPost.author.lastName}`)).toBeInTheDocument();
    expect(await screen.findByText(new RegExp(mockPost.author.description.split('\n')[2], 'i'))).toBeInTheDocument();
    expect(await screen.findByText(`${mockLikes.results.length} Likes`)).toBeInTheDocument();
    expect(await screen.findByText(`${mockComments.results.length} Comments`)).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: 'Like' })).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: 'Add comment' })).toBeInTheDocument();
    expect(await screen.findByRole('link', { name: 'Comment' })).toBeInTheDocument();

    const image = await screen.findByAltText('post');
    expect(image).toHaveAttribute('src', mockPost.imageUrl);
});

it('Should correctly display post information with author user', async () => {
    renderWithContext(mockAuthor, mockPost.objectId);

    expect(await screen.findByText(new Date(mockPost.createdAt).toDateString())).toBeInTheDocument();
    expect(await screen.findByText(mockPost.title)).toBeInTheDocument();
    expect(await screen.findByText(`${mockPost.author.firstName} ${mockPost.author.lastName}`)).toBeInTheDocument();
    expect(await screen.findByText(new RegExp(mockPost.author.description.split('\n')[2], 'i'))).toBeInTheDocument();
    expect(await screen.findByText(`${mockLikes.results.length} Likes`)).toBeInTheDocument();
    expect(await screen.findByText(`${mockComments.results.length} Comments`)).toBeInTheDocument();

    expect(await screen.findByRole('link', { name: 'Edit' })).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: 'Delete' })).toBeInTheDocument();

    expect(screen.queryByRole('button', { name: 'Like' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Add comment' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Comment' })).not.toBeInTheDocument();

    const image = await screen.findByAltText('post');
    expect(image).toHaveAttribute('src', mockPost.imageUrl);
});

it('Should correctly add new comment, edit and delete it', async () => {
    const editedComment = 'Edited comment text';

    jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify(mockNewComment)))
        .mockResolvedValueOnce(new Response(JSON.stringify({})))
        .mockResolvedValueOnce(new Response(JSON.stringify({})));

    renderWithContext(mockUser, mockPost.objectId);

    fireEvent.click(await screen.findByRole('button', { name: 'Add comment' }));

    let textarea = await screen.findByRole('textbox');

    expect(textarea.textContent).toBe('');

    fireEvent.change(textarea, { target: { value: [mockNewComment.text] } });

    await waitFor(() => {
        expect(textarea.textContent).toBe(mockNewComment.text);
    });

    fireEvent.click(await screen.findByText('Post Comment'));

    await waitFor(() => {
        expect(screen.getByText(`${mockComments.results.length + 1} Comments`)).toBeInTheDocument();
        expect(screen.getByText(mockNewComment.text)).toBeInTheDocument();
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Post comment' })).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Edit' }));

    textarea = await screen.findByRole('textbox');

    expect(textarea.textContent).toBe(mockNewComment.text);

    fireEvent.change(textarea, { target: { value: editedComment } });

    await waitFor(() => {
        expect(textarea.textContent).toBe(editedComment);
    });

    fireEvent.click(await screen.findByText('Update'));

    await waitFor(() => {
        expect(screen.getByText(`${mockComments.results.length + 1} Comments`)).toBeInTheDocument();
        expect(screen.queryByText(mockNewComment.text)).not.toBeInTheDocument();
        expect(screen.getByText(editedComment)).toBeInTheDocument();
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Update' })).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
    });

    fireEvent.click(await screen.findByRole('button', { name: 'Delete' }));

    await waitFor(() => {
        const deleteBtn = within(document.querySelector('.confirm-container')).getByText('Delete');
        fireEvent.click(deleteBtn);
    });

    await waitFor(() => {
        expect(screen.getByText(`${mockComments.results.length} Comments`)).toBeInTheDocument();
        expect(screen.queryByText(editedComment)).not.toBeInTheDocument();
        expect(screen.queryByText(mockNewComment.text)).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Edit' })).not.toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument();
        expect(fetchPost.mock.calls).toHaveLength(6);
    });

});

it('Should correctly like and dislike', async () => {
    const like = {
        "objectId": "1ytrBhFT32",
        "createdAt": "2023-03-29T14:35:22.538Z",
        "owner": {
            "__type": "Pointer",
            "className": "_User",
            "objectId": "cld9BBTJOq"
        }
    };

    jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify(like)))
        .mockResolvedValueOnce(new Response(JSON.stringify({})));

    renderWithContext(mockUser, mockPost.objectId);

    fireEvent.click(await screen.findByRole('button', { name: 'Like' }));

    await waitFor(() => {
        expect(screen.getByText(`${mockLikes.results.length + 1} Likes`)).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Like' })).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Liked' })).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Liked' }));

    await waitFor(() => {
        expect(screen.getByText(`${mockLikes.results.length} Likes`)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Like' })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Liked' })).not.toBeInTheDocument();
        expect(fetchPost.mock.calls).toHaveLength(5);
    });

});

it('Should delete post, comments and likes on delete click', async () => {
    jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify({})))
        .mockResolvedValueOnce(new Response(JSON.stringify({})))
        .mockResolvedValueOnce(new Response(JSON.stringify({})))
        .mockResolvedValueOnce(new Response(JSON.stringify({})))
        .mockResolvedValueOnce(new Response(JSON.stringify({})))
        .mockResolvedValueOnce(new Response(JSON.stringify({})))
        .mockResolvedValueOnce(new Response(JSON.stringify({})));

    jest.spyOn(router, 'useParams').mockReturnValue({ postId: [mockPost.objectId] });

    const mockNavigate = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate);

    renderWithContext(mockAuthor, mockPost.objectId);

    fireEvent.click(await screen.findByRole('button', { name: 'Delete' }));

    await waitFor(() => {
        const deleteBtn = within(document.querySelector('.confirm-container')).getByText('Delete');
        fireEvent.click(deleteBtn);
    });

    await waitFor(() => {
        expect(fetchPost.mock.calls).toHaveLength(10);
        expect(mockNavigate).toHaveBeenCalledWith('/posts');
    });
});

it('Should correctly navigate to edit page', async () => {

    const mockNavigate = jest.fn();

    jest.spyOn(router, 'useParams').mockReturnValue({ postId: [mockPost.objectId] });
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate);

    renderWithContext(mockAuthor, mockPost.objectId);

    fireEvent.click(await screen.findByRole('link', { name: 'Edit' }));

    await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith(`/posts/${mockPost.objectId}/edit`, { "preventScrollReset": undefined, "relative": undefined, "replace": false, "state": undefined });
    });
});