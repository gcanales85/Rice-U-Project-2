import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

try:
    db_uri = os.environ['DATABASE_URL']
except KeyError:
    db_uri = "postgres://postgres:password1@localhost:5432/unemployment_db"

print(db_uri)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri

db = SQLAlchemy(app)


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/states")
def states():
    results = db.session.query(states).all()

    return jsonify(results)


if __name__ == "__main__":
    app.run()
