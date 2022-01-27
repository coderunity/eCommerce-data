const ls_product = document.getElementById('ls_product');
const button_show = document.getElementById('button_show');
const add_box = document.getElementById('add_box');
const closebtn = document.getElementById('closebtn');
const product_list = document.getElementById('product_list');





button_show.addEventListener('click', function(){

    add_box.style.display = 'block';

});

closebtn.addEventListener('click', function(){

    add_box.style.display = 'none';
    
});


ls_product.addEventListener('submit', function(e){
e.preventDefault();



let name = this.querySelector('input[name="name"]').value;
let regular_prise = this.querySelector('input[name="regular_prise"]').value;
let sele_prise = this.querySelector('input[name="sele_prise"]').value;
let photo_link = this.querySelector('input[name="photo_link"]').value;



let prodect_arr;

if( dataGet('product') ){
    prodect_arr = dataGet('product');
}else{
    prodect_arr = [];
}


prodect_arr.push({

    name            : name,
    regular_prise   : regular_prise,
    sele_prise      : sele_prise,
    photo_link      : photo_link
});

Datasend('product', prodect_arr);

allproducts();


});

allproducts();

function allproducts(){


    let all_product = dataGet('product');

    let data = '';

    all_product.map( pdata => {

        data += `
        
            <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                <div class="product_photo">
                <img class="my-2" src="${pdata.photo_link}" alt="">
                <h2>${pdata.name}</h2>
                <p> <span style="color: red; font-weight: 600;"> Regular : ${pdata.regular_prise} ৳</span> || <span style="color: green; font-weight: 600;"> Sele : ${pdata.sele_prise} ৳</span> </p>

                <button class="btn btn-success">Add to card</button>
            </div>
        </div>
        </div>
    </div>

        
        `;

    });

    product_list.innerHTML = data;

}
