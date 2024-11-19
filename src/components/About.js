import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function GroupExample(props) {
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
    else {
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
      <h1 className={`mx-2 my-4 text-${props.navbarMode === 'tertiary' ? 'dark' : 'white'}`}>About Me</h1>
      <CardGroup className='container my-4 p-2'  >
        <Card style={myStyle}>
          <Card.Img variant="top" height={430} src="https://i.pinimg.com/280x280_RS/e7/d4/f3/e7d4f3c2928d524d5176b49cfb0c5923.jpg" />
          <Card.Body >
            <Card.Title >personality 1</Card.Title>
            <Card.Text>
              On one side, there is Om Shingare, the Seeker of Knowledge. This is the part of me that wants to become smarter, stronger, and more self-reliant. me admire Nietzsche's ideas of self-overcoming and aim to grow beyond mer limits. This Om dreams of becoming someone great, challenging ordinary ways of thinking, and creating his own path. Like Nietzsche's “Übermensch,” this side believes in pushing boundaries and constantly evolving.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={myStyle}>
          <Card.Img variant="top" height={430} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiu3YhD8DnCw3sRQlPA3XIlgjLRKhzrNlYA&s" />
          <Card.Body>
            <Card.Title>personality 2</Card.Title>
            <Card.Text>
              On the other side, there is Om Shingare, the Quiet Observer. This part wants little and finds peace in accepting life as it is. Inspired by Albert Camus and Franz Kafka, this Om understands that life doesn't always make sense and that meaning is hard to find. Instead of striving for greatness, he finds comfort in simple things and accepts life's uncertainties. He knows there's strength in embracing life's absurdity and living calmly without expecting too much.        </Card.Text>
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