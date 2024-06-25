const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArrays) { 
let totalViews = 0;
  for (let i = 0; i < viewsArrays.length; i++) {
    totalViews += viewsArrays[i];
  }
  return totalViews / viewsArrays.length;
}

function median(viewsArrays) {
  let sortedStats = viewsArrays.sort((a, b) => a - b);
  let middleIndex = Math.floor(sortedStats.length / 2);

  if (sortedStats.length % 2 == 0) {
    return (sortedStats[middleIndex - 1] + sortedStats[middleIndex]) / 2;
  } else {
    // Odd number of elements: return the middle element
    return sortedStats[middleIndex];
  }
}
console.log("TikTok");
console.log(
  "Mean: " + mean(recentTikTokViews) + "\nMedian: " + median(recentTikTokViews)
);

console.log("Instagram");
console.log(
  "Mean: " +
    mean(recentInstagramViews) +
    "\nMedian: " +
    median(recentInstagramViews)
);

console.log("YouTube");
console.log(
  "Mean: " +
    mean(recentYouTubeViews) +
    "\nMedian: " +
    median(recentYouTubeViews)
);
