import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    <div>
        <h2>General question about the course</h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header >What are the advantages of taking this courses?</Accordion.Header>
        <Accordion.Body>
        Online courses offer flexibility in terms of scheduling and location, allowing learners to study at their own pace and from anywhere with an internet connection. They often provide a wide range of subjects, personalized learning experiences, and the opportunity to interact with instructors and peers globally.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are online courses recognized and accredited?</Accordion.Header>
        <Accordion.Body>
        Many online courses are offered by reputable institutions and universities, and they often provide certificates or degrees upon completion. It's important to choose courses from accredited providers to ensure the recognition and value of the certifications.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are online courses suitable for everyone?</Accordion.Header>
        <Accordion.Body>
        Yes, online courses cater to a wide range of learners, including working professionals, students, and lifelong learners. They provide access to education for individuals who may face geographical or time constraints that hinder their participation in traditional classrooms.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default FAQ;