import { browser, element, by, ExpectedConditions } from "protractor";
import { using } from "jasmine-data-provider";
import { CSVCommon } from "./CSVUtility";

import { LocatorsFilePath} from "./LocatorsFilePath";
export class Address {

  constructor(){

  }
      Address1() {

    var using = require('jasmine-data-provider');
    var input = new LocatorsFilePath();
    // const csvCredentials = input.loginInput
    const csvcomponent = input.contactUs;    
    // var data_Creds=CSVCommon.prototype.GetDataFromCSV(csvCredentials);
    var data_Component=CSVCommon.prototype.GetDataFromCSV(csvcomponent);
    // using(data_Creds, function (inputData) {
    using(data_Component, function(inputData_id)  {  
    
                
         it('Validate Irvine, United state address', function () {

          
          var address1 = element(by.xpath(inputData_id.address)).getText();
          browser.wait(ExpectedConditions.presenceOf(element(by.xpath(inputData_id.address))));
          expect<any>(element(by.xpath(inputData_id.address)).getText()).toContain("Irvine");

        
         
          
            });
         });
     };

}
