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

var fs    = require('fs'),
    gutil = require('gulp-util');

/**
 * Creates a vinyl file descriptor for testing.
 *
 * @return {object}
 *
 */
exports.createTestFile = function createTestFile (filename) {
    return new gutil.File({
        cwd:  './specs/assets/',
        base: './specs/assets/',
        path: './specs/assets/' + filename + '.png',
        contents: fs.readFileSync('./specs/assets/' + filename + '.png')
    });
};