# React serverless samples
In this repository, you will see 2 different React Serverless sample implementations.  
If you want to learn about serverless architectures, read [this article](https://martinfowler.com/articles/serverless.html) which I think explains them clearly.

* [Prepare React app](#prepare-react-app)
* [BaaS pattern](#baas-pattern)
* [FaaS pattern](#faas-pattern)

## Prepare React app
Use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup your react project easily.

## BaaS pattern
> Serverless was first used to describe applications that significantly or fully depend on 3rd party applications / services (‘in the cloud’) to manage server-side logic and state. These are typically ‘rich client’ applications (think single page web apps, or mobile apps) that use the vast ecosystem of cloud accessible databases (like Parse, Firebase), authentication services (Auth0, AWS Cognito), etc. These types of services have been previously described as ‘(Mobile) Backend as a Service’, and I’ll be using ‘BaaS’ as a shorthand in the rest of this article.

BaaS (Backend as a Service) is [one of serverless architectures](https://martinfowler.com/articles/serverless.html#WhatIsServerless). and [Firebase](https://firebase.google.com/) is one of the most popular backend services.

### Demo
[https://air-talk-react-firebase.firebaseapp.com](https://air-talk-react-firebase.firebaseapp.com)

### Infrastructures and Tools
* React front-end
  * Framework: [create-react-app](https://github.com/facebookincubator/create-react-app)
  * Hosting: [Firebase Hosting](https://firebase.google.com/docs/hosting/)
  * Deployment: [Firebase CLI](https://firebase.google.com/docs/cli/)
* Serverless backend
  * Hosting: [Firebase Realtime Database](https://firebase.google.com/docs/database/)
  * Deployment: [Firebase CLI](https://firebase.google.com/docs/cli/)

### Prerequisites
* Firebase account
* Firebase CLI

### Sample code
Check out [firebase branch](https://github.com/Jwata/air-talk-react/tree/firebase)

### Create app
- See [this article](https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf) to create your firebase app
- Configure firebase api key and project name to [environment variables](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env)

```
REACT_APP_FIREBASE_API=your_api_key
REACT_APP_FIREBASE_PROJECT_NAME=your_firebase_project_name
```

### Deploy

```
> npm run build
> firebase deploy
```

## FaaS pattern
> Serverless can also mean applications where some amount of server-side logic is still written by the application developer but unlike traditional architectures is run in stateless compute containers that are event-triggered, ephemeral (may only last for one invocation), and fully managed by a 3rd party. (Thanks to ThoughtWorks for their definition in their most recent Tech Radar.) One way to think of this is ‘Functions as a service / FaaS’ . AWS Lambda is one of the most popular implementations of FaaS at present, but there are others. I’ll be using ‘FaaS’ as a shorthand for this meaning of Serverless throughout the rest of this article.

FaaS (Function as a Service) is [another serverless architectures](https://martinfowler.com/articles/serverless.html#WhatIsServerless). and [AWS Lambda](https://aws.amazon.com/lambda/) is one of the most popular implementations.

### Demo
[http://air-talk-react.s3-website-us-west-2.amazonaws.com/](http://air-talk-react.s3-website-us-west-2.amazonaws.com/)

### Infrastructures and Tools
* React front-end
  * Framework: [create-react-app](https://github.com/facebookincubator/create-react-app)
  * Hosting: [AWS S3](https://aws.amazon.com/s3/)
  * Deployment: [AWS CLI](https://aws.amazon.com/cli/)
* Serverless backend
  * Framework: [Serverless Framework](https://serverless.com/)
  * Hosting: [AWS API Gateway](https://aws.amazon.com/api-gateway/) + [AWS Lambda](https://aws.amazon.com/lambda/)
  * Deployment: [Serverless CLI](https://serverless.com/framework/docs/providers/aws/cli-reference/deploy/)

### Prerequisites
* AWS account
* AWS CLI

### Sample code
Checkout [aws branch](https://github.com/Jwata/air-talk-react/tree/aws)

### Create app
- Build [your backend APIs](https://github.com/Jwata/air-talk-serverless) with [Serverless Framework](https://github.com/serverless/serverless) separately

```
> serverless create --template aws-nodejs-ecma-script
```

- Create S3 bucket and configure settings

```
> BUCKET_NAME=air-talk-react
> aws s3 mb ${BUCKET_NAME} --region us-west-2
> aws s3 website s3://${BUCKET_NAME}/ --index-document index.html
> cat <<POLICY >> aws/s3_policy.json
{
  "Version": "2012-10-17",
  "Id": "PublicRead",
  "Statement": [
    {
      "Sid": "ReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${BUCKET_NAME}/*"
    }
  ]
}
POLICY
> aws s3api put-bucket-policy --bucket ${BUCKET_NAME} --policy file://aws/s3_policy.json
```

- Configure API endpoint to [environment variables](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env)

```
REACT_APP_API_ENDPOINT=your_api_endpoint
```

### Deploy
```
# Frontend
> npm run build
> aws s3 sync build/ s3://#{BUCKET_NAME}
 
# Backend
> serverless deploy
```

### References
- [serverless-stack.com](https://serverless-stack.com/) ... a detailed step by step tutorial
