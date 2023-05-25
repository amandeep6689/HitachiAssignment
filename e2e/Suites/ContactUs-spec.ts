import { browser, element, by, ExpectedConditions } from "protractor";
import { using } from "jasmine-data-provider";
import { HomePage } from "../Generic_Library/HomePage";
import { Address } from "../Generic_Library/ContactUs";
import { LocatorsFilePath} from "../Generic_Library/LocatorsFilePath";

describe(' the Irvine, United States address', function(){

var homePage = new HomePage();
homePage.ContactButton();

var address = new Address();
address.Address1();
});