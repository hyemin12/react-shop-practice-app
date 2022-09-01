function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <i className="far fa-copyright"></i> {year}HYEMIN. All rights reserved.
    </footer>
  );
}
export default Footer;
