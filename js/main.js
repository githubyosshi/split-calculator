(function() {
  'use strict';

  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  btn.addEventListener('click', function() {
    var payLess;
    var short;
    var payMore;
    var over;
    var str;            // 結果の文字列
    // A. 300 (payLess) ... 100 (shart) 不足
    // B. 400 (payMore) ... 200 (over) 余り
    // payLess = 1000 / 3;        // 333.333...
    // payLess = 1000 / 3 / 100;  // 3.33333...
    payLess = Math.floor(price.value / num.value / unit.value) * unit.value;   // 300  小数点以下切捨て
    short = price.value - (payLess * num.value);     // 100不足
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;    // 400  小数点以下切上げ
    over = Math.abs(price.value - (payMore * num.value));        // 200余り
    str =
      '一人 ' + payLess + ' 円だと ' + short + ' 円足りません。' +
      '一人 ' + payMore + ' 円だと ' + over + ' 円余ります。';
    result.textContent = str;
  });
})();
