import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe('Mouse Operations', ()=>{

    it('MouseHover', ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a")
            .should('be.visible')
    })

    it('Right click', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        
        //Approach #1
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        // cy.get('.context-menu-icon-copy > span').should('be.visible')
        
        //Aproach #2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })
    it('Double click', ()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('iframe[name=iframeResult]')  // Load the frame

        //Approach #1 trigger()
        //cy.iframe('iframe[name=iframeResult]').find("button[ondblclick='myFunction()']").trigger('dblcllick')
        //cy.iframe('iframe[name=iframeResult]').find('#field2').should('have.value', 'Hello World!')

        //Approach #2 using dblclick action
        cy.iframe("iframe[name=iframeResult]").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("iframe[name=iframeResult]").find('#field2').should('have.value', 'Hello World!')
    })

    it.only('Drag and Drop using plugin', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000)
        cy.get('#box6').drag('#box106',{force:true})
    })
})