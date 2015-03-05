# Custom MediaElementJS Skins

Easily create custom skins for [MediaElementJS](https://github.com/johndyer/mediaelement).

![Screenshot](http://i.imgur.com/T8q1u9G.jpg)

## Installation

### Bower

```
bower install mediaelement-skin
```

## Usage

Import the main SASS file.

``` scss
@import "bower_components/mediaelement-skin/mediaelement-skin";
```

### Settings

Add a map in your SASS build to overwrite any of the default settings

``` scss
$mejs-settings: (
  background: #333,
  total-color: #444,
  current-color: #AAA,
  loaded-color: #666,
  volume-total-color: #444,
  volume-current-color: #85C028,
  border-radius: 0,
);
```

## Requires

- SASS/Compass

## Support

- Modern Browsers, IE9+
- MediaElement v2.16.3




