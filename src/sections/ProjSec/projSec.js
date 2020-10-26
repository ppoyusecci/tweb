import React from 'react';
import "./projSec.css"

export default function ProjSec() {

    return (
        <div className="proj-sec section">
          <div className="headline">Past Projects</div>

          <div className="col-container">

{// startttttttttttttttttttttttttttttttttttt-------------
}
            <div className="row-container">
              <div className='small-headline'>FYP project: 2D reflective image generation</div>
            
              <a
                    className='proj-link'
                    href="https://nbviewer.jupyter.org/github/ppoyusecci/2D-reflective-image-generation/blob/master/reflect_gan.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    nbviewer link
                    </a>
            </div>

{// ---------------------------------------
}

{// endddddddddddddddddddddddddddddddddddddd
}
          </div>

      </div>
    );

}