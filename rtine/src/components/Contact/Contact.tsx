import "./Contact.scss";

const mail = "rasoanaivo.heritiana@gmail.com";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="content">
        <p>
          <strong>📩 Get in Touch</strong> <br />
          <br />
          <span className="content-secondary">
            Feel free to reach out for collaboration, job opportunities, or just
            to chat about tech and development!
            <br /> <br />
            📧 Email: {mail}
            <br /> <br />
            🔗 LinkedIn:
            <a
              href="https://www.linkedin.com/in/heritiana-rasoanaivo-241149158/"
              target="_blank"
              rel="noopener noreferrer"
            >
              rasoanaivo heritiana
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
