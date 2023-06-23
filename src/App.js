import {FormHook} from "./components/react-hook-form";
import {FormFormik} from "./components/formik-form";
import {Container, Col} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Container>
                <div className="d-flex justify-content-center">
                    <Col md={6}>
                        <FormHook/>
                    </Col>
                    <Col md={6}>
                        <FormFormik/>
                    </Col>
                </div>
            </Container>
        </div>
    );
}

export default App;
