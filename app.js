/* /* ---api fetch function---- */
const importApiLink = () => {
    fetch('https://openapi.programming-hero.com/api/phones?search=a')
        .then(res => res.json())
        .then(data =>console.log(data.data[3]))
}
importApiLink();


/* ---get input text--- */
const getInputText =()=>{
    const input = document.getElementById('input-fild');
    const inputText = input.value.toLowerCase();
    input.value = '';
    importSerchText (inputText);
    phoensDivStyle('none');
    spinner('block')
}
/* ---serch regalt fetch---- */
const importSerchText = inputValue => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDisplyserchRegalt(data.data))
}

const phoensDivStyle=style=>{
    document.querySelector('.main').style.display = (style);
}
const spinner=spin=>{
    document.querySelector('.spinner').style.display = (spin);
}
/* ---serch regalt disply show function---- */
const showDisplyserchRegalt = phones=>{
    const phoensDiv = document.getElementById('phones');
    phoensDiv.textContent = '';
    phones.forEach(phone => {
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
                          <a onclick="allDitels('${phone.slug}')" href="#" class="btn btn-primary btn-sm ml w-50">See-More</a>
                        </div>
                      </div>
        `;
        phoensDiv.appendChild(div);
    });
    phoensDivStyle('block')
    spinner('none')
}

/* ----show ditals function----- */
const allDitels= id =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
   fetch(url)
   .then(res => res.json())
   .then(data => allDitelsDisply(data.data))
}
const allDitelsDisply = phones =>{
      const ditels = document.getElementById('ditels');
       ditels.innerHTML = `
       <div class=" all-configer">
       <div class="configer-container">
         <div class="configer d-flex">
           <div class="configer-title"><h6>Name</h6></div>
           <div class="configer-text"><p>${phones.name}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>chipSet</h6></div>
           <div class="configer-text"><p>${phones.mainFeatures.chipSet}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>displaySize</h6></div>
           <div class="configer-text"><p>${phones.mainFeatures.displaySize}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>storage</h6></div>
           <div class="configer-text"><p>${phones.mainFeatures.storage}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>memory</h6></div>
           <div class="configer-text"><p>${phones.mainFeatures.memory}</p></div>memory
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>sensors0</h6></div>
           <div class="configer-text"><p>${phones.mainFeatures.sensors[0]}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>sensors1</h6></div>
           <div class="configer-text"><p>${phones.mainFeatures.sensors[1]}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>sensors2</h6></div>
           <div class="configer-text"><p>${phones.mainFeatures.sensors[2]}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>GPS</h6></div>
           <div class="configer-text"><p>${phones.others.GPS}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>WLAN</h6></div>
           <div class="configer-text"><p>${phones.others.WLAN}</p></div>
         </div>
         <div class="configer d-flex">
           <div class="configer-title"><h6>releaseDate</h6></div>
           <div class="configer-text"><p>${phones.releaseDate}</p></div>
         </div>
        </div>
        <div class=" col img-container"><div class=""><img src="${phones.image}" alt="" srcset=""></div></div>
      </div>
     </div>
       `;
}

