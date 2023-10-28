export function getPriceRange(priceLevel) {
  switch (priceLevel) {
    case 0:
      return '$';
    case 1:
      return '$$';
    case 2:
      return '$$$';
    case 3:
      return '$$$$';
    default:
      return '$';
  }
}
