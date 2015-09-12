/**
 * then steps
 */
var co = require('co')


module.exports = function(dict) {

    this.then(/^I expect that the title is( not)* "$string"$/,
            require('../support/helper/checkTitle'))

        .then(/^I expect that element "$string" is( not)* visible$/,
            require('../support/helper/isVisible'))

        .then(/^I expect that element "$string" does( not)* exist$/,
            require('../support/helper/isExisting'))

        .then(/^I expect that element "$string" does( not)* contain the same text as element "$string"$/,
            require('../support/helper/compareText'))

        .then(/^I expect that (element|inputfield) "$string"( not)* contains the text "([^"]*)"$/,
            require('../support/helper/checkContent'))

        .then(/^I expect that the url is( not)* "$string"$/,
            require('../support/helper/checkURL'))

        .then(/^I expect that the( css)* attribute "$string" from element "$string" is( not)* "$string"$/,
            require('../support/helper/checkProperty'))

        .then(/^I expect that checkbox "$string" is( not)* selected$/,
            require('../support/helper/checkSelected'))

        .then(/^I expect that cookie "$string"( not)* contains "$string"$/,
            require('../support/helper/checkCookieContent'))

        .then(/^I expect that cookie "$string"( not)* exists$/,
            require('../support/helper/checkCookieExists'))

        .then(/^I expect that element "$string" is( not)* \d+px (broad|tall)$/,
            require('../support/helper/checkDimension'))

        .then(/^I am in$/, function(done) {
            this.browser
                .click('.profile img')
                .getText('.logged-in-as h4', function(err, val) {
                    expect( val ).to.equal("LOGGED IN AS JEFF DEVINE")
                })
                .call(done);
        })
        // .then(/^I am in$/, function(done) {
        //     var browser = this.browser
        //     co(function*() {
        //         yield browser.click('.profile img')
        //         var val = yield browser.getText('.logged-in-as h4')
        //         expect( val ).to.equal("LOGGED IN AS JEFF DEVINE")
        //     }).then(done)
        // })
        ;
};
