const Footer = () => {
  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, "0")}/${(
    today.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${today.getFullYear()}`;

  return (
    <footer className=" footer mt-5">
      <h2 className="name">@vkushwahaa</h2>
      <h2 className="date-footer">{formattedDate}</h2>
    </footer>
  );
};
export default Footer;
