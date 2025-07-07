# umlib_theme

Please contact burkebri@umich.edu if you notice any updates or changes needed based on your installed Drupal version.

This is a drupal theme for U-M Library sites. The umlib_theme uses styles from the U-M Library Design System.

## Regions & Blocks
Coming soon: block configuration- in the meantime, please use the below as a start.

The website header relies on two blocks in the header region.

Region: Header
- Site branding
- User account menu

Region: Pre-content
- Page title
- Primary tabs
- Secondary tabs

Region: Breadcrumb
- Breadcrumb

Region: Highlighted
- Status Messages

Region: Content:
- Primary admin actions
- Main content

For more information, see the Drupal umlib_theme Figma file. Ask Bridget for permission as needed.

## Website header

The website header pulls in the system site name provided in your Drupal instance (Configuration  > System > Site name) and the logo and favicons files provided with this theme (`logo.svg` and `favicon.ico`.)

Ensure that the following are checked in Appearance settings:

- [X] Use the logo supplied by the theme
- [X] Use the favicon supplied by the theme

### Setup

**To add this theme to your Drupal full stack project using composer:**

```
vi composer.json
```

and add the following below your drupal line in repositories

```
    "repositories": {
        "drupal": {
            "type": "composer",
            "url": "https://packages.drupal.org/8"
        },
         "umlib_theme": {
             "type": "package",
             "package": {
                 "name": "mlibrary/umlib_theme",
                 "version": "1.0",
                 "type": "drupal-theme",
                 "dist": {
                     "type": "zip",
                     "url": "https://github.com/mlibrary/umlib_theme/archive/refs/heads/main.zip",
                     "reference": "main"
                 }
             }
         },
```

You may also wish to alter what directory the theme is installed in

```
    "extra": {
        "enable-patching": true,
        "patchLevel": {
            "drupal/core": "-p2"
        },
        "installer-paths": {
            "core": [
                "type:drupal-core"
            ],
            "libraries/{$name}": [
                "type:drupal-library"
            ],
            "modules/contrib/{$name}": [
                "type:drupal-module"
            ],
             "themes/contrib/{$name}": [
             "themes/{$name}": [
                 "type:drupal-theme"
             ],
```

### Install

You can now run the following to get the latest version of the umlib_base theme

```
composer require mlibrary/umlib_theme
```

### Update

To get the lastest version in an existing project, you unfortunately cannot simply run composer update. Instead run

```
composer clearcache
composer reinstall mlibrary/umlib_admin
```
