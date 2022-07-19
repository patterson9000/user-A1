//create the user constutor
class user{
    constructor(fname,lname,email,password,confirm,payment,color){
        this.firstName=fname;
        this.lastName=lname;
        this.email=email;
        this.password=password;
        this.confirm=confirm;
        this.payment=payment;
        this.color=color;
    }}
//create the register from the inputs
function register(){
    //get the values from the inputs
   let userfname= $("#txtFirstName").val();
   let userLname= $("#txtLastName").val();
   let userEmail= $("#txtEmail").val();
   let userPass= $("#txtPassword").val();
   let userConfirm=$("#txtConfirm").val();
   let userPayment=$("#txtPayment").val();
   let userColor=$("#txtColor").val();
//create the obj
let newUser=new user(userfname,userLname,userEmail,userPass,userConfirm,userPayment,userColor)
//display the user on the console

function init(){
 //hide the userForm
 $("#userForm").hide();
}
  
  
  window.onload=init;
