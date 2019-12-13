module.exports = {
	testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
	transform: {
	  '^.+\\.(ts|html)$': 'ts-jest'
	},
	transformIgnorePatterns: [
	],
	resolver: '@nrwl/jest/plugins/resolver',
	moduleFileExtensions: ['ts', 'js', 'html'],
	collectCoverage: true,
	coverageReporters: ['html'],
	verbose: true
  };
