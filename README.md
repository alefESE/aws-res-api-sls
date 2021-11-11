# Serverless Framework Node Rest API on AWS

## Objective

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

_note: the migrate command must be executed while services are runing locally._

### Run

```
npm run serve
```

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

## Documentation

The functions documentation can be found [here](https://alefese.github.io/aws-res-api-sls/).

## Frameworks and libraries

- Serverless Framework
- NodeJS 14+
- Typescript
- AWS Lambda Functions
- DynamoDB
- Jest

## Use cases implemented

- [x] Create Employee
- [x] Read Employee
- [x] Update Employee
- [x] Delete Employee
- [x] List Employees
- [ ] Query Employees

## Considerations

- It's necessary to improve and implement Unit Tests and Integration Tests.
- It's necessary to improve and implement exceptions treatment.
- Although the REST calls can be performed with the services running locally, it seems reasonable that it is possible to perform tests through mockups in the documentation provided by the Swagger UI, in the "Try it out" section.
