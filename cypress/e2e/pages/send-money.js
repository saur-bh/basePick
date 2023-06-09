import { BasePage } from '../pages/basePage';
/**
 * Class representing a WikiPage.
 * @extends BasePage
 */

export class WikiPage extends BasePage {
/**
 * Function to verify the H3 for the wikiPage.
 * @property {String} headingText main heading text.
 * @example
 * WikiPage.verifyH3title('Apollo 11');
*/
	verifyH3title(headingText){
		
		cy.get('#firstHeading span').should('have.text', headingText);
	
	}
	
};