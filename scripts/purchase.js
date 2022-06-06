

var wallet_balance=0;

var voucherarr= JSON.parse(localStorage.getItem("purchase"))||[]

display(voucherarr);
function display(voucherarr){
    document.querySelector("#purchased_vouchers").innerHTML="";
    voucherarr.forEach((element, index) => {
        var vouch= document.querySelector("#purchased_vouchers");
        let div= document.createElement("div")
            let name=document.createElement("h3")
            let img= document.createElement("img")
            let price= document.createElement("h3")
            console.log(name, img, price)
            img.src=element.image;
            name.innerText=element.name;
            price.innerHTML=element.price;



            

            div.append(name, img, price);
            vouch.append(div)
            wallet_balance=wallet_balance+element.price
            document.querySelector("#wallet_balance").innerText=wallet_balance
        
    });
    
        
    
    
}

let wallet_amount=JSON.parse(localStorage.getItem("wallet"))||[]
document.getElementById("balance").innerText=wallet_amount



