
export class CSVCommon {

    GetDataFromCSV(csvFilePath) {
              
        const fs = require('fs');
        var data = fs.readFileSync(csvFilePath, 'utf8');
       var csvjson = require('csvjson');
      

        var options = {
            delimiter : ',', // optional
            quote     : '"' // optional
          };

          return csvjson.toObject(data, options);
    }

}
