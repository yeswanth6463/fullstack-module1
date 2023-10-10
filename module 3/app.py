from flask import Flask
app= Flask (__name__)
@app.route('/')
def index():
 return ("this is the suman gangopadhyay's flask application")
@app.route('/about')
def about():
  return ("this is the about page of suman gangopadhyay")
if __name__ == "____main__": 
  app.run(debug = True, port=5000)