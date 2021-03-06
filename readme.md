# Epoch TimeAgo

[![NPM][npm]][npm-url]
[![npm bundle size (minified + gzip)][minzip]][minzip-url]
![npm downloads](https://img.shields.io/npm/dt/epoch-timeago.svg)
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][cover]][cover-badge]

Convert Unix time to a relative time string e.g., "4 hours ago".

As the name implies, only epoch time (Unix time) can be used. The output format is similar to what you would find on Reddit.

There is zero configuration. Zero dependencies. Minifies to 435 bytes, and gzips to **224 bytes**. 😎

## Examples:

- **seconds** > just now
- **minutes** > a minute ago, 15 minutes ago
- **hours** > an hour ago, 2 hours ago
- **days** > 1 day ago, 2 days ago
- **weeks** > 1 week ago, 3 weeks ago
- **months** > 1 month ago, 5 months ago
- **years** > 1 year ago, 2 years ago

## Install

`yarn add epoch-timeago`

or

`npm install -S epoch-timeago`

The default build selected will depend on your bundle tool configuration. By default webpack will get the UMD build, and Rollup the esm build. If you want to override this use the following paths:

- UMD build available at `'epoch-timeago/dist'`,
- Commonjs build available at `'epoch-timeago/lib'`,
- esm build (ES6+ only) available at `'epoch-timeago/es'`.
- Source (ES6+ only) available at `'epoch-timeago/src'`.

NOTE: Builds are all minified.

## Usage

Simply pass a Unix time stamp *converted to milliseconds* (`timestampInSeconds * 1000`) and get a time ago formatted string. If your timestamps are in milliseconds no conversion is necessary.

```jsx
import timeago from 'epoch-timeago';

// Example of simple usage
const timeDiff = timeago(timestamp * 1000)

//Example of formatted string
const timeSince = timeago(Date.now() - 60000 * 10);
// '10 minutes ago'
```

### In React

```jsx
import React from 'react';
import timeago from 'epoch-timeago';

const TimeAgo = ({ time }) =>
  <time datetime={new Date(time).toISOString()}>{timeago(time)}</time>

// ...

const epochTimeStamp = Date.now() - 60000 * 22;
<TimeAgo time={epochTimeStamp} />
```

## License

MIT

[npm]: https://img.shields.io/npm/v/epoch-timeago.svg
[npm-url]: https://npmjs.com/package/epoch-timeago

[deps]: https://david-dm.org/simonlc/epoch-timeago.svg
[deps-url]: https://david-dm.org/simonlc/epoch-timeago

[build]: https://travis-ci.org/simonlc/epoch-timeago.svg?branch=master
[build-badge]: https://travis-ci.org/simonlc/epoch-timeago?branch=master

[cover]: https://coveralls.io/repos/github/simonlc/epoch-timeago/badge.svg?cache
[cover-badge]: https://coveralls.io/github/simonlc/epoch-timeago?branch=master

[minzip]: https://img.shields.io/bundlephobia/minzip/epoch-timeago.svg
[minzip-url]: https://bundlephobia.com/result?p=epoch-timeago
