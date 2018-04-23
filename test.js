import test from 'ava';
import epochAgo from './es/index';

// Irregular cases
test('future date', t => {
  const actual = epochAgo(Date.now() + 60000);
  const expected = 'just now';

  t.is(actual, expected,
    'should return just now');
});

test('date in string format', t => {
  const actual = epochAgo(String(Date.now() - 6.048e+8 * 2));
  const expected = '2 weeks ago';

  t.is(actual, expected,
    'should return expected output');
});

// Regular cases
test('right now', t => {
  const actual = epochAgo(Date.now());
  const expected = 'just now';

  t.is(actual, expected,
    'should return just now');
});

test('just under under one minute', t => {
  const actual = epochAgo(Date.now() - 59999);
  const expected = 'just now';

  t.is(actual, expected,
    'should return just now');
});

test('exactly one minute', t => {
  const actual = epochAgo(Date.now() - 60000);
  const expected = 'a minute ago';

  t.is(actual, expected,
    'should return once minutes');
});

test('exactly two minutes', t => {
  const actual = epochAgo(Date.now() - 60000 * 2);
  const expected = '2 minutes ago';

  t.is(actual, expected,
    'should return other minutes');
});

test('should return hours one', t => {
  const actual = epochAgo(Date.now() - 3.6e+6);
  const expected = 'an hour ago';

  t.is(actual, expected,
    'should return once hours');
});

test('should return hours other', t => {
  const actual = epochAgo(Date.now() - 3.6e+6 * 2);
  const expected = '2 hours ago';

  t.is(actual, expected,
    'should return other hours');
});

test('should return days one', t => {
  const actual = epochAgo(Date.now() - 8.64e+7);
  const expected = '1 day ago';

  t.is(actual, expected,
    'should return once days');
});

test('should return days other', t => {
  const actual = epochAgo(Date.now() - 8.64e+7 * 2);
  const expected = '2 days ago';

  t.is(actual, expected,
    'should return other days');
});

test('should return weeks one', t => {
  const actual = epochAgo(Date.now() - 6.048e+8);
  const expected = '1 week ago';

  t.is(actual, expected,
    'should return once weeks');
});

test('should return weeks other', t => {
  const actual = epochAgo(Date.now() - 6.048e+8 * 2);
  const expected = '2 weeks ago';

  t.is(actual, expected,
    'should return other weeks');
});

test('should return months one', t => {
  const actual = epochAgo(Date.now() - 2.628e+9);
  const expected = '1 month ago';

  t.is(actual, expected,
    'should return once months');
});

test('should return months other', t => {
  const actual = epochAgo(Date.now() - 2.628e+9 * 2);
  const expected = '2 months ago';

  t.is(actual, expected,
    'should return other months');
});

test('should return years one', t => {
  const actual = epochAgo(Date.now() - 3.154e+10);
  const expected = '1 year ago';

  t.is(actual, expected,
    'should return once years');
});

test('should return years other', t => {
  const actual = epochAgo(Date.now() - 3.154e+10 * 2);
  const expected = '2 years ago';

  t.is(actual, expected,
    'should return other years');
});

