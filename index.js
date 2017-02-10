const times = [
  60000,
  3.6e+6,
  8.64e+7,
  6.048e+8,
  2.628e+9,
  3.154e+10,
];

function constructTimeString(unit, singularString, time, timeIndex) {
  // NOTE: we do timeIndex - 1 because the array is offset in timeFunctions.
  if (time >= 2 * times[timeIndex - 1]) {
    return `${Math.floor(time / times[timeIndex - 1])} ${unit}s ago`;
  } else {
    return singularString;
  }
}

const minutes = constructTimeString.bind(null, 'minute', 'a minute ago');
const hours = constructTimeString.bind(null, 'hour', 'an hour ago');
const days = constructTimeString.bind(null, 'day', '1 day ago');
const weeks = constructTimeString.bind(null, 'week', '1 week ago');
const months = constructTimeString.bind(null, 'month', '1 month ago');
const years = constructTimeString.bind(null, 'year', '1 year ago');

const timeFunctions = [
  () => 'just now',
  minutes,
  hours,
  days,
  weeks,
  months,
  years,
];

function binarySearchInsert(array, value) {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = low + high >>> 1;
    if (array[mid] <= value) low = mid + 1;
    else high = mid;
  }
  return low;
}

function epochAgo(timeStamp) {
  const timeDifference = Date.now() - timeStamp;
  const index = binarySearchInsert(times, timeDifference);
  const timeAgo = timeFunctions[index](timeDifference, index);
  return timeAgo;
}

module.exports = epochAgo;
