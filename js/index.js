const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const namber = document.getElementById('namber');
const gmail = document.getElementById('gmaill');
const password = document.getElementById('password');
const conpassword = document.getElementById('conpassword');
const chackbox = document.getElementById('chackbox');
const button = document.getElementById('btn');
const wrapper = document.getElementById('wraper');

function tekwiruv(){
    if(firstname.value.length < 3){
     alert('Ismizni to`liq kiriting, eng kamida 3 harfdan iborat bo`lsin')    
     firstname.focus();
     firstname.style.outlineColor = 'red';
     // firstname.style.backgroundColor = 'red';
     return false
    }
    if(lastname.value.length < 5){
     alert('Familyangizni to`liq kiriting, eng kamida 5 harfdan iborat bo`lsin')    
     lastname.focus();
     lastname.style.outlineColor = 'red';
     return false
    }
    if(namber.value.length < 9){
     alert('Telefon raqamingizni to`liq kiriting, eng kamida 9ta sondan iborat bo`lsin misol: 912345678 yoki 998912345678')    
     namber.focus();
     namber.style.outlineColor = 'red';
     return false
    }
//     const email = gmail.includes("@gmail.com");
//    console.log(email);
//     if(email  != '@gmail.com'){
//      alert('oxirida @gmail bo`lishi shart')    
//      gmail.focus();
//      gmail.style.outlineColor = 'red';
//      return false
//     }
if(gmail.value.length < 15){
     alert('Elektron pochtani to`g`ri kiring,  misol: sherniyoz@gmail.com')    
     gmail.focus();
     gmail.style.outlineColor = 'red';
     return false
    }
    if(password.value.length < 8){
     alert('Kamida 8ta harf yo raqamdan iborat bo`lsin')    
     password.focus();
     password.style.outlineColor = 'red';
     return false
    }
    if(conpassword.value != password.value){
     alert('Iltimos boshqatdan kiriting tepada kiritilgan kodingiz bilan bir xil bo`lsin')    
     conpassword.focus();
     conpassword.style.outlineColor = 'red';
     return false
    }     

    return true;
}

function createCard(foydalanuvchi){
     const card = document.createElement('div');
     card.setAttribute('class','card');

     const FirstElement = document.createElement('h2');
     FirstElement.innerHTML = foydalanuvchi.Firstname;
     card.appendChild(FirstElement);
     
     const LasstElement = document.createElement('h2');
     LasstElement.innerHTML = foydalanuvchi.Larstname;
     card.appendChild(LasstElement);
     
     const telefonElement = document.createElement('h2');
     telefonElement.innerHTML = foydalanuvchi.Telfon;
     card.appendChild(telefonElement);
     
     const pochtaElement = document.createElement('h2');
     pochtaElement.innerHTML = foydalanuvchi.Pochta;
     card.appendChild(pochtaElement);
     
     const paswordElement = document.createElement('h2');
     paswordElement.innerHTML = foydalanuvchi.Password;
     card.appendChild(paswordElement);

     return card;   
}

form.addEventListener('submit', function(event){
     event.preventDefault();
     const tekwirdi = tekwiruv();
     
     if(!tekwirdi){
          return
     }
     
     const foydalanuvchi = {
          Firstname: firstname.value,
          Lastname: lastname.value,
          Telfon: namber.value,
          Pochta: gmail.value,
          Password: password.value,
     }
     let card = createCard(foydalanuvchi);
     wrapper.appendChild(card);

})