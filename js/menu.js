console.log(products)

function readerProduct() {
    var html = '';
    for (var i = 0; i < products.length; i++) {
      var item = products[i];
      var dataCat = '';
      if (i < 3) {
        dataCat = 'Oleato';
      } else if (i < 9) {
        dataCat = 'HotCoffees';
      } else {
        dataCat = 'IcedTeas';
      }
      html += `
        <div class="col-lg-4 col-sm-6 cake-box-wp" data-cat="${dataCat}">
          <div class="cake-box text-center">
            <div class="cake-img">
              <img src="${item.image}" alt="">
            </div>
            <div class="cake-title">
              <h3 class="h3-title">${item.name}</h3>
            </div>
            <div class="cake-bottom-row">
              <ul>
                <li>
                  <b>${item.price}</b>
                </li>
                <li onclick="saveIdProducts(${item.id})">
                  <button class="cake-add-btn">
                    <i class="uil uil-plus"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `;
    }
    document.querySelector('#menu-cake').innerHTML = html;
  }
  

readerProduct();

function saveIdProducts(id) {
    saveLocalStorage(id, 'ID Product');
}

function saveLocalStorage(ob, key) {
    var str = JSON.stringify(ob);
    localStorage.setItem(key, str);
}

function getLocalStorage(key) {
    if (localStorage.getItem(key)) {
        var str = localStorage.getItem(key);
        var ob = JSON.parse(str);
        return ob;
    }
    return undefined;
}
