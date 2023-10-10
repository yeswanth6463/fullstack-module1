from flask import Flask
from flask import render_template
from flask import request
from flask import make_response
app = Flask (__name__)
# CREATE A COOKIE
@app.route('/')
def index():
    
    cookie = make_response ("Creating a cookie")
    cookie.set_cookie('name', 'Suman Gangopadhyay', max_age=60*60)
    return (cookie)
# READ THE COOKIE
@app.route('/read')
def read_cookie():
    if request.cookies.get('name'):
            cookie = make_response ("Display Cookie: {}".format(request.cookies.getrequest.cookies.get('name')))
    else:
        cookie= make_response ("Creating a cookie")
        cookie.set_cookie ('name', 'Priya', max_age = 60*60)
        return (cookie)

if __name__ == '_main__':
        app. run(debug=True, port=5000)