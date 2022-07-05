import React from "react";
import Card from "./Card";
//import { Link, NavLink } from 'react-router-dom';
const TopRatedBooks=()=>{
    let books = [
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        },
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        },
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        },
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        },
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        },
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        },
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        },
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        },
        {
            image : "https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png",
            title : "fog",
            authour:"dog" ,
            price : "200 rupees",
            pages : "100 pages" ,
            section : "it"
        
        }
        ]
    
    return(
        <div className="back2">
            {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="500">
      <img src="https://dobraemerytura.org/img/top-rated-books-2017-goodreads.png" className="d-block" style={{height:"200px",width:"1520px"}} alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <img src="https://solutionsreview.com/security-information-event-management/files/2021/07/Security-Operations-Centers-Books-on-Amazon.jpg" className="d-block" style={{height:"200px",width:"1520px"}} alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item"  data-bs-interval="500">
      <img src="https://www.abetteryoudaybyday.com/wp-content/uploads/2015/06/selfhelp_books_opt-730x410.jpg" className="d-block" style={{height:"200px",width:"1520px"}} alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<div className='container home'  >

           
<div className='row row-cols-1 me-auto row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>

  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[0]}>  </Card></div>
  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[1]}>  </Card></div>
  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[3]}>  </Card></div>
  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[3]}>  </Card></div>
  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[4]}>  </Card></div>
  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[5]}>  </Card></div>
  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[6]}>  </Card></div>
  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[7]}>  </Card></div>
  <div className='col-sm-4 col-md-4 mt-3 mb-3 how'><Card bookObj={books[8]}>  </Card></div>

</div>
</div>
             {/* <div className="container d-flex "> 
    
    <div className="row">
    <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt=""></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
        

</div> 
</div>
<div class="row row-cols-1 row-cols-md-2 g-4 text-center rope"  style={{width:"1000px"}}>
  <div class="col text-center">
    <div class="card text-center">
      <img src="https://images.gawker.com/17m4zyxx0ahanjpg/original.jpg" class="card-img-top" alt="..." style={{height:"100px",width:"150px"}}></img>
      <div class="card-body">
        <h5 class="card-title">Lets crack it!</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://1.bp.blogspot.com/-N1g7d9NzE-Q/X08sBEtthLI/AAAAAAAASDM/5ms3waqlt6McezCsBMb1rYt6-rrDorYUwCNcBGAsYHQ/s1600/Rated-XXX%2BEbook%2BCover.jpg" class="card-img-top" alt="..." style={{height:"100px",width:"150px"}}></img>
      <div class="card-body">
        <h5 class="card-title">Are you ready!</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://laughingsquid.com/wp-content/uploads/2014/02/moviesrus.jpg" class="card-img-top" alt="..."  style={{height:"100px",width:"150px"}}></img>
      <div class="card-body">
        <h5 class="card-title">Guys see it!</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://s3-eu-west-1.amazonaws.com/eventcube-files/uploads/flyer/44b5f82bb028debd5e1234bd345c6c75d8959ffa_med.jpg" class="card-img-top" alt="..." style={{height:"100px",width:"150px"}}></img>
      <div class="card-body">
        <h5 class="card-title">Improve your skills</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{/* row-2 */}
{/* <div className="container p-3">
<div className="row">
    <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
  <div className="col-2">
<div className="card shadow-sm text-center p-3">
   <img src="https://n4.sdlcdn.com/imgs/f/0/n/GATE-2018-Mechanical-Engineering-Masterpiece-SDL878422300-1-f23aa.jpg"
     className="w-100" alt="" ></img>
      <div className="card-body">
          <h2 className="card-title">CSIT</h2>
          <p className="lead">TOMOR</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#porsche">VIEW MORE</button>
          <div className="modal" id="porsche">
           <div className="modal-dialog">
               <div className="modal-content">
               <div className="modal-header">CSIT</div>
               <div className="modal-body">
                    <div className="row">
                       <div className="col-sm-4">
                           <img src="https://www.gateexam.info/wp-content/uploads/2018/07/Gate-2019-book-CSE-2-min.jpg" className="w-100" alt="" ></img>
                       </div>
                       <div className="col-sm-8">
                           <h5>CSIT</h5>
                           <h5>TOMOR</h5>
                           <h5>PAGES:345</h5>
                           </div>
                       </div> 
                   </div>
               </div>
               </div>
           </div>
       </div>
      </div>
  </div>
        

</div> 
</div> 
        </div> */}
</div>
    );


}
export default TopRatedBooks;