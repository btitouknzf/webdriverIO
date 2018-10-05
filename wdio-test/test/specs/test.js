var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://10.9.118.48/est/webfb/wbolin000.do?Code=MTI3Nw==');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});