import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const WeatherModal = (data) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} >Launch demo modal</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Weather modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-md-12 text-center mt-5 mb-5">
                        <div className="shadow rounded wetherResultBox">
                            <img className="weathorIcon"
                            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
                            <h5 className="weathorCity">{data?.name}</h5>
                            <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
                            {/* <Button className='px-5 mt-3 mb-4' variant="success">Add</Button> */}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default WeatherModal;
