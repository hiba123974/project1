document.addEventListener('DOMContentLoaded', function () {
  var searchForm = document.getElementById('searchForm');
  var searchInput = document.getElementById('searchInput');
  var mainMenu = document.getElementById('mainMenu');
  var cartCount = document.getElementById('cartCount');
  var chips = document.querySelectorAll('.chip .remove');
  var qtySelects = document.querySelectorAll('.qty select');
  var sizeSelect = document.getElementById('sizeSelect');
  var sizeSelected = document.getElementById('sizeSelected');
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = searchInput && searchInput.value ? searchInput.value.trim() : '';
      if (q) {
        alert('Search: ' + q);
      }
    });
  }
  if (mainMenu) {
    mainMenu.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.tagName === 'A') {
        Array.prototype.forEach.call(mainMenu.querySelectorAll('a'), function (a) { a.classList.remove('active'); });
        t.classList.add('active');
      }
    });
  }
  if (cartCount) {
    cartCount.textContent = '0';
  }
  chips && chips.forEach(function (x) {
    x.addEventListener('click', function () {
      var chip = x.parentElement;
      if (chip) chip.remove();
    });
  });
  qtySelects && qtySelects.forEach(function (s) {
    s.addEventListener('change', function () {
      console.log('Qty changed to', s.value);
    });
  });
  if (sizeSelect) {
    var setSize = function (val) {
      if (sizeSelected) sizeSelected.textContent = val;
    };
    setSize(sizeSelect.value);
    sizeSelect.addEventListener('change', function () {
      setSize(sizeSelect.value);
    });
  }
});
