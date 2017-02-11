import test from 'ava';
import epochAgo from './index';

// Irregular cases
test('should return seconds string with negative number', t => {
  const value = epochAgo(Date.now() + 60000);
  t.is(value, 'just now');
});

test('should return seconds string with negative number', t => {
  const value = epochAgo(String(Date.now() - 6.048e+8 * 2));
  t.is(value, '2 weeks ago');
});

// Regular cases
test('should return seconds string', t => {
  const value = epochAgo(Date.now());
  t.is(value, 'just now');
});

test('should return seconds string', t => {
  const value = epochAgo(Date.now() - 59999);
  t.is(value, 'just now');
});

test('should return minutes one', t => {
  const value = epochAgo(Date.now() - 60000);
  t.is(value, 'a minute ago');
});

test('should return minutes other', t => {
  const value = epochAgo(Date.now() - 60000 * 2);
  t.is(value, '2 minutes ago');
});

test('should return hours one', t => {
  const value = epochAgo(Date.now() - 3.6e+6);
  t.is(value, 'an hour ago');
});

test('should return hours other', t => {
  const value = epochAgo(Date.now() - 3.6e+6 * 2);
  t.is(value, '2 hours ago');
});

test('should return days one', t => {
  const value = epochAgo(Date.now() - 8.64e+7);
  t.is(value, '1 day ago');
});

test('should return days other', t => {
  const value = epochAgo(Date.now() - 8.64e+7 * 2);
  t.is(value, '2 days ago');
});

test('should return weeks one', t => {
  const value = epochAgo(Date.now() - 6.048e+8);
  t.is(value, '1 week ago');
});

test('should return weeks other', t => {
  const value = epochAgo(Date.now() - 6.048e+8 * 2);
  t.is(value, '2 weeks ago');
});

test('should return months one', t => {
  const value = epochAgo(Date.now() - 2.628e+9);
  t.is(value, '1 month ago');
});

test('should return months other', t => {
  const value = epochAgo(Date.now() - 2.628e+9 * 2);
  t.is(value, '2 months ago');
});

test('should return years one', t => {
  const value = epochAgo(Date.now() - 3.154e+10);
  t.is(value, '1 year ago');
});

test('should return years other', t => {
  const value = epochAgo(Date.now() - 3.154e+10 * 2);
  t.is(value, '2 years ago');
});

