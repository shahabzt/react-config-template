export function addCommas(num: number): string {
  if (isNaN(num)) {
    return "";
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
