function ContactPage({ contactInformation }) {
  return (
    <>
      <h2>Contacto</h2>
      <div></div>
      <ul>
        {contactInformation.social_networks.map((network, index) => (
          <li key={index}>
            <a href={network.url} target="_blank" rel="noreferrer">
              {network.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactPage;
