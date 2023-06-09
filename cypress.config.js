const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportPageTitle: 'Automation Test Report for Xe.com.',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
	},
	e2e: {
		setupNodeEvents(on, config) {
			on('before:run', async details => {
				console.log('override before:run');
				await beforeRunHook(details);
			});

			on('after:run', async () => {
				console.log('override after:run');
				await afterRunHook();
			});
		},
		baseUrl:'https://www.xe.com',

	},
});