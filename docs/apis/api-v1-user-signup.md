# `POST` : `/api/v1/user/signup`

## Auth Constraints

**Login:** no need
<br>
**Only For:** everyone

## URL Constraints

**Pagination:** no need
<br>
**Sortings:** no need
<br>
**Filterings:** no need
<br>
**Projections:** no need

## Payload Data
```json
{
    "name": "Conrado Woltman",
    "email": "cwoltman0@dmoz.org",
    "phone": "+8801829656916",
    "password": "VL93lf&&"
}
```

## Success Response

```json
{
    "status": "Success",
    "message": "Performed the action!",
    "data": {
        "name": "Conrado Woltman",
        "email": "cwoltman0@dmoz.org",
        "phone": "+8801829656916",
        "password": "$2a$10$t5mF4nNCkt3re4BKyywWtub4MANDRdfvSnYMetIEfL/xCqnQfXyya",
        "role": "candidate",
        "jobs": {
            "applied": []
        },
        "status": "active",
        "auth": {
            "loggedIn": false
        },
        "_id": "635c0e9ba66beb4861ca0eb5",
        "createdAt": "2022-10-28T17:17:15.915Z",
        "updatedAt": "2022-10-28T17:17:15.915Z",
        "__v": 0
    }
}
```

## Failed Response

```json
{
    "status": "Failed",
    "message": "Something went wrong!",
    "error": "users validation failed: password: Provided password is not strong enough"
}
```
