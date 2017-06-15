/* global expect */

import Simple from './../../src/reactive/simple';

describe("simple.js", function () {
    
    
     let v ;
     let SimpleItem;
     beforeEach(function () {
         SimpleItem = new Simple();
         v = 45;
         
     });
    
    
    
    
    it("pad single", function ()
    {
            
            expect("02").toEqual(SimpleItem.padMe(2));
            
        
    });
    
   it("pad double", function ()
    {
            
            expect("12").toEqual(SimpleItem.padMe(12));
            
        
    });
    
    it("pad zero", function ()
    {
            
            expect("00").toEqual(SimpleItem.padMe(0));
            
        
    });
    
   
    
    it("toString", function ()
    {
            
            expect("get a job").toEqual(SimpleItem.toString());
            
        
    });
    
    
    it("loopTest", function ()
    {
            let tString;
             for (let hrs=0;hrs< 24;hrs++)
             {
                  for (let mins=0;mins< 60;mins++)
                  { 
                      tString = "2017-02-18T"+ SimpleItem.padMe(hrs)+":"+SimpleItem.padMe(mins)+":00";
                      try {
                        let dd = new Date(tString);
                        let hrs = dd.getHours();
                         console.log(dd)
                         expect(isNaN(hrs)).toEqual(false)
                        }
                        catch(e)
                        {
                            console.log("faile "+tString)
                            fail(`failed on "${tString}"`)
                        }
                  }
             }
            
       // expect(2).toEqual((1+1))
    });
    
    
       
});
 