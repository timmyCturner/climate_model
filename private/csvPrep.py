import csv
import json
import itertools
# Define the CSV file names
csv_file_C = "total-ghg-emissions.csv"
csv_file_M = "methane-emissions.csv"
csv_file_N = "nitrous-oxide-emissions.csv"

json_file = "partialEmissions1.json"

data = []

# Initialize index counters for each file
j=0;

# Open all three CSV files and create their respective readers
with open(csv_file_C, mode="r") as csv_file_C, open(csv_file_M, mode="r") as csv_file_M, open(csv_file_N, mode="r") as csv_file_N:
    csv_reader_C = list(csv.DictReader(csv_file_C))
    csv_reader_M = list(csv.DictReader(csv_file_M))
    csv_reader_N = list(csv.DictReader(csv_file_N))

    #print(str(len(list(csv_reader_C)))+", "+str(len(list(csv_reader_M)))+", "+str(len(list(csv_reader_N))))

    for i in range(len(list(csv_reader_C))):
        row_C = csv_reader_C[i]
        row_M = csv_reader_M[i]
        row_N = csv_reader_N[j]
        merged_row = {

        "Entity": row_C["Entity"],
        "Code": row_C["Code"],
        "Year": row_C["Year"],
        "Annual greenhouse gas emissions in CO2 equivalents": row_C["Annual greenhouse gas emissions in CO2 equivalents"],
        "Annual methane emissions in CO2 equivalents": row_M["Annual methane emissions in CO2 equivalents"]

        }

        data.append(merged_row)

    # Create a list to store rows for the filtered CSV
# Write the combined data to a JSON file
with open(json_file, mode="w") as json_file:
    json.dump(data, json_file, indent=4)

print("CSV to JSON conversion completed.")
