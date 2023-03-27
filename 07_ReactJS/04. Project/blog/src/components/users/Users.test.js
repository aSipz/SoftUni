import { render, screen } from '@testing-library/react';

const users = [
    {
        "results": [
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
            }
        ]
    },
    {
        "results": [
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
    }
];

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(users)
        })
    );
});

