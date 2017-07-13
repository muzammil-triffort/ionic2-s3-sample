import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import AWS = require('aws-sdk'); 

@Injectable()
export class S3Manager {
 
s3Setup()
  {
   var credentials = new AWS.CognitoIdentityCredentials({ IdentityPoolId: "your-cognito-pool-id" });
   AWS.config.credentials = credentials;
   AWS.config.region = 'us-west-2'; // your aws region

    var s3 = new AWS.S3();

    let params = {
    Bucket: 'your-bucket-name',
    Delimiter: '/' //if you want all folders, subfolder and files, you can remove delimiter key.
    };

    //console.log (JSON.stringify(params));

    s3.listObjects(params, function(error, data) 
    {
      if (error) 
        {
          console.log(error, error.stack); // an error occurred
        }      
      else
        {
          console.log(JSON.stringify(data));        
        }    
    });
}
  constructor() 
  {
  }

}
