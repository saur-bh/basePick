import { BasePage } from '../pages/basePage';
/**
 * Class representing a HomePage.
 * @extends BasePage
 */

export class HomePage extends BasePage {
/**
 * Function to  type in the search field of wikipedia page.
 * @property {String} text Text which needs to be serched.
 * @example
 * HomePage.typeinSearchTextBox('Apollo 11');
*/
	typeinSearchTextBox(text){
		    cy.get('#searchInput').type(text);
	};

	/**
 * Function to click on the search button.
 * @example
 * HomePage.clickOntheSearchButton();
*/
	clickOntheSearchButton(){
		cy.get('.pure-button').click();
	};

};