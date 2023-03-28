import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Users from './Users';

const users = {
    results: [
        {
            "objectId": "SazYTpcjCg",
            "firstName": "Random",
            "lastName": "Guy",
            "username": "admin",
            "email": "admin@abv.bg",
            "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
            "createdAt": "2023-03-09T10:31:23.813Z"
        },
        {
            "objectId": "crqTEkdvaf",
            "firstName": "Gaco",
            "lastName": "Bacov",
            "username": "gaconi",
            "email": "gaco@abv.bg",
            "imageUrl": "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
            "createdAt": "2023-03-10T13:03:14.317Z"
        },
        {
            "objectId": "vGh5fzhuVS",
            "firstName": "Naiden",
            "lastName": "Nikolov",
            "username": "naiNik",
            "email": "nai_nik@abv.bg",
            "imageUrl": "https://i.redd.it/8fqzw8yxpkp11.jpg",
            "createdAt": "2023-03-13T20:28:11.736Z"
        },
        {
            "objectId": "7ZB0wYBn4D",
            "firstName": "Elon",
            "lastName": "Musk",
            "username": "starship",
            "email": "musk@gmail.com",
            "imageUrl": "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230203141341-07-elon-musk-tesla-shareholder-lawsuit-0124.jpg",
            "createdAt": "2023-03-14T15:03:18.587Z"
        },
        {
            "objectId": "ETBMFg9gKT",
            "firstName": "Ivan",
            "lastName": "Ivanov",
            "username": "ivcho",
            "email": "ivan@abv.bg",
            "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "createdAt": "2023-03-21T11:55:00.424Z"
        },
        {
            "objectId": "k1ROmfEpZG",
            "firstName": "Niko",
            "lastName": "Nikolov",
            "username": "nik",
            "email": "nik@gmail.com",
            "imageUrl": "https://b1688923.smushcdn.com/1688923/wp-content/uploads/2022/05/Melbourne-Corporate-Headshots-Julia-Nance-Portraits9.jpg?lossy=1&strip=1&webp=1",
            "createdAt": "2023-03-21T11:58:45.251Z"
        },
        {
            "objectId": "PooXE74Ru9",
            "firstName": "Lora",
            "lastName": "Todorova",
            "username": "lori",
            "email": "lori@gmail.com",
            "imageUrl": "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "createdAt": "2023-03-21T13:00:59.429Z"
        },
        {
            "objectId": "cld9BBTJOq",
            "firstName": "Katia",
            "lastName": "Petrova",
            "username": "kat",
            "email": "k.pet@abv.bg",
            "imageUrl": "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "createdAt": "2023-03-21T13:02:17.762Z"
        },
        {
            "objectId": "biC5GiOilH",
            "firstName": "Todor",
            "lastName": "Todorov",
            "username": "toshi",
            "email": "tosho@abv.bg",
            "imageUrl": "https://www.photographers.ch/wp/wp-content/uploads/2016/01/PW_151015_001-farbe.jpg",
            "createdAt": "2023-03-21T14:23:39.306Z"
        },
        {
            "objectId": "QeKmjNCCQF",
            "firstName": "Peter",
            "lastName": "Petrov",
            "username": "pepi",
            "email": "pep@abv.bg",
            "imageUrl": "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
            "createdAt": "2023-03-21T14:25:20.234Z"
        },
        {
            "objectId": "J28z8QhXXy",
            "firstName": "Maria",
            "lastName": "Zaprianova",
            "username": "marcheto",
            "email": "mari@abv.bg",
            "imageUrl": "https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "createdAt": "2023-03-21T15:11:15.506Z"
        }
    ]
};

const authors = {
    results: [
        {
            "objectId": "ETBMFg9gKT",
            "firstName": "Ivan",
            "lastName": "Ivanov",
            "username": "ivcho",
            "email": "ivan@abv.bg",
            "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "createdAt": "2023-03-21T11:55:00.424Z"
        },
        {
            "objectId": "SazYTpcjCg",
            "firstName": "Random",
            "lastName": "Guy",
            "username": "admin",
            "email": "admin@abv.bg",
            "imageUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
            "createdAt": "2023-03-09T10:31:23.813Z"
        },
        {
            "objectId": "crqTEkdvaf",
            "firstName": "Gaco",
            "lastName": "Bacov",
            "username": "gaconi",
            "email": "gaco@abv.bg",
            "imageUrl": "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
            "createdAt": "2023-03-10T13:03:14.317Z"
        }
    ]
};

let fetchUsers;

beforeEach(async () => {

    fetchUsers = jest.spyOn(global, "fetch")
        .mockResolvedValueOnce(new Response(JSON.stringify(users)))
        .mockResolvedValueOnce(new Response(JSON.stringify(authors)));

});

it('Should correctly display first five results', async () => {
    render(<MemoryRouter initialEntries={['/users']}>
        <Users />
    </MemoryRouter>
    );

    expect(fetchUsers).toHaveBeenCalledTimes(2);
    expect(await screen.findByText('Ivan')).toBeInTheDocument;

    await waitFor(() => {
        const tableRows = document.querySelectorAll('tr');

        expect(tableRows).toHaveLength(6);
    });
});

it('Should show control buttons on user change status', async () => {
    render(<MemoryRouter initialEntries={['/users']}>
        <Users />
    </MemoryRouter>
    );

    fireEvent.click([...await screen.findAllByTestId('actions')][0]);

    expect(await screen.findByText('Confirm')).toBeInTheDocument();
    expect(await screen.findByText('Cancel')).toBeInTheDocument();

});

it('Should hide control buttons on cancel click', async () => {
    render(<MemoryRouter initialEntries={['/users']}>
        <Users />
    </MemoryRouter>
    );

    fireEvent.click([...await screen.findAllByTestId('actions')][0]);
    fireEvent.click(await screen.findByText('Cancel'));

    await waitFor(() => {
        expect(screen.queryByText('Confirm')).not.toBeInTheDocument();
        expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    });
});

it('Should correctly change table pages', async () => {
    render(<MemoryRouter initialEntries={['/users']}>
        <Users />
    </MemoryRouter>
    );

    await screen.findByText('Ivan');

    fireEvent.click(screen.getByTitle('Next Page'));

    await waitFor(() => {
        expect(screen.queryByText('pep@abv.bg')).toBeInTheDocument();
        expect(document.querySelector('p.pages')).toHaveTextContent('2 of 3');
    });

    fireEvent.click(screen.getByTitle('Last Page'));

    await waitFor(() => {
        expect(screen.getByText('mari@abv.bg')).toBeInTheDocument;
        expect(document.querySelector('p.pages')).toHaveTextContent('3 of 3');
    });

    fireEvent.click(screen.getByTitle('First Page'));

    await waitFor(() => {
        expect(screen.getByText('starship')).toBeInTheDocument;
        expect(document.querySelector('p.pages')).toHaveTextContent('1 of 3');
    });
});