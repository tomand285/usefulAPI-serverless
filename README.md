# useful API - serverless #

Creates AWS lambda functions and associated AWS resources for the "usefulapi-serverless" service

### What is this repository for? ###

To house all of my one-off API ideas. This is the serverless version of this API.

### How do I get set up? ###

* Follow [this guide](https://serverless.com/framework/docs/getting-started/) to get the initial Serverless Framework set up.
* Run the following commands:
```
serverless install --url https://github.com/tomand285/usefulAPI-serverless
```
```
cd usefulAPI-serverless
```
```
sls deploy
```
### Architecture Diagram ###
![Diagram of Useful API](/img/Useful-serverless.png)
### Services ###
* convert:
    * Converts an Image to Base64
    * Endpoint:
        ```
        POST https://bfhzdjfhr8.execute-api.us-east-1.amazonaws.com/dev/convert
        ```
    * Body:
        ```
        Upload the image as multipart/form-data with no JSON body
        ```
    * Response:
        ```
        {
            "image": {
                "filename": "image.jpg",
                "contentType": "image/jpeg",
                "base64": "/9j/4AAQSkZJRgABAQEBLAEsAAD/..."
            }
        }
        ```

### Contribution guidelines ###

* If you would like to make edits, please create a pull request or make an new issue.

### Who do I talk to? ###

* Andrew Tomko
* tomand285@gmail.com
