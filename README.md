# gulp-image2cssref [![Build Status](https://travis-ci.org/akoenig/gulp-image2cssref.png?branch=master)](https://travis-ci.org/akoenig/gulp-image2cssref)

> A gulp plugin that takes a bunch of image files and creates a CSS file in which these are referenced as background-images.


## Usage

First, install `gulp-image2cssref` as a development dependency:

```shell
npm install --save-dev gulp-image2cssref
```

Then, add it to your `gulpfile.js`:

```javascript
var image2cssref = require('gulp-image2cssref');

gulp.task('image2cssref', function () {
    gulp.src('./specs/assets/**/*.png')
        .pipe(image2cssref('my-pngs.css', 'icon', 'img/'))
        .pipe(gulp.dest('./build'));
});
```

This example would generate one CSS file `my-pngs.css` with the following structure:

```css

.icon.icon-image1 {background-image:url(img/image1.png);}
.icon.icon-image2 {background-image:url(img/image2.png);}
```

## Arguments

### image2cssref(filename, namespace, [baseDir])

`filename`

The name of the CSS file which should be generated.

`namespace`

The CSS selector namespace. Example: 'foo', generates: '.foo.foo-<imagename>'

`baseDir` (optional)

The baseDir in which the referenced images are placed (should be relative to the path of the CSS file).

## Changelog

### Version 0.1.0 (20140221)

- Initial Release.

## Author

Copyright 2014, [André König](http://iam.andrekoenig.info) (andre.koenig@posteo.de)
