import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { AuthContext } from '../../contexts/AuthContext';
import Comment from './Comment';

const mockDispatch = jest.fn();
const mockSetLoading = jest.fn();

const mockCommentEdited = {
    "objectId": "214y9blWgL",
    "text": "My first comment",
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
        "imageUrl": "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        "createdAt": "2023-03-10T13:03:14.317Z"
    },
    "createdAt": "2023-03-14T13:38:50.863Z",
    "updatedAt": "2023-03-19T20:16:01.199Z"
};

const mockComment = {
    "objectId": "214y9blWgL",
    "text": "My first comment",
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
        "imageUrl": "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
        "createdAt": "2023-03-10T13:03:14.317Z"
    },
    "createdAt": "2023-03-14T13:38:50.863Z",
    "updatedAt": "2023-03-14T13:38:50.863Z"
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
}

const mockCommentAuthor = {
    "objectId": "crqTEkdvaf",
    "firstName": "Gaco",
    "lastName": "Bacov",
    "username": "gaconi",
    "email": "gaco@abv.bg",
    "imageUrl": "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
    "createdAt": "2023-03-10T13:03:14.317Z",
    "roles": [
        "user",
        "author"
    ]
}

const renderWithContext = (user, comment, dispatch, setLoading) => {
    return render(
        <AuthContext.Provider value={{ user }}>
            <Comment comment={comment} dispatch={dispatch} setLoading={setLoading} />
        </AuthContext.Provider>
    );
}

it('Should display comment text, author and created time', async () => {
    renderWithContext(mockUser, mockComment);

    expect(await screen.findByText(mockComment.text)).toBeInTheDocument();
    expect(await screen.findByText(`${mockComment.owner.firstName} ${mockComment.owner.lastName}`)).toBeInTheDocument();
    expect(await screen.findByText(new Date(mockComment.createdAt).toUTCString())).toBeInTheDocument();

});

it('Should display if comment is edited', async () => {
    renderWithContext(mockUser, mockCommentEdited);

    expect(await screen.findByText(`Edited: ${new Date(mockCommentEdited.updatedAt).toUTCString()}`)).toBeInTheDocument();
    expect(screen.queryByText(new Date(mockCommentEdited.createdAt).toUTCString())).not.toBeInTheDocument();
});

it('Should not display control buttons for nonowner', () => {
    renderWithContext(mockUser, mockComment);

    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
});

it('Should display control buttons for owner', async () => {
    renderWithContext(mockCommentAuthor, mockComment);

    expect(await screen.findByText('Edit')).toBeInTheDocument();
    expect(await screen.findByText('Delete')).toBeInTheDocument();
});

it('Should display edit form on edit click', async () => {
    renderWithContext(mockCommentAuthor, mockComment);

    fireEvent.click(await screen.findByText('Edit'));

    expect(await screen.findByText('Cancel')).toBeInTheDocument();
    expect(await screen.findByText('Update')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('Your comment here')).toHaveTextContent(mockComment.text);

    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
    expect(screen.queryByText('Delete')).not.toBeInTheDocument();
});

it('Should call update fn on update click if text value is different', async () => {
    const mockFetch = jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify({
            "updatedAt": "2023-03-29T09:48:32.382Z"
        })));

    const updatedComment = 'updated comment';

    renderWithContext(mockCommentAuthor, mockComment, mockDispatch, mockSetLoading);

    fireEvent.click(await screen.findByText('Edit'));

    const input = await screen.findByPlaceholderText('Your comment here');

    fireEvent.change(input, { target: { value: [updatedComment] } });

    expect(await screen.findByPlaceholderText('Your comment here')).toHaveTextContent(updatedComment);

    fireEvent.click(screen.getByText('Update'));

    await waitFor(() => {
        expect(mockDispatch.mock.calls).toHaveLength(1);
        expect(mockSetLoading.mock.calls).toHaveLength(2);
        expect(mockFetch.mock.calls).toHaveLength(1);

        expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
        expect(screen.queryByText('Update')).not.toBeInTheDocument();
        expect(screen.queryByText('Edit')).toBeInTheDocument();
        expect(screen.queryByText('Delete')).toBeInTheDocument();
    });
});

it('Should not call update fn on update click if text value is the same', async () => {

    const mockFetch = jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify({
            "updatedAt": "2023-03-29T09:48:32.382Z"
        })));

    renderWithContext(mockCommentAuthor, mockComment, mockDispatch, mockSetLoading);

    fireEvent.click(await screen.findByText('Edit'));

    const input = await screen.findByPlaceholderText('Your comment here');

    fireEvent.change(input, { target: { value: [mockComment.text] } });

    expect(await screen.findByPlaceholderText('Your comment here')).toHaveTextContent(mockComment.text);

    fireEvent.click(screen.getByText('Update'));

    await waitFor(() => {
        expect(mockDispatch.mock.calls).toHaveLength(0);
        expect(mockSetLoading.mock.calls).toHaveLength(0);
        expect(mockFetch.mock.calls).toHaveLength(0);

        expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
        expect(screen.queryByText('Update')).not.toBeInTheDocument();
        expect(screen.queryByText('Edit')).toBeInTheDocument();
        expect(screen.queryByText('Delete')).toBeInTheDocument();
    });
});

it('Should call fetch fn on delete', async () => {

    const mockFetch = jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify({})));

    renderWithContext(mockCommentAuthor, mockComment, mockDispatch, mockSetLoading);

    fireEvent.click(await screen.findByText('Delete'));

    await waitFor(() => {
        const deleteBtn = within(document.querySelector('.confirm-container')).getByText('Delete');
        fireEvent.click(deleteBtn);
    });

    await waitFor(() => {
        expect(mockDispatch.mock.calls).toHaveLength(1);
        expect(mockSetLoading.mock.calls).toHaveLength(2);
        expect(mockFetch.mock.calls).toHaveLength(1);
    });
});