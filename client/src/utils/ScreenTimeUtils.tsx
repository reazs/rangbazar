export default class Utils {
  static delay = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
}
