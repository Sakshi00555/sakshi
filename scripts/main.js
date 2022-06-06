function sign(name, address, email, amount){
    this.name= name;
    this.address=address;
    this.email=email;
    this.amount=amount;
    

}
function submitdetail(elem){
    var detailsarr= JSON.parse(localStorage.getItem("user")) || [];
    elem.preventDefault();
    var form=document.getElementById("add");
    var name=form.name.value;
    var address=form.address.value;
    var email=form.email.value;
    var amount=form.amount.value;
    var s=new sign(name, address, email, amount)
    detailsarr.push(s)
    localStorage.setItem("user",JSON.stringify(detailsarr));
}