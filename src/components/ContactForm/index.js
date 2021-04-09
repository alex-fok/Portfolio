import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  return (
    <Form>
      <Form.Group>
        <label for="name" class="col-form-label">Name</label>
        <input type="text" class="form-control" placeholder="Name" id="name"/>
      </Form.Group>
      <Form.Group>
        <label for="email" class="col-form-label">Email</label>
        <input type="email" class="form-control" placeholder="Email" id="email"/>
      </Form.Group>
      <Form.Group>
        <label for="message" class="col-form-label">Message</label>
        <textarea class="form-control" placeholder="Message" id="message"></textarea>
      </Form.Group>
      <button type="submit" class="btn btn-secondary">Submit</button>
    </Form>
  );
}

export default ContactForm;