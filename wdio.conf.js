exports.config = {
    runner: 'local',
    specs: ['./features/*/.feature'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
    }],
    framework: 'cucumber',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    cucumberOpts: {
        require: ['./stepDefinitions/*/.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failAmbiguousDefinitions: true,
        tags: [],
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    logLevel: 'info',
};