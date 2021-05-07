import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export default ({ label, options, value, setValue }) => {
  return (
    <Form.Group>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>{label}:</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          as="select"
          custom
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          {Object.entries(options).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </Form.Control>
      </InputGroup>
    </Form.Group>
  )
}
