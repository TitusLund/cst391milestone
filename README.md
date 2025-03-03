# Milestone 3

- Author: Titus Lund
- Course: CST-391
- Date: 3/2/25

## Introduction

This milestone tested our ability to utilize express to build a backend API that handles full CRUD.

## Executive Summary

For my milestone project I am building an online ecommerce store. In this specific milestone I implemented API calls to handle full CRUD for my products, and full CRUD for my users.

## Unfinished

In our class we have not covered any form of authentication/authorization/session management. Because of this, the /login, /logout, /checkout, and all /cart API endpoints are not yet implemented as these all require authentication/session management. These will be implemented at a later date once we cover these concepts.

## Recordings

- API Endpoint demonstration: https://www.loom.com/share/ee2a94e4fab14ed0aab8124390c92323?sid=b8b42fa1-130b-4af3-a734-8da541aaaabe


## Endpoints:

|Method|Link|Path Variable / Body|Implemented|
|--|--|--|--|
|GET|http://localhost:3000/||Yes|
|GET|http://localhost:3000/products/search/:productId|productId=2|Yes|
|GET|http://localhost:3000/products/filter|JSON|Yes|
|POST|http://localhost:3000/products/createProduct|JSON|Yes|
|PUT|http://localhost:3000/products/update/:productId|productId=2, JSON|Yes|
|DELETE|http://localhost:3000/products/delete/:productId|productId=2|Yes|
|GET|http://localhost:3000/user/search/:username|username=Titus|Yes|
|POST|http://localhost:3000/user/create|JSON|Yes|
|PUT|http://localhost:3000/user/update/:userId|userId=2, JSON|Yes|
|DELETE|http://localhost:3000/user/delete/:userId|userId=2|Yes|
|POST|http://localhost:3000/login|JSON|No|
|POST|http://localhost:3000/logout|JSON|No|
|POST|http://localhost:3000/checkout||No|
|GET|http://localhost:3000/cart||No|
|POST|http://localhost:3000/cart/add/:productId|productId=2|No|
|DELETE|http://localhost:3000/cart/remove/:productId|productId=2|No|


## JSON Parameters

#### Filter Products
```json
{
    "stud_length": "",
    "stud_width": "",
    "color": "green",
    "type": ""
}
```
#### Create Product

```json
{
    "studLength": "2",
    "studWidth": "2",
    "color": "green",
    "type": "brick",
    "quantity": 45,
    "price": 1.11
}
```
#### Modify Product
```json
{
    "studLength": "4",
    "studWidth": "4",
    "color": "green",
    "type": "brick",
    "quantity": 45,
    "price": 1.11
}
```
#### Create User
```json
{
    "username": "Titus3",
    "password": "password",
    "email": "titus3@website.com",
    "userType": "USER"
}
```
#### Modify User
```json
{
    "username": "modifiedUser",
    "password": "password",
    "email": "titusmodify@website.com",
    "userType": "USER"
}
```
## Conclusion

In this milestone we demonstrated our ability to build a full CRUD app. I demonstrated this by implementing full CRUD for my users and products.