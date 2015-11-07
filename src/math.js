const PI = 3.141592;

function _sqrt(s, x, last) {
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
}

function sqrt(s) {
  return _sqrt(s, s/2.0, 0.0);
};

function square(s) {
  return s * s;
};

export default {
  PI: PI,
  sqrt: sqrt,
  square: square
};
