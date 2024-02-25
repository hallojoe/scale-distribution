import { scaleDistribution } from "./index"

describe("scaleDistribution", () => {
  it("should scale down the distribution if the sum exceeds the total", () => {
    const distribution = [20, 30, 50]
    const total = 100
    const [scaledDistribution, originalSum] = scaleDistribution(distribution, total)

    expect(originalSum).toBe(100)
    expect(scaledDistribution.reduce((a, b) => a + b, 0)).toBe(total)
    expect(scaledDistribution).toEqual([20, 30, 50])
  })

  it("should not scale if the sum equals the total", () => {
    const distribution = [20, 30, 50]
    const total = 100
    const [scaledDistribution, originalSum] = scaleDistribution(distribution, total)

    expect(originalSum).toBe(100)
    expect(scaledDistribution).toEqual([20, 30, 50])
  })

  it("should scale up the distribution if the sum is less than the total and scaleUp is true", () => {
    const distribution = [20, 30, 40]
    const total = 100
    const [scaledDistribution, originalSum] = scaleDistribution(distribution, total)

    expect(originalSum).toBe(90)
    expect(scaledDistribution.reduce((a, b) => a + b, 0)).toBe(total)
    expect(scaledDistribution).toEqual([
      22.22222222222222,
      33.33333333333333,
      44.44444444444444,
    ])
  })

  it("should not scale up the distribution if the sum is less than the total and scaleUp is false", () => {
    const distribution = [20, 30, 40]
    const total = 100
    const [scaledDistribution, originalSum] = scaleDistribution(distribution, total, false)

    expect(originalSum).toBe(90)
    expect(scaledDistribution.reduce((a, b) => a + b, 0)).toBe(90) // Sum should remain the same
    expect(scaledDistribution).toEqual([20, 30, 40]) // Distribution should remain unchanged
  })

  it("should return the correct original sum when the distribution is scaled up", () => {
    const distribution = [20, 30, 40]
    const total = 100
    const [_, originalSum] = scaleDistribution(distribution, total)

    expect(originalSum).toBe(90)
  })
})
