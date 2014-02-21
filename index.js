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

var path    = require('path'),
    through = require('through2'),
    slug    = require('slug'),
    gutil   = require('gulp-util'),
    MODULE_NAME = 'gulp-image2cssref';

module.exports = function (filename, namespace, baseDir) {  

    var selectors = [],
        helpers = {};

    baseDir = baseDir || '';

    if (!filename) {
        throw new gutil.PluginError(MODULE_NAME, 'Please define the filename of the CSS file that should be generated.');
    }

    if (!namespace) {
        throw new gutil.PluginError(MODULE_NAME, 'Please define the namespace of the CSS selectors.');
    }

    /**
     *
     * Takes the given file and creates a CSS selector in which
     * this file is referenced as background-image.
     *
     */
    function referencing (file, enc, callback) {
        var shorty = slug(path.basename(file.path, path.extname(file.path))),
            name   = path.basename(file.path);

        selectors.push('.' + namespace + '.' + namespace + '-' + shorty + '{background-image:url(' + path.join(baseDir, name) + ');}');

        return callback();
    }

    /**
     * Takes all generated CSS selectors and generates
     * one CSS file from them.
     *
     */
    function finalize (callback) {
        var css = new gutil.File({
            path: filename,
            contents: new Buffer(selectors.join(gutil.linefeed))
        });

        /*jshint validthis:true */
        this.push(css);

        return callback();
    }

    return through.obj(referencing, finalize);
};