import {} from './pages/homePage';
import { WikiPage } from './pages/wikiPage';

describe('Search Feature', function() {
	const searchTexts = [
		'Apollo 11',
		'Apollo 13',
		'Apollo 12',
	];
	const homePage = new HomePage(),
		wikiPage = new WikiPage();
	
	beforeEach(function() {
		homePage.navigateToUrl('/');
	});
	
	after(async function () {
		wikiPage.clearCookies();
	});
	searchTexts.forEach(searchText=>{
		it(`verify that user gets to ${searchText} page.`, function() {
			//type in the seachBox
			homePage.typeinSearchTextBox(searchText);
			//click on search button
			homePage.clickOntheSearchButton();
			// verify title
			homePage.verifyTitleOfPage(searchText);
			//verify the h3 text
			wikiPage.verifyH3title(searchText);
		});

	});
	
});