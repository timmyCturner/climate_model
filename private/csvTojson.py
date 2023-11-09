import csv
import json

# Define the CSV file names
csv_file_C = "total-ghg-emissions.csv"
csv_file_M = "methane-emissions.csv"
csv_file_N = "nitrous-oxide-emissions.csv"

json_file = "partialEmissions.json"

data = []

# Open all three CSV files and create their respective readers
with open(csv_file_C, mode="r") as csv_file_C, open(csv_file_M, mode="r") as csv_file_M, open(csv_file_N, mode="r") as csv_file_N:
    csv_reader_C = csv.DictReader(csv_file_C)
    csv_reader_M = csv.DictReader(csv_file_M)
    csv_reader_N = csv.DictReader(csv_file_N)

    #print(str(len(list(csv_reader_C)))+", "+str(len(list(csv_reader_M)))+", "+str(len(list(csv_reader_N))))
    for row_C, row_M, row_N in zip(csv_reader_C, csv_reader_M, csv_reader_N):
        # Merge the rows from all three CSV files into a single dictionary
        merged_row = {
            "C": row_C,
            "M": row_M,
            "N": row_N
        }
        data.append(merged_row)

# Write the combined data to a JSON file
with open(json_file, mode="w") as json_file:
    json.dump(data, json_file, indent=4)

print("CSV to JSON conversion completed.")
