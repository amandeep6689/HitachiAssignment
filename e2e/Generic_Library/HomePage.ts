import { browser, element, by, ExpectedConditions } from "protractor";
import { using } from "jasmine-data-provider";
import { CSVCommon } from "./CSVUtility";

import { LocatorsFilePath} from "./LocatorsFilePath";
export class HomePage {

  constructor(){

  }
      ContactButton() {

    var using = require('jasmine-data-provider');
    var input = new LocatorsFilePath();
    // const csvCredentials = input.loginInput
    const csvcomponent = input.contactUs;
    // var data_Creds=CSVCommon.prototype.GetDataFromCSV(csvCredentials);
    var data_Component=CSVCommon.prototype.GetDataFromCSV(csvcomponent);
    // using(data_Creds, function (inputData) {
    using(data_Component, function(inputData_id)  {  
    
                
         it('Click contact us button', function () {

          
          var contactUs = element(by.xpath(inputData_id.contactUs));
          browser.wait(ExpectedConditions.presenceOf(element(by.xpath(inputData_id.contactUs))));
          contactUs.click().then(function(){
          });
          
            });
         });
     };

}
