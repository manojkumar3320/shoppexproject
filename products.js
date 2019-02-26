class Products{
    constructor(){
        this.productdetails = [];
        this.totalprice = 0;
        this.isFormInvalid = false;
    }

    addproducts(){
        this.validateForm();
        if(!this.isFormInvalid){
        const productvalue = {
            productName : domelements.productName.querySelector('input').value,
            productNumber : domelements.productNumber.querySelector('input').value,
            productPrice : domelements.productPrice.querySelector('input').value,
            productImage : domelements.productImage.querySelector('input').value,
            productDescription : domelements.productDescription.querySelector('input').value,
        }
        this.productdetails.push(productvalue);
        if(this.productdetails.length > 0){
            this.showProduct();
        
        }
        }
    }


    showProduct(){
        domelements.listProducts.innerHTML ="";
        this.productdetails.forEach((element) => {
            console.log(element);
            domelements.noProduct.style="display:none";
            domelements.listProducts.style="display:block";
            domelements.listProducts.insertAdjacentHTML("beforeend",
            `<div class="list-wrap" onClick="productdetails.showMoredesc(this)">
           
            <div class="row">
                <div class="col-sm-4">
                <img class="helloimage" src="`+element.productImage+`"></img>
                </div>
                <div class="col-sm-4">
                <div class="list-disc">
                <h2>`+element.productName+`</h2>
                <h3>Rs.`+element.productPrice+`</h3>
                <p>`+element.productDescription+`</p>
             </div>
                </div>
                <div class="col-sm-4"></div>

            </div>
     </div>
               `
            )


        });
      this.showTotal();
    };

    showTotal(){
        this.totalprice = this.productdetails.map(obj => obj.productPrice).reduce((acc,next) => parseInt(acc) + parseInt(next));
        
        domelements.listProducts.insertAdjacentHTML("beforeend",
            `<div class="total-price">
                <h3<Total Price: `+this.totalprice+`</h3>
            </div>`
        )
    }


validateForm(){
    domelements.formInputCollection.forEach((element)=>{
        this.dynamicValidation({
            htmlElements:element.htmlElements,
            validatorMessage : element.validatorMessage,
            validatorPattern : element.ValidatorPattern
        });
    });
}

dynamicValidation(params) {
    const htmlElements = params.htmlElements;
    const validatorMessage = params.validatorMessage;
    const validatorPattern = params.validatorPattern;
    const validatorPatternResult = validatorPattern === undefined ? false : !validatorPattern.test(htmlElement.value);
    if (htmlElements.value === '' || validatorPatternResult) {
        this.isFormInvalid = true;
        document.getElementById(`${htmlElements.getAttribute('id')}_error`).innerHTML = validatorMessage;
    } else {
        this.isFormInvalid = false;
        document.getElementById(`${htmlElements.getAttribute('id')}_error`).innerHTML = "";
    }
}

}

const products = new Products();



