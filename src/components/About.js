import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExample() {
  const [myStyle, setMyStyle] = useState({

    color: "black",
    backgroundColor: "white",
    btnColor: "white"
  })

  const [toggleBtn, setToggleBtn] = useState("Dark Mode");

  const handelToggle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        btnColor: "black"
      })
      setToggleBtn("Light Mode")
    }
    else{
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        btnColor: "white"
      })
      setToggleBtn("Dark Mode")

    }
  }

  return (
    <div className='container'>
      <h1 className='mx-2 my-4'>About Me</h1>
      <CardGroup className='container my-4 p-2'  >
        <Card style={myStyle}>
          <Card.Img variant="top" height={430} src="https://i.pinimg.com/280x280_RS/e7/d4/f3/e7d4f3c2928d524d5176b49cfb0c5923.jpg" />
          <Card.Body >
            <Card.Title >Extrovert</Card.Title>
            <Card.Text>
              This is me Om Shingare, Who wanted to be smart. following the path of Friedrich Netcheze.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={myStyle}>
          <Card.Img variant="top" height={430} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiu3YhD8DnCw3sRQlPA3XIlgjLRKhzrNlYA&s" />
          <Card.Body>
            <Card.Title>Philosophies</Card.Title>
            <Card.Text>
              THis is Om Shingare, who want nothing, following the path of albert camus, and franz kafka.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated 1 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Button className='mx-2 my-4' onClick={handelToggle} variant="primary">{toggleBtn}</Button>
    </div>
  );
}

export default GroupExample;