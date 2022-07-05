
import {NavLink, Outlet} from 'react-router-dom';

function Books(){
    return(
        <div className='main'>
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="500">
      <img src="http://www.vkrvnbcoe.org/cse/gallery/logo11.jpg" class="d-block" style={{height:"200px",width:"1520px"}} alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="500">
      <img src="https://www.brainkart.com/media/menu/6.jpg" class="d-block" style={{height:"200px",width:"1520px"}} alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item"  data-bs-interval="500">
      <img src="https://www.askiitians.com/blog/wp-content/uploads/2014/06/images.jpg" class="d-block" style={{height:"200px",width:"1520px"}} alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <h1>CLEAR HERE TO OPEN</h1>
            
            <li className="nav-item">
          <NavLink className="nav-link" to="CSE">
            CSE
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="ECE">
         ECE
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="MECH">MECH
          
          </NavLink>
        </li>
        <div className='container'></div>
        <Outlet />
        
            

        </div>

    );


}
export default Books;