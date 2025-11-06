/**
 * Merges discontinuous time ranges within a given threshold.
 *
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
  // Handle empty input
  if (!ranges || ranges.length === 0) {
    return [];
  }

  // Handle single range
  if (ranges.length === 1) {
    return [[ranges[0][0], ranges[0][1]]];
  }

  // Step 1: Sort ranges by start time
  const sortedRanges = ranges.slice().sort((a, b) => a[0] - b[0]);

  // Step 2: Start with the first range
  const merged = [];
  let currentStart = sortedRanges[0][0];
  let currentEnd = sortedRanges[0][1];

  // Step 3: Iterate through sorted ranges
  for (let i = 1; i < sortedRanges.length; i++) {
    const nextStart = sortedRanges[i][0];
    const nextEnd = sortedRanges[i][1];

    // Calculate the gap between current range end and next range start
    const gap = nextStart - currentEnd;

    // Check if ranges should be merged
    // Merge if: gap <= threshold (includes overlapping and touching ranges)
    if (gap <= threshold) {
      // Extend the current range to include the next range
      // Take the maximum of current end and next end
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      // Gap is too large, save the current range and start a new one
      merged.push([currentStart, currentEnd]);
      currentStart = nextStart;
      currentEnd = nextEnd;
    }
  }

  merged.push([currentStart, currentEnd]);

  return merged;
};

export { mergeTimeRanges };
