# Time Ranges Merger

A Node.js module to merge discontinuous time ranges within a given threshold.

## Installation

No external dependencies required. Just copy the `mergeTimeRanges.js` file to your project.

## Usage
```javascript
const { mergeTimeRanges } = require('./mergeTimeRanges.js');

const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;

const result = mergeTimeRanges(ranges, threshold);
console.log(result);
// Output: [[1000, 2000], [2500, 4100], [8000, 9500]]
```

## Testing

Run the test file:
```bash
node test.js
```

## Algorithm

1. Sort ranges by start time
2. Iterate through sorted ranges
3. Merge ranges if gap <= threshold
4. Return merged non-overlapping ranges

## Time Complexity

O(n log n) - due to sorting

## Author

[Sheikh Zainuddin]
