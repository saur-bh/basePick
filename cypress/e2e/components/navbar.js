/**
 * Class representing navBac component.
 */

export default class Navbar {
/**
 * Function to click on logo of the wikipedia page.
 * @example
 * Navbar.clickOnLogo();
*/

	clickOnLogo() {
		cy.get('#p-logo').click();
	}
  
}