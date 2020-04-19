---
title: Hosting a Flask app on AWS Lambd
date: 2019-11-02T10:44:53-04:00
---

```
$ python3.7 --version
$ mkdir lambda_flask && cd lambda_flask
$ python3.7 -m virtualenv venv
$ source venv/bin/activate
$ pip install flask virtualenv
$ pip freeze > requirements.txt
$ mkdir app && touch app/main.py
```

`app/main.py`:

```
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
```

```
$ export FLASK_APP=app/main.py
$ flask run
```

serverless stuff comes from https://medium.com/@Twistacz/flask-serverless-api-in-aws-lambda-the-easy-way-a445a8805028

```
$ yarn global add serverless
$ sls plugin install -n serverless-wsgi
```
