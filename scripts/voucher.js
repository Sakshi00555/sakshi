const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
console.log(url)
let amount=JSON.parse(localStorage.getItem("user"))

var voucher=amount[0].amount
console.log(voucher)
async function getData(){
    
        let res=await fetch(url);
        let response= await res.json();
        data=response[0].vouchers
        console.log(data)
        var real_amount=amount[0].amount
        console.log(real_amount)
        
        let storedetails=JSON.parse(localStorage.getItem("purchase"))||[]
        let wallet_amount=JSON.parse(localStorage.getItem("wallet"))||[]

        data.forEach(function(ele){
            let div= document.createElement("div")
            let name=document.createElement("h3")
            let img= document.createElement("img")
            let price= document.createElement("h3")
            console.log(name, img, price)
            img.src=ele.image;
            name.innerText=ele.name;
            price.innerHTML=ele.price;
            var btn=document.createElement("button")
            btn.setAttribute("class", "buy_voucher")
            btn.innerText="Buy";
            btn.addEventListener("click", add_voucher)
            div.append(name, img, price, btn);
            document.querySelector("#voucher_list").append(div)
            
            function add_voucher(){
                storedetails.push(ele)
                localStorage.setItem("purchase", JSON.stringify(storedetails))

                voucher=voucher-ele.price;
                console.log(voucher)
                if(voucher<=0){
                    alert("Sorry! insufficient balance")
                   
                }
                
                else{
                    
                    document.getElementById("wallet_balance").innerText=voucher
                    wallet_amount=voucher
                   
                    alert("Hurray! purchase successful")
                    localStorage.setItem("wallet", JSON.stringify(wallet_amount))
                    console.log(voucher)
                   // window.location.reload()
                    


                }
                
                
                

               
            }
            
            

            

        }
    )}
        
        
getData();














