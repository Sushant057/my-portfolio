function Header() {
  return (
    <header>
      <nav>
        <h1>Your Name</h1>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// We must export it to use it in other files.
export default Header;
