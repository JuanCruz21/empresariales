import React, { useEffect, useState } from 'react';
//import Navegador from '../Components/Navegador'

function FormUsuario(props) {
  console.log("Hola",props)
const {getUser, setUser, otro, registrar=false} = props;

const [usuario,setUsuario]= useState({
            id_: null,
            Cedula:"",
            Nombre:"",
            Apellido:"",
            Dirección:"",
            correo:"",
            telefono:"",
            genero:"",
            fecha_nacimiento:"",
            estado:"",
            rol:"",
            Contraseña:""
})
const handleChange=(e)=>{
    setUsuario({
        ...usuario, [e.target.Nombre] : e.target.value
    })
}

useEffect(() =>{
  if(setUser)
    setUsuario(setUser)
}, [setUser])

const onclickGuardar = (e) => {
  e.preventDefault();
  otro(usuario);
  //limpiar();
};

  return (
      <div>

        <div className="col-xxl" id="agregarUsuario" >
                  <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">Agregar Usuario</h5>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Nombre</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="nomUsuario" name="nombre" placeholder="Digite el nombre del Usuario" onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Apellidos</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="apellido" name="apellido" placeholder="Digite el apellido del Usuario" onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Fecha de nacimiento</label>
                          <div className="col-sm-10">
                            <input type="date" className="form-control" id="fecha_nacimiento" name="fecha_nacimiento" placeholder="Digite la fecha de nacimiento del Usuario" onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Dirección</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="direccion" name="direccion" placeholder="Digite la dirección del Usuario" onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Correo</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="correo" name="correo" placeholder="Digite el correo del Usuario" onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Telefono</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="telefono" name="telefono" placeholder="Digite el telefono del Usuario" onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Genero</label>
                        <div className="col-sm-10">
                        <select className="form-select" id="genero" name="genero" onChange={(e)=>{handleChange(e)}}>
                          <option selected="">Seleccionar Opción</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Masculino">Masculino</option>
                        </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Contraseña</label>
                          <div className="col-sm-10">
                            <input type="password" className="form-control" id="contrasena" name="contrasena" placeholder="Digite la contraseña del Usuario" onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Rol</label>
                        <div className="col-sm-10">
                        <select className="form-select" id="rol" name="rol" onChange={(e)=>{handleChange(e)}}>
                          <option selected="">Seleccionar Opción</option>
                          <option value="administrador">Administrador</option>
                          <option value="personal">Personal</option>
                          <option value="paciente">Paciente</option>
                        </select>
                        </div>
                      </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Estado</label>
                        <div className="col-sm-10">
                        <select className="form-select" id="estado" name="estado" onChange={(e)=>{handleChange(e)}}>
                          <option selected="">Seleccionar Opción</option>
                          <option value="1">Activo</option>
                          <option value="0">Inactivo</option>
                        </select>
                        </div>
                      </div>
                        <div className="row justify-content-end">
                          <div className="col-sm-10">
                            <button type="button" className="btn btn-primary" onClick={onclickGuardar}>Guardar</button>
                            <a href="#" className="btn btn-danger">Cancelar</a>
                          </div>
                          </div>
                      </form>
                    </div>
                  </div>
            </div>
            </div>

  )
}

export default FormUsuario;
