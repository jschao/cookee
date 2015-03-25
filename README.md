# cookee

[![Build Status](https://travis-ci.org/jschao/cookee.svg?branch=master)](https://travis-ci.org/jschao/cookee)

cookee provides an easy interface for managing cookies in the browser.

## install

```
$ npm install cookee
```

## use

```
var cookie = require('cookee');
```

### get

#### cookie([name]);

```javascript
cookie();              // => { name: 'value' };
cookie('name');        // => 'value'
cookie('nonexistent'); // => undefined
```

### set

#### cookie(name, value, [options]);

```javascript
cookie('name', 'value');                    // session cookie
cookie('name', 'value', { expires: 3600 }); // one hour expiration
```

##### options

```javascript
{
  expires: Date | Number, // expiration date or seconds until expiration
  domain: String,
  path: String,
  secure: Boolean
}
```

### remove

#### cookie(name, null, [options]);

```javascript
cookie('name', null);
```

## test

```
$ npm test
```

## license

MIT
