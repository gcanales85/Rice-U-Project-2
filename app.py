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
import json
from sqlalchemy import create_engine


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
pg_user = 'postgres'
pg_password = 'password1'
db_name = 'unemployment_db2'

connection_string = f"{pg_user}:{pg_password}@localhost:5432/{db_name}"
engine = create_engine(f'postgresql://{connection_string}')

# create route that renders index.html template


@app.route("/")
def home():
    # return("This")
    return render_template("index.html")


@app.route("/api/states")
def states():

    with engine.connect() as connection:
        result = connection.execute(
            'SELECT * FROM states')
        result = [dict(row) for row in result]

        return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
