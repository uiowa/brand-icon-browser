# Brand Icon Browser

URL: https://icons.brand.uiowa.edu


## Adding icons to the application

1. See steps on the [Brand Icons repository](https://github.com/uiowa/brand-icons/blob/main/README.md) for adding the correct icon image file variants and tagging the icons in the `uiowa-brand-icons` package.
2. Check out a new branch. Example `icon_dep_update_aug_22`
3. Update the commit hash for the `uiowa-brand-icons` package in `package.json`'s `devDependencies`. 

Example: 

`"uiowa-brand-icons": "git+https://github.com/uiowa/brand-icons.git#6f5c33e"`

4. Run `npm update uiowa-brand-icons`
5. Create a PR to merge this branch into `main`
6. Upon merging into `main`, icons.brand.uiowa.edu should update automatically via GitHub actions within ten minutes.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies but skips generating the icon variants (for testing purposes)
```
npm run build-no-icons
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Brand Icons
See https://brand.uiowa.edu/graphic-elements for more information. 

