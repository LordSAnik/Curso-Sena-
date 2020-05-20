(function(){
	var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
        correo = formulario.correo,
        servicios = formulario.servicios,
        mensaje = formulario.mensaje,
		error = document.getElementById('error');

		function validarNombre(e){
			if(nombre.value == '' || nombre.value == null ){
				console.log('Por favor complete el Nombre');
				error.style.display = 'block';
				error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre </li>';
				e.preventDefault();
				 } else{
				 	error.style.display = 'none';
				 }
			}

		function validarCorreo(e){
			if(correo.value == '' || correo.value == null ){
				console.log('Por favor complete el Correo');
				error.style.display = 'block';
				error.innerHTML = error.innerHTML + '<li>Por favor completa el Correo </li>';
				e.preventDefault();
				 } else{
				 	error.style.display = 'none';
				 }
            }
            function validarServicios(e){
                if(servicios.selectedIndex==0  ){
                    console.log('Por favor complete el Correo');
                    error.style.display = 'block';
                    error.innerHTML = error.innerHTML + '<li>Por favor escribe un mensaje</li>';
                    e.preventDefault();
                     } else{
                         error.style.display = 'none';
                     }
                }
                function validarMensaje(e){
                    if(nombre.value == '' || nombre.value == null ){
                        console.log('Por favor complete el Nombre');
                        error.style.display = 'block';
                        error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre </li>';
                        e.preventDefault();
                         } else{
                             error.style.display = 'none';
                         }
                    }
           

		

		function validarFormulario(e){
				error.innerHTML = '';
				validarNombre(e);
                validarCorreo(e);
                validarServicios(e);
                validarMensaje(e);

               
			    
		   }


		

	formulario.addEventListener('submit', validarFormulario);
}())