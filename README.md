# umlib_theme

Please contact burkebri@umich.edu if you notice any updates or changes needed based on your installed Drupal version.

This is a Drupal theme for U-M Library sites. The umlib_theme uses styles from the U-M Library Design System and is built on Claro.

## Getting Started Using the Theme

### 1. Set the theme
After installing the theme, go to `/admin/appearance` and set the UM Library Theme as the default theme. You can use this theme for default and admin.

### 2. Adjust Block Layout

Go to `admin/structure/block` to adjust the block placement. This is important to ensure the website header, footer, and other UI elements appear as expected. The website header relies on two blocks in the header region.

Adjust the regions to have the proper blocks. Disable/remove blocks that aren't listed below.

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

### 3. Set Site name, Logo, and Favicon for Header

*Site name*:
The website header pulls in the system site name provided in your Drupal instance (`admin/config/system/site-information`) 

*Logo and favicon*:
The U-M Library logo and favicon files are provided with this theme (`logo.svg` and `favicon.ico`.)

Go to `/admin/appearance/settings` and ensure the below are checked:

- [X] Use the logo supplied by the theme
- [X] Use the favicon supplied by the theme

Do not set a site slogan.

### 4. Single-directory Components (SDC)
This theme uses two [SDC](https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components) (banner and modal).

Usage example for Banner:

```
{# Info (default, no type set) #}
{{ include('umlib_theme:banner', {
  message: 'Add your message here.'
}) }}

{# Warning banner #}
{{ include('umlib_theme:banner', {
  type: 'warning',
  message: 'This site will not be available from 5pm on Friday, March 1 through the morning of Sunday, March 3.'
}) }}

{# Explicitly set info type #}
{{ include('umlib_theme:banner', {
  type: 'info',
  message: 'We are experiencing service interruption.'
}) }}
```

Usage example for Modal:
```
{# Medium modal (default) #}
{{ include('umlib_theme:modal', {
  id: 'medium-modal',
  heading: 'Medium Modal',
  content: '<p>This is a medium modal.</p>'
}) }}
<button class="button button--secondary" type="button" data-modal-trigger="medium-modal">Open Medium</button>
```

## Theme Install and Updates (Composer)

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

You can now run the following to get the latest version of the umlib_theme

```
composer require mlibrary/umlib_theme
```

### Update

To get the lastest version in an existing project, you unfortunately cannot simply run composer update. Instead run

```
composer clearcache
composer reinstall mlibrary/umlib_theme
```
