import pandas as pd
# Read the csv file in
df = pd.read_csv("state_unemployment.csv")
df.set_index("State", inplace = True)
# Save to file
df.to_html("unemployment_data.html")