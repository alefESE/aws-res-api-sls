# Serverless Framework Node Rest API on AWS

This project demonstrates how to provide a AWS infrastructure, using clean architecture, serverless framework, AWS lambda functions and dynamoDB.

## Clean Architecture

The [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) has the objective of separation of concerns. It divides the software into separate layers, like the diagram below.

![The Clean Architeture diagram](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

Particularly, the serverless framework makes it much easier to implement the outermost layer of this architecture.


## Project dependencies

- AWS cli and account

## Usage

### Setup

```
npm install (install dependencies)
npm run install:db (install dynamodb local)
npm run serve (run service locally)
npm run migrate:db (migrate dynamodb)
```

note: the migrate command must be executed while services are runing locally.

### Deploy

```
npm run deploy
```
To deploy the project, you need to configure your profile from AWS Cli.

```
aws configure --profile <profile-name>
```
and edit serverless.yml provider.profile and provider.region

```
(...)

  profile: <profile-name>
  region: <region>

(...)
```

### Test

```
npm run test
```


## Invocation

After successful deployment or local serve, you can access the service from http requests.

### List employees

#### Request

```bash
curl -X GET '<url>/users'
```

#### Response

```bash
[{
  "id": "uuidv4",
  "name": "string",
  "age": "string",
  "role": "Developer|Manager"
}]
```

### Create employee

#### Request

```bash
curl -X POST '<url>/employees' -H 'Content-Type: application/json'
-d '{
    "age": "string",
    "name": "string",
    "role": "Developer|Manager"
}'
```

#### Response

```bash
{
  "id": "uuidv4",
  "name": "string",
  "age": "string",
  "role": "Developer|Manager"
}
```

### Read employee

#### Request

```bash
curl -X GET '<url>/employees/{uuidv4}'
```
#### Response

```bash
{
  "id": "uuidv4",
  "name": "string",
  "age": "string",
  "role": "Developer|Manager"
}
```

### Update employee

#### Request

```bash
curl -X PUT '<url>/employees/{uuidv4}' -H 'Content-Type: application/json'
-d '{
    "name": "string",
    "age": "string",
    "role": "Developer|Manager"
}'
```
#### Response

```bash
{
  "id": "uuidv4",
  "name": "string",
  "age": "string",
  "role": "Developer|Manager"
}
```

### Delete employee

#### Request

```bash
curl -X DELETE '<url>/employees/{uuidv4}'
```

#### Response

```bash
Success.
```