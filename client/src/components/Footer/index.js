import React from 'react';

const Footer = () => {
    
  return (
    <footer className="container">
          <div>
            <div className='col-12 d-flex justify-content-center'>
              <div>&copy;2022 by 4 Guys</div>
            </div>

            <div className='col-12 d-flex justify-content-center'>
              <h4>Contact Us</h4>
            </div>
            <div className='col-12 d-flex justify-content-center'>              
              <div className='row justify-content-around'>
                <a className='col' href="https://ericbwebdev86.github.io/abn-dev-portfolio/" target="_blank" rel="noreferrer noopener">Eric Bates</a><br />
                <a className='col' href="https://p-fassbender.github.io/react-portfolio/" target="_blank" rel="noreferrer noopener">Preston Fassbender</a><br />
                <a className='col' href="https://mattkolbach.github.io/mattkportfolio/" target="_blank" rel="noreferrer noopener">Matt Kolbach</a><br />
                <a className='col' href="#" target="_blank" rel="noreferrer noopener">Ryan Thiel</a>
              </div>
            </div>            
          </div> 
    </footer>
  );
};

export default Footer;