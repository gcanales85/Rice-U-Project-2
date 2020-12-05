import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
import pandas as pd

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
    return("This")
    # return render_template("index.html")


@app.route("/api/states")
def states():
    df = pd.read_sql_query("SELECT * FROM states", db.engine)
    return df.to_json(orient='records')


if __name__ == "__main__":
    app.run(debug=True)
