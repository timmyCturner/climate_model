import csv
import json

# Define the CSV file name and JSON file name
csv_file_N = "nitrous-oxide-emissions.csv"
json_file = "partialEmissions1.json"
json_output = "combined_data.json"  # Name of the output JSON file

# Read data from the JSON file into a dictionary
with open(json_file, mode="r") as json_file:
    json_data = json.load(json_file)
i=0
# Open the CSV file and create a CSV reader
with open(csv_file_N, mode="r") as csv_file_N:
    csv_reader_N = csv.DictReader(csv_file_N)

    # Create a list to store merged data
    combined_data = []

    #print(json_data)
    # Iterate through the CSV rows
    for row_N in csv_reader_N:
        i+=1
        #print(row_N["Code"])
        # Extract the key from the CSV row, assuming "YourMatchingColumn" is the key
        # Extract the field (e.g., "Entity") for matching
        field_to_match = row_N["Entity"]
        year_to_match = row_N["Year"]
        # Search for a matching entity in the JSON data
        matching_json_entry = None
        for json_entry in json_data:
            if json_entry["Entity"] == field_to_match and json_entry["Year"] == year_to_match:
                matching_json_entry = json_entry
                break

        if matching_json_entry:
            print(i)
            # Merge the data from JSON with data from the CSV
            merged_row = {
                "Entity": matching_json_entry["Entity"],
                "Code": matching_json_entry["Code"],
                "Year": matching_json_entry["Year"],
                "C": matching_json_entry["Annual greenhouse gas emissions in CO2 equivalents"],
                "M": matching_json_entry["Annual methane emissions in CO2 equivalents"],
                "N": row_N["Annual nitrous oxide emissions in CO2 equivalents"]
            }
            combined_data.append(merged_row)

# Write the combined data to a new JSON file
with open(json_output, mode="w") as json_output_file:
    json.dump(combined_data, json_output_file, indent=4)

print("Combined data saved to JSON file.")
