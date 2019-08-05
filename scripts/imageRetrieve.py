import urllib.request
import csv
first = False
with open ('sheet.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter = ',')
    for row in readCSV:
        if (first):
            id = row[15]
            print(id)   
            data = urllib.request.urlretrieve("https://drive.google.com/uc?export=view&id="+id, id+".jpg")
        
        first=True
        
