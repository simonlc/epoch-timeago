let timeSegments = [
  3.154e10,
  2.628e9,
  6.048e8,
  8.64e7,
  3.6e6,
  60000,
  -Infinity,
];

let makeTimeString = (unit, singularString) => (timeSegment, time) =>
  time >= 2 * timeSegment
    ? `${Math.floor(time / timeSegment)} ${unit}s ago`
    : singularString;

let timeFunctions = [
  makeTimeString('year', '1 year ago'),
  makeTimeString('month', '1 month ago'),
  makeTimeString('week', '1 week ago'),
  makeTimeString('day', '1 day ago'),
  makeTimeString('hour', 'an hour ago'),
  makeTimeString('minute', 'a minute ago'),
  _ => 'just now',
];

export default timeStamp => {
  let timeDifference = Date.now() - timeStamp;
  let index = timeSegments.findIndex(time => timeDifference >= time);
  let timeAgo = timeFunctions[index](timeSegments[index], timeDifference);
  return timeAgo;
}
