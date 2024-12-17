import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
<div class="footer container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Events</a></li>
      <li class="nav-item"><a href="#members" class="nav-link px-2 text-muted">Members</a></li>
      <li class="nav-item"><a href="#contact" class="nav-link px-2 text-muted">Contact</a></li>
      <li class="nav-item"><a href="#about" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© 2024 Intel IoT Club</p>
  </footer>
</div>
  );
}

export default Footer;