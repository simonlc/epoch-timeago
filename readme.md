# Epoch Time Ago

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][cover]][cover-badge]

As the name implies, only epoch time (unix time) can be used. There is zero configuration. The output format is similar to what you would find on Reddit.

## Examples:

- **seconds** > just now
- **minutes** > a minute ago, 15 minutes ago
- **hours** > an hour ago, 2 hours ago
- **days** > 1 day ago, 2 days ago
- **weeks** > 1 week ago, 3 weeks ago
- **months** > 1 month ago, 5 months ago
- **years** > 1 year ago, 2 years ago

## Install

`npm install -S epoch-timeago`

## Usage

Simply pass a unix timestamp, and get a time ago formated string.

```jsx
import timeAgo form 'epoch-timeago';

const timeSince = timeAgo(Date.now() - 60000 * 10);
// '10 minutes ago'
```

### In React

```jsx
import React from 'react';
import timeAgo form 'epoch-timeago';

const TimeAgo = ({ time }) =>
  <time datetime={new Date(time).toISOString()}>{timeAgo(time)}</time>

...

const epochTimeStamp = Date.now() - 60000 * 22;
<TimeAgo time={epochTimeStamp} />
```

[npm]: https://img.shields.io/npm/v/epoch-timeago.svg
[npm-url]: https://npmjs.com/package/epoch-timeago

[deps]: https://david-dm.org/simonlc/epoch-timeago.svg
[deps-url]: https://david-dm.org/simonlc/posthtm-minify-classnames

[build]: https://travis-ci.org/simonlc/epoch-timeago.svg?branch=master
[build-badge]: https://travis-ci.org/simonlc/epoch-timeago?branch=master

[cover]: https://coveralls.io/repos/github/simonlc/epoch-timeago/badge.svg?cache
[cover-badge]: https://coveralls.io/github/simonlc/epoch-timeago?branch=master
