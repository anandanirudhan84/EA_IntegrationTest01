const { expect } = require("chai");
const { it } = require("mocha");

describe('EA API Test 01 -Validate API Response',()=>{
    it('GET - read',()=>{
        cy.request('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals')
        .then((response)=>{
            expect(response.status).to.eq(200);
            cy.writeFile('cypress/fixtures/festival.json',response.body);
    })
    });
    it('Verify festival name',()=>{
        
        cy.fixture('festival.json').then((festival)=>{
            
            
            festival.forEach(element => {
               cy.log('Festival name:'+ element.name);
               expect(element.name).to.be.a('string')
               let bandname = element.bands;
               bandname.forEach(bandsname=>{
                expect(bandsname.name).to.be.a('string')
                expect(bandsname.recordLabel).to.be.a('string')
               })
            });
            
        })


    });
    
})