/* ---api fetch funcktion---- */
const inputApi = () => {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => displyApi(data.data))
}
inputApi();
const displyApi = phones => {
    const phoensDiv = document.getElementById('phones');
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                    <div class="card h-100">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <p class="card-title smal-header">${phone.brand}</p>
                          <h5>${phone.phone_name}</h5>
                          <div class="card-text">
                            <div class="text-left">
                              <p class=" smal-text">starting at</p>
                              <p class=" smal-text">for 24 months <br> before promotion</p>
                            </div>
                            <div class="text-right">
                              <p class=" smal-text">today  good offer for you</p>
                              <h6>25% off for you</h6>
                            </div>
                          </div>
                          <p class="smal-text price">Full price: fixd </p>
                          <a href="#" class="btn btn-primary btn-sm ml w-50">See-More</a>
                        </div>
                      </div>
        `;
        phoensDiv.appendChild(div);
    });
}
