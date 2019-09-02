# Angular Media Player

## Angular Material

[Documentation](https://material.angular.io/)
[The Missing Guide to Angular Material](https://ultimatecourses.com/blog/the-missing-guide-to-angular-material)

- Step 1: ng add @angular/material (Custom Theme, HammerJS and Animations)
- Step 2: modify custom theme colors (primary, accent, warn) from styles.scss
- Step 3: modify che font from Roboto to Roboto Mono from index.html and styles.scss
- Step 4: create a Material module that will import (and export) a variety of common angular material modules that we can then import into our other app modules

## Angular i18n localization

[Documentation](https://angular.io/guide/i18n)
[XLF Merge Tool](https://xlftool.com/)

- Step 1: Apply the i18n directives for text to translate
- Step 2: Create a npm script 'extract' like: "extract": "ng xi18n --output-path=src/locale"
- Step 3: Generate the translation file with 'npm run extract'
- Step 4: Make a copy of the messages.xlf file, specifying the locale
- Step 5: In the messages.LOCALEID.xlf file, duplicate all source nodes, changing the tag in target. You can now translate the text inside the target node
- Step 6: Add serve and build configurations for the new locale
- Step 7: Create new npm scripts for serving and building the Angular app with the new locale
