## AWS S3 + API Gateway + Lambda
### Demo
[http://air-talk-react.s3-website-us-west-2.amazonaws.com/](http://air-talk-react.s3-website-us-west-2.amazonaws.com/)

### Create app
Frontend

```
> BUCKET_NAME=air-talk-react
> aws s3 mb ${BUCKET_NAME}
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

### Deploy
Frontend

```
npm run build
aws s3 sync build/ s3://#{BUCKET_NAME}
```

or

```
npm run deploy
```

## Firebase
### Demo
[http://air-talk-react-firebase.s3-website-us-west-2.amazonaws.com/](https://air-talk-react-firebase.firebaseapp.com)

### Create app
- See [this article](https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf) to create your firebase app.
- Set environment variables in `.env`
```
REACT_APP_FIREBASE_API=your_api_key
REACT_APP_FIREBASE_PROJECT_NAME=your_firebase_project_name
```

### Deploy

```
firebase deploy
```
