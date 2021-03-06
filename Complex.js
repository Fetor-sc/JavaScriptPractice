function Complex (real, imaginary) {
  if (isNaN(real) || isNaN(imaginary)) throw new TypeError();
  this.r = real;
  this.i = imaginary;
}

// 当前复数对象加上另外一个复数，并返回一个新的计算和值后的复数对象
Complex.prototype.add = function (that) {
  return new Complex(this.r + that.r, this.i + that.i);
};

Complex.prototype.mul = function (that) {
  return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.r * that.r);
}

Complex.prototype.mag = function () {
  return Math.sqrt(this.r * this.r + this.i * this.i);
}

Complex.prototype.neg = function () {
  return new Complex(-this.r, -this.i);
}

Complex.prototype.toString = function () {
  return "{" + this.r + "," + this.i + "}";
};

Complex.prototype.equals = function (that) {
  return that != null &&
    that.constructor === Complex &&
    this.r === that.r && this.i === that.i;
}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

Complex.parse = function (s) {
  try {
    var m = Complex._format.exect(s);
    return new Complex(parseFloat(m[1]), parseFlaot(m[2]));
  } catch (x) {
    throw new TypeError("Can't parse '" + s + "' as a complex number.");
  }
}

Complex_format = /^{([^,]+),([^}]+)\}$/;
