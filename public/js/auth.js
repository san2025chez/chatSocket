const miFormulario = document.querySelector('form');

const url =(window.location.hostname.includes('localhost'))
 ? 'http://localhost:8080/api/auth/'
 : ''
 miFormulario.addEventListener('submit', ev =>{
   ev.preventDefault();

   const formData={};

   for (let el  of miFormulario.elements) {
    if(el.name.length > 0)
      formData[el.name] = el.value
    
      
   }
   console.log(formData);
   fetch(url + 'login' ,{
      method: 'POST',
      body: JSON.stringify(formData),
      headers:{ 'Content-Type': 'application/json'}

   })
   .then( resp => resp.json())
   .then(({msg, token})=>{
   if(msg){
      return  console.error(msg);
   }
   localStorage.setItem('token', token);
   window.location ='chat.html';
   })
   .catch(err =>{
      console.log(err);
   })
 
 })

/* function handleCredentialResponse(response) {
    //Google Token : idTOken
    console.log(response.credential);
    const body = { id_token: response.credential };
    const url = `${window.location.origin}/api/auth/google`;
    fetch(url, {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'

       },
       body: JSON.stringify(body)
    })
       .then(resp => resp.json())
       .then(resp => {
          console.log(resp);
          localStorage.setItem( 'correo', resp.usuario.correo);
          location.reload()
       })
       .catch(console.warn)
 }

 const button = document.getElementById('google_signout');
 button.onclick = () => {
    console.log(google.accounts.id);
    google.accounts.id.disableAutoSelect()

    google.accounts.id.revoke(localStorage.getItem('correo'), done =>{
       localStorage.clear();
       location.reload();
    })
 } */