(function() {
  'use strict';

  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  btn.addEventListener('click', function() {
    // A. 300 (payLess) ... 100 (shart) 不足
    // B. 400 (payMore) ... 200 (over) 余り
    // payLess = 1000 / 3;        // 333.333...
    // payLess = 1000 / 3 / 100;  // 3.33333...
    payLess = Math.floor(1000 / 3 / 100) * 100;   // 300  小数点以下切捨て
    short = 1000 - (300 * 3);     // 100不足
    payMore = Math.ceil(1000 / 3 / 100) * 100;    // 400  小数点以下切上げ
    over = Math.abs(1000 - (400 * 3));        // 200余り

  });
})();
