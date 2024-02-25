/**
 * Scale a distribution array such that its elements sum up to a specified total.
 * @param distribution - The distribution array to be scaled.
 * @param total - The desired total sum of the distribution elements (default is 100).
 * @param scaleUp - A boolean flag indicating whether to scale up the distribution if the sum is less than the total (default is true).
 * @returns An array containing the scaled distribution and the sum of the original distribution.
 */
export function scaleDistribution(distribution: number[], total: number = 100, scaleUp: boolean = true): [number[], number] {

  // Calculate the sum of the original distribution
  const originalSum = distribution.reduce((a, b) => a + b, 0)

  // If scaleUp is true and the sum is less than the total, scale up the distribution
  if (scaleUp && originalSum < total) {
    distribution.forEach((value, index) => distribution[index] = (value / originalSum) * total)
  }

  // If the sum exceeds the desired total, scale down each element of the distribution
  if (originalSum > total) {
    distribution.forEach((value, index) => distribution[index] = (value / originalSum) * total)
  }

  // Return the scaled distribution array and the sum of the original distribution
  return [distribution, originalSum]
}
