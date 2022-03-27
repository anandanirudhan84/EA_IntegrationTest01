const { expect } = require("chai");
const { it } = require("mocha");

describe('EA API Test 02 -List out Festival And Bands names and record label',()=>{
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
               let bandname = element.bands;
               bandname.forEach(bandsname=>{
                    cy.log('Band name:'+ bandsname.name);
                    cy.log('Band record Label:'+ bandsname.recordLabel)
                   
               })
            });
            
        })


    });
    
})