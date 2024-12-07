import logo from "../../assets/Logo-Constructor.png"

function Logo() {
  return (
    <a href="/">
        <img src={logo} alt="Logo" class="h-12 w-auto" />
    </a>
  )
}

export default Logo