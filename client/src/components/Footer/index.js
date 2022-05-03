import React from 'react';

const Footer = () => {
    
  return (
    <footer className="container-lg flex-row">
          <div className="d-flex align-items-center justify-content-center">
            <div className='mx-3 ms-auto'>
              &copy;2022 by 4 Guys
            </div>         
          <div className="d-flex align-items-center mx-3 ms-auto">
            <div className="col-md">
              <h6>Contact Us</h6>
              <a href="https://ericbwebdev86.github.io/abn-dev-portfolio/" target="_blank" rel="noreferrer noopener">Eric Bates</a><br />
              <a href="https://p-fassbender.github.io/react-portfolio/" target="_blank" rel="noreferrer noopener">Preston Fassbender</a><br />
              <a href="https://mattkolbach.github.io/mattkportfolio/" target="_blank" rel="noreferrer noopener">Matt Kolbach</a><br />
              <a href="#" target="_blank" rel="noreferrer noopener">Ryan Thiel</a>
            </div>
          </div></div> 
    </footer>
  );
};

export default Footer;