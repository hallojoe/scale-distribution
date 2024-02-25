"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleDistribution = void 0;
/**
 * Scale a distribution array such that its elements sum up to a specified total.
 * @param distribution - The distribution array to be scaled.
 * @param total - The desired total sum of the distribution elements (default is 100).
 * @param scaleUp - A boolean flag indicating whether to scale up the distribution if the sum is less than the total (default is true).
 * @returns An array containing the scaled distribution and the sum of the original distribution.
 */
function scaleDistribution(distribution, total, scaleUp) {
    if (total === void 0) { total = 100; }
    if (scaleUp === void 0) { scaleUp = true; }
    // Calculate the sum of the original distribution
    var originalSum = distribution.reduce(function (a, b) { return a + b; }, 0);
    // If scaleUp is true and the sum is less than the total, scale up the distribution
    if (scaleUp && originalSum < total) {
        distribution.forEach(function (value, index) { return distribution[index] = (value / originalSum) * total; });
    }
    // If the sum exceeds the desired total, scale down each element of the distribution
    if (originalSum > total) {
        distribution.forEach(function (value, index) { return distribution[index] = (value / originalSum) * total; });
    }
    // Return the scaled distribution array and the sum of the original distribution
    return [distribution, originalSum];
}
exports.scaleDistribution = scaleDistribution;
