const AWS = require('aws-sdk');
require('dotenv').config();

const constantParams = {
    Bucket:process.env.AWS_BUCKET_NAME
}

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const deleteFromS3 = (key) => {
    const params = {
        ...constantParams,
        Key: key,
    }

    s3.deleteObject(params, function(err, data) {
        if (err) {
            throw err
        }
        console.log(`File successfully removed`);
    })

    return true
}

deleteFromS3('cat1.jpg')