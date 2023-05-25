// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


var HtmlReporter = require('protractor-beautiful-reporter');
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {



  params:{
   url: 'https://global.hitachi-solutions.com/'
  },  

  

  allScriptsTimeout: 300000,


 specs: 
  [
  './e2e/**/ContactUs-spec.ts',
  
  ],

  capabilities: {
    directConnect: 'true',
    browserName: 'chrome',
      chromeOptions: {
        args: ["--incognito",
         '--start-maximized',
        
        //  '--window-size=1920,1080'
     
        
      //If you want to view browser remove --headless
        ],
    prefs:{
     download:{

      // promt_for_download: false,
        directory_upgrade:true,
        default_directory:'C:\\Users',
  },
    
    //args: ['--headless', '--disable-gpu', '--window-size=1600,1000']
  }
   
    },
},
  directConnect: true,
  baseUrl:'https://global.hitachi-solutions.com/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 600000,   
    print: function() {}
  },

  onPrepare() {
    
  // jasmine.getEnv().addReporter(reporter);
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

   // Close the report after all tests finish
  
    //-----------Protractor-Beautiful-Reporter--------------------//
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory:'temp/screenshots',gatherBrowserLogs:true,
        docTitle: 'my reporter'
        }).getJasmine2Reporter());

        //----Protractor-Html-Report---------------------------------//      
  
    jasmine.getEnv().addReporter(
      new SpecReporter({ spec: { displayStacktrace: true } })
    );

    var jasmineReporters = require('jasmine-reporters');
    var junitReporter = new jasmineReporters.JUnitXmlReporter({

      consolidateAll: true,
    savePath: './output/',
    filePrefix: 'xmlresults'

    });
    jasmine.getEnv().addReporter(junitReporter);

    browser.waitForAngularEnabled(false);

    //Allure report
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

   //---------------------------------------------------------------------------------
    switch (browser.baseUrl) {
      case 'uat_BH': {
        this.baseUrl = 'https://global.hitachi-solutions.com/';
        break;
      }
      
    }
    browser.get(this.baseUrl);

  },


  onComplete: function() {
    var browserName, prefs, browserVersion;
    var capsPromise = browser.getCapabilities();
    

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');
       prefs = caps.get('prefs');

      var HTMLReport = require('protractor-html-reporter');

       testConfig = {
           reportTitle: 'Test Execution Report',
           outputPath: './reports/',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: false
       };
      new HTMLReport().from('output/xmlresults.xml', testConfig);

   });

   
}

};