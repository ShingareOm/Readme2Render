import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { useState } from "react";
import markdownIt from 'markdown-it';

const md = new markdownIt();

function TextControlsExample(props) {
    const [text, setText] = useState("");
    const [htmlPreview, setHtmlPreview] = useState(""); // State to store HTML preview

    const updateText = (event) => {
        const newText = event.target.value;
        setText(newText);
        // Convert markdown to HTML whenever text changes
        setHtmlPreview(md.render(newText));
    };

    return (
        <Form className="container">
            <Form.Group className="mb-3 my-4" controlId="exampleForm.ControlTextarea1">
                <h3 className={`text-${props.navbarMode === 'tertiary' ? 'dark' : 'white'}`}>{props.disc}</h3>
                <Form.Control
                    as="textarea"
                    rows={8}
                    value={text}
                    onChange={updateText}
                />
                {/* <Button variant="primary" onClick={updateToUpperCase} className="mx-2 my-2">
                    Convert To Upper Case
                </Button>
                <Button variant="primary" onClick={updateToLowerCase} className="my-2">
                    Convert To Lower Case
                </Button>
                <Button variant="primary" onClick={encodeToBase64} className="mx-2 my-2">
                    Encode To Base64
                </Button>
                <Button variant="primary" onClick={decodeToBase64} className="mx-2">
                    Decode From Base64
                </Button>
                <Button variant="primary" onClick={encodeTosha256} className="mx-2 my-2">
                    Encode To SHA-256
                </Button> */}

                {/* <h3 className="my-2">Text Summary (Preview)</h3> */}
                {/* <p>{text}</p> */}
                {/* <code style={{ color: props.darkMode ? 'white' : 'black' }}>This text will need {(0.008 * text.split(" ").length).toFixed(2)} min's time to read. (words: {text.split(" ").length}, chars: {text.length})</code> */}

                {/* Render the converted Markdown HTML */}
                <hr />
                <h3 className={`my-4 text-${props.navbarMode === 'tertiary' ? 'dark' : 'white'}`}>Markdown Preview</h3>
                {htmlPreview ? <div
                    dangerouslySetInnerHTML={{ __html: htmlPreview }}
                    style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", background: "#f9f9f9" }}
                /> : <p className={`text-${props.navbarMode === 'tertiary' ? 'dark' : 'white'}`}>Enter .md (Markdown) to preview</p>}
            </Form.Group>
        </Form>
    );
}

TextControlsExample.propTypes = { disc: PropTypes.string };
export default TextControlsExample;
