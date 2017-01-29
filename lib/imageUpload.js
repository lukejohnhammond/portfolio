const s3 = require('./s3');
const uuid = require('uuid');

function imageUpload(req, res, next) {

  if(!req.body.image.base64) return next();

  const base64Data = req.body.image.base64.match(/base64,(.*)$/)[1];
  const mime = req.body.image.base64.match(/^data:(.*);/)[1];
  const extension = mime.replace('image/', '');
  const filename = `${uuid.v1()}.${extension}`;

  //type of data (MIME); encoding; result string
  //data:image/png;base64,sfsdfdsfsdfsdfsdfs

  console.log(process.env.AWS_BUCKET_NAME);

  s3.upload({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filename,
    Body: new Buffer(base64Data, 'base64'),
    ContentType: mime
  }, (err) => {
    console.log(err);
    if(err) return next(err);
    req.file = filename;
    next();
  });

}

module.exports = imageUpload;
