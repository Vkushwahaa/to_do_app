const Footer = (tasks) => {
    const today = new Date()
  return (
    <footer className="mt-5">
      <h2 className="footer text-center">{today.toLocaleString()}</h2>
    </footer>
  );
};
export default Footer;
