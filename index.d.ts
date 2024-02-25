/**
 * Scale a distribution array such that its elements sum up to a specified total.
 * @param distribution - The distribution array to be scaled.
 * @param total - The desired total sum of the distribution elements (default is 100).
 * @param scaleUp - A boolean flag indicating whether to scale up the distribution if the sum is less than the total (default is true).
 * @returns An array containing the scaled distribution and the sum of the original distribution.
 */
export declare function scaleDistribution(distribution: number[], total?: number, scaleUp?: boolean): [number[], number];
