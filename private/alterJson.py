import json

# Read the data from input.json
with open('combined_data.json', 'r') as input_file:
    inputData = json.load(input_file)

# Restructure the data
restructuredData = {}

for item in inputData:
    year = item['Year']

    if year not in restructuredData:
        restructuredData[year] = []

    item.pop('Year')  # Remove the "Year" key from the item
    if item["Code"]=="" or item["Code"]=="USA" or item["Code"]=="CHN" or item["Code"]=="IND":
        restructuredData[year].append(item)

# Save the restructured data to output.json
with open('altered.json', 'w') as output_file:
    json.dump(restructuredData, output_file, indent=4)
