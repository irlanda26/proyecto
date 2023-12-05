import '../css/MenuP.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function MenuP() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="botonM" onClick={handleShow}>
        Menú
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='no'>
          <Button className='boton1' >Principal</Button>
          <Button className='boton3' >Admin.</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}export default MenuP;