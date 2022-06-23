const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

const constantParams = {
    Bucket:process.env.AWS_BUCKET_NAME
}

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const downloadFromS3 = (key, location) => {
    const params = {
        ...constantParams,
        Key: key,
    }

    s3.getObject(params, function(err, data) {
        if (err) {
            throw err
        }

        fs.writeFile(location, data.Body, (err) => {
            if (err) {
                throw err
            }
            console.log(`File downloaded successfully. ${location}`);
        });
    })

    return true
}

downloadFromS3('cat1.jpg', 'cat1.jpg')