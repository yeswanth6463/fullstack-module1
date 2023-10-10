from flask import Flask
from flask import render_template
from flask import request
from flask import session
app = Flask (__name__)
app.config['SECRET_KEY'] = 'i_love_india'
# CREATE A SESSION
@app.route('/')
def index():
    if 'hits' in session:
        session[ 'hits'] = session.get( 'hits') +1
    else:        
        session[ 'hits'] = 1 
    return ("Total Number of Hits on the Applicat # []", format (session.get( 'hits')))
# DESTROY A SESSION
@app.route('/delete')
def delete():
     session.pop('hits', None)
     return ("Session Deleted Successfully")
if __name__ == '__main__':
    app.run(debug=True, port=5000)