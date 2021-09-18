export default class Utils {
  static limit(src: number, a: number, b: number) {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    if (src < min) {
      return min
    }
    if (src > max) {
      return max
    }
    return src
  }
}
