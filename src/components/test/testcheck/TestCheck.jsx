import { Form } from "react-router-dom";

function TestCheck(props) {
  return (
    <Form>
      <Form.Check onClick={props.setVal} name={props.name} type='radio' label={props.label}></Form.Check>
    </Form>
  )
}

export default TestCheck;