import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import '../css/Fotocartas.css';
import Axios from 'axios';
import { useState } from 'react';

function Fotocartas() {
  const [base, setBase]=useState([]);
  const getBase = () => {
    Axios.get('http://localhost:3001/base').then((response)=> {
      setBase(response.data);
    })
  }
  //getBase();
  return (
    <>
    <Button type="submit" className='boton' onClick={getBase}>
        mostrar
      </Button>
    {
      base.map((val,key)=> {
        return <>
    <Accordion defaultActiveKey={['0']} alwaysOpen className='acordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header > {val.imagen}</Accordion.Header>
        <Accordion.Body className='lainfo'>
          <ul className='lis' key={val.id}>
            <li className='punto'>Grupo: {val.grupo}</li>
            <li className='punto'>Integrante: {val.integrante}</li>
            <li className='punto'>Album: {val.album}</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  })
}
</>
  );
}export default Fotocartas;