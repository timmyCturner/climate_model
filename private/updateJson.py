import json

# Read the data from input.json
with open('altered.json', 'r') as input_file:
    json_data = json.load(input_file)

transformed_data = {}
for year, entities in json_data.items():
    transformed_data[year] = {}
    for entity_data in entities:
        entity_name = entity_data['Entity']
        transformed_data[year][entity_name] = entity_data
        del transformed_data[year][entity_name]['Entity']


# Save the restructured data to output.json
with open('updated.json', 'w') as output_file:
    json.dump(transformed_data, output_file, indent=4)
