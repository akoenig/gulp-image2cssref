/*
 * gulp-image2cssref
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var image2cssref = require('../'),
    helper       = require('./helper');

describe('The "gulp-image2cssref" plugin', function () {

    it('should throw an error if no filename has been defined', function (done) {
        try {
            image2cssref();
        } catch (e) {
            expect(e).toBeDefined();

            done();
        }
    });

    it('should throw an error if no CSS namespace has been defined', function (done) {
        try {
            image2cssref('foo.css');
        } catch (e) {
            expect(e).toBeDefined();

            done();
        }
    });

    it('should take an image and create a CSS file with a reference to this image in it', function (done) {

        var cssFilename   = 'foo.css',
            imageFilename = 'googleplus',
            namespace     = 'test',
            strom         = image2cssref(cssFilename, namespace),
            image         = helper.createTestFile(imageFilename);

        strom.on('data', function (css) {
            var selector = css.contents.toString('utf-8');

            expect(selector).toBe('.' + namespace + '.' + namespace + '-' + imageFilename + '{background-image:url(' + imageFilename + '.png);}');

            done();
        });

        strom.write(image);
        strom.end();
    });

});