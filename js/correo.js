document.getElementById('correo').addEventListener('input', function() {
     campo = event.target;
     valido = document.getElementById('emailOK');
       
     emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     if (emailRegex.test(campo.value)) {
           valido.innerText = "Válido";
     } else {
           valido.innerText = "Inválido";
     }
   });

   $(function () {
     var name, lastname, message, email, gender;
     $("#btn-info").on('click', function () {
       name = $("#nombre").val();
       lastname = $("#apellido").val();
       messagee = $("#mensaje").val();
       email = $("#correo").val();

       if (name.length == 0 || lastname.length == 0 || messagee.length == 0 || email.length == 0) {
         alert("Verifique que no haya dejado algún campo sin completar, de ser así por favor completarlo.");
       }
       else {
         var correo = document.getElementById('correo').value
         var mensaje = document.getElementById('mensaje').value
         var nombre = document.getElementById('nombre').value
         var apellido = document.getElementById('apellido').value
         Email.send({
           SecureToken:"5b2f6769-236b-42fa-b451-c19664ec5dc4",
           From: correo,
           To: "melinacd28@gmail.com",
           Subject: "Panadería y Cafetería La Trinidad",
           Body: "De: " + nombre + " " + apellido + " " + edad + " años" + "<br>" + "<br>" + "Mensaje: " + mensaje
         })
           .then(function (message) {
             alert("Mensaje éxitoso, pronto le atenderemos, Gracias")
           });
         document.getElementById('nombre').value = '';
         document.getElementById('correo').value = '';
         document.getElementById('mensaje').value = '';
         document.getElementById('apellido').value = '';
         document.getElementById('miEdad').value = '';
         document.getElementById('hm').value = '';


       }
     });
   });