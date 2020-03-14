export function fltToDecimal2 (x) {
  var f = parseFloat(x);
  if (isNaN(f) || f === 0) {
    return 0;
  }
  var fn = Math.round(x * 100) / 10000;
  var s = fn.toString();
  let spot = s.indexOf('.') + 3;
  if (spot > 2) {
    s = s.substring(0, spot);
  }
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}