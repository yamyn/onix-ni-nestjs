# onix-ni-nestjs

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## API

### Users

### Find all users

```
   curl --location --request GET 'localhost:3030/users' \

```

### Create User

```
curl --location --request POST 'localhost:3030/api/users' \
 --header 'Content-Type: application/json' \
 --data-raw '{
    "phone": "0660202222",
    "firstName": "Mango",
    "lastName": "Mango",
    "email": "mango@gmail.com",
    "isAdmin": "false",
    "verified": "true",
}'

```

### Book

### Find all books

```
   curl --location --request GET 'localhost:3030/books' \

```

### Create User

```
curl --location --request POST 'localhost:3030/api/books' \
 --header 'Content-Type: application/json' \
 --data-raw '{
    "blogpost": 285,
    "title": "Game",
    "author": "Batya",
    "published": [
        {
            "publisher": "Veselka",
            "year": 2018
        },
        {
            "publisher": "Grin",
            "year": 2019
        }
    ],
}'

```
