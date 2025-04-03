import "./Contact.scss";

const mail = "rasoanaivo.heritiana@gmail.com";

const Text = () => {
  return (
    <div className="Contact">
      <div className="content">
        <p>
          <strong>Get in Touch</strong> <br />
          <br />
          <span className="content-secondary">
            Feel free to reach out for collaboration, job opportunities, or just
            to chat about tech and development!
            <br /> <br />
            <a href={`mailto:${mail}`}>➜ Email me</a>
            <br /> <br />
            <a
              href="https://www.linkedin.com/in/heritiana-rasoanaivo-241149158/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ➜ LinkedIn
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <div className="Profile-picture-container">
      <img className="picture" src="/images/me.png" />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="Contact-container">
      <ProfilePicture />
      <Text />
    </div>
  );
};

export default Contact;
