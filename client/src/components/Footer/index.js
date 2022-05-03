import React from 'react';

const Footer = () => {
    
  return (
    <footer className="container-lg flex-row justify-content-center">
          <div className="d-flex align-items-center">
            &copy;2022 by 4 Guys
            </div>          
          <div className="d-flex align-items-center">
            <div className="col-md">
              <h6>Contact Us</h6>
              <a href="https://ericbwebdev86.github.io/abn-dev-portfolio/" target="_blank" rel="noreferrer noopener">Eric Bates</a><br />
              <a href="https://p-fassbender.github.io/react-portfolio/" target="_blank" rel="noreferrer noopener">Preston Fassbender</a><br />
              <a href="https://mattkolbach.github.io/mattkportfolio/" target="_blank" rel="noreferrer noopener">Matt Kolbach</a><br />
              <a href="#" target="_blank" rel="noreferrer noopener">Ryan Thiel</a>
            </div>
          </div>
    </footer>
  );
};

export default Footer;