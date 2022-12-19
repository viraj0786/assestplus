import React, { useState } from 'react'
// import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import axios from 'axios'
import { Card, Container, Row, Col, Button, Modal, Textarea } from 'react-bootstrap';
// import '../../node_modules/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * The below components shows the working example of axios for API calls.
 * Also Material UI is integrated for design.
 */
function TestingAPI() {

    const [testData, setTestData] = React.useState();
    const [show, setShow] = useState(false);
    const [searchData, setsearchData] = useState()
    const [popUpData, setpopUpData] = useState()
    const [apiData, setApiData] = useState([
        {
            id: 1,
            name: "viraj1",
            description: "hello i am a fronted developer having 2 year of exp",
            img: "https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "viraj2",
            description: "hello i am a fronted developer having 2 year of exp",
            img: "https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: "viraj3",
            description: "hello i am a fronted developer having 2 year of exp",
            img: "https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }

    ])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addData = (e) => {
        const { name, value } = e.target
        if (name == "name") {
            setpopUpData((prev) => {
                return { ...prev, [name]: value }
            })
        } else if (name == "description") {
            setpopUpData((prev) => {
                return { ...prev, [name]: value }
            })
        } else if (name == "img") {
            console.log("fSDFDS", value.files);
            setpopUpData((prev) => {
                return { ...prev, [name]: value }
            })
        }
    }

    const addchange = () => {
        // console.log(apiData, "[...setApiData, popUpData] ");
        setApiData([...apiData, popUpData])
        handleClose()
    }
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <Card className="mb-5 rounded-0 px-3">
                            <div className='py-4 d-flex justify-content-between align-items-center'>
                                <div className='plus-icon'> <Button className="btn btn-primary" variant="primary" onClick={handleShow}>+</Button> </div>
                                <div className='title'>Demo Title</div>
                                <div className="Searchbar">
                                    <input onChange={(e) => setsearchData(e.target.value)} type="search"></input>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {apiData.filter(ele => {
                        return ele.name.includes(searchData)
                    }).map((ele, i) => {
                        return (
                            <>
                                <Col md={4} className="mb-4" key={ele.id}>
                                    <Card>
                                        <Card.Img variant="top" src={ele.img} />
                                        <Card.Body>
                                            <Card.Title>{ele.name}</Card.Title>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">{ele.description}</small>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </>
                        )
                    })
                    }
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Tttle</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={12}>
                            <div className="input-group mb-3">
                                <input className="w-100 p-2" type="text" name="name" onChange={addData} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <h6>Discription</h6>
                            <textarea rows={5} className='input-group p-3' name="description" onChange={addData}></textarea>
                        </Col>

                        <Col md={6}>
                            <h6>Post</h6>
                            <input className="w-100 p-2" type="file" name="img" onChange={addData} />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addchange}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {console.log(popUpData, " popUpData")}
        </>

    )
}

export default function Posts() {
    // You can delete testingAPI component and start your assignment.    
    return <TestingAPI />
}
