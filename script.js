class DomElements{
    constructor(){
        this.submitBtn = document.querySelector('input[type="button"]');
        this.noProduct = document.querySelector('#noproduct');
        this.listProducts = document.querySelector('.list-product-details');
        this.productName = document.querySelector('.productname');
        this.productNumber = document.querySelector('.productnumber');
        this.productPrice = document.querySelector('.productprice');
        this.productImage = document.querySelector('.productimage');
        this.productDescription = document.querySelector('.productdescription');

        this.formInputCollection = [
            {
                htmlElements : this.productName.querySelector('input'),
                validatorMessage : "plese enter product Name",
				
            },
            {
                htmlElements : this.productNumber.querySelector('input'),
                validatorMessage : "plese enter product Number",
                validationPattern :/^\d+$/
            },
            {
                htmlElements : this.productPrice.querySelector('input'),
                validatorMessage : "plese enter product price",
                validationPattern :/^\d+$/

            },
            {
                htmlElements : this.productImage.querySelector('input'),
                validatorMessage : "plese enter product image",
                validationPattern :/(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png)/

            },
        ];




        this.setInitialStyling();
    }
    setInitialStyling(){
        this.noProduct.style = "display:block";
        this.listProducts.style = "display:none";
    }
}

    const domelements = new DomElements();
	
    class Events{
        static addEventListener(){
            if(domelements.submitBtn!= null){
                domelements.submitBtn.addEventListener("click",(event)=>{
                    event.preventDefault();
                     products.addproducts();                      
                });
            }

            domelements.formInputCollection.forEach( (element) => {
                element.htmlElements.addEventListener("keyup", () => {
                    products.dynamicValidation({
                        htmlElements: element.htmlElements,
                        validatorMessage: element.validatorMessage,
                        validatorPattern: element.validatorPattern
                    });
                });
            });

        }
    }
    

    Events.addEventListener();
    

       
