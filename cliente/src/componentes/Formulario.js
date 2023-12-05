import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Formulario.css';
import { useState } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';

function Formulario() {
  const [id, setId]=useState();
  const [grupo, setGrupo]=useState('');
  const [integrante, setIntegrante]=useState('');
  const [album, setAlbum]=useState('');
  const [imagen, setImagen]=useState('');
  const [base, setBase]=useState([]);
  const [editar, setEditar]=useState(false);

  const add = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:3001/create', {
      grupo:grupo,
      integrante:integrante,
      album:album,
      imagen:imagen
    }) .then (()=>{
      alert('photocard registrada');
    });
  }
  const update = (e) => {
    e.preventDefault();
    Axios.put('http://localhost:3001/update',
    { id:id,
      grupo:grupo,
      integrante:integrante,
      album:album,
      imagen:imagen
    }).then((response)=>{
    getBase();
    alert(response.data);
})
}
const deleteFotocarta=(id)=>{
  let confirmacion=window.confirm("segurx que desea eliminar la photocard seleccionada?");
  if(confirmacion){
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      alert(response.data);
      getBase();
      limpiar();
    })
  }
}
  const editarDatos= (val) => {
    setEditar(true);
    setGrupo(val.grupo);
    setIntegrante(val.integrante);
    setAlbum(val.album);
    setImagen(val.imagen);
    setId(val.id);
  }
  const limpiar = () => {
    setEditar (false);
    setGrupo('');
    setIntegrante('');
    setAlbum('');
    setImagen('');
    setId('');
  }
  const getBase = () => {
    Axios.get('http://localhost:3001/base').then((response)=> {
      setBase(response.data);
    })
  }
  //getBase();
  return (
    <>
    <div className='formulario-contenedor'>
      <h3 className='tit'>Registro</h3><hr></hr>
    <form className='form'>
      <Form.Label className='respuesta'>Grupo</Form.Label>
      <Form.Control 
      value={grupo}
      onChange={(event)=>{
        setGrupo(event.target.value)
      }} />
      <Form.Label className='respuesta'>integrante</Form.Label>
      <Form.Control  
      value={integrante}
      onChange={(event)=>{
        setIntegrante(event.target.value)
      }} />
      <Form.Label className='respuesta'>Album</Form.Label>
      <Form.Control 
      value={album}
      onChange={(event)=>{
        setAlbum(event.target.value)
      }}/>
      <Form.Label className='respuesta'>Imagen</Form.Label>
      <Form.Control type='file'
      file={imagen}
      onChange={(event)=>{
        setImagen(event.target.value)
      }}/>
      <br></br>
      {
        editar?
      <div>
      <Button type='submit' className='botonff' onClick={update}>
        Actualizar
      </Button>
      <Button type='submit' className='boton-rojoff' onClick={limpiar}>
        Cancelar
      </Button>
      </div>
      :
      <Button type="submit" className='botonff' onClick={add}>
        Guardar
      </Button>
      }
      </form>
      </div>
      <Button type="submit" className='botonff' onClick={getBase}>
        mostrar
      </Button>
      <Table >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Integrante</th>
          <th>Album</th>
          <th>Imagen</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
      {
        base.map((val,key)=> {
          return <>
        <tr key={val.id}>
          <td>{val.grupo}</td>
          <td>{val.integrante}</td>
          <td>{val.album}</td>
          <td>{val.imagen}</td>
          <td><Button type='button' className='botonff'
          onClick={() =>{
          editarDatos(val);}}>Editar</Button></td>
          <td><Button className='boton-rojoff' type='button' onClick={()=>{deleteFotocarta(val.id)}}>Eliminar</Button></td>
        </tr>
       </>
        })
      }
      </tbody>
    </Table>
    </>
  );
}export default Formulario;