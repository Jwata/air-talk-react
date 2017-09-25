## AWS S3 + API Gateway + Lambda
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

### Demo
[http://air-talk-react.s3-website-us-east-1.amazonaws.com/](http://air-talk-react.s3-website-us-east-1.amazonaws.com/)
