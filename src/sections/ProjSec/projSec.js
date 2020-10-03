import React from 'react';
import "./projSec.css"

export default class ProjSec extends React.PureComponent {

  render() {
    return (
        <div className="proj-sec">
          <div className="headline">Projects I have done</div>

          <div className="ui grid" style={{width: '80vw'}}>

{// startttttttttttttttttttttttttttttttttttt-------------
}
            <div className="twelve wide column">
              <div className='proj-title'>FYP project: 2D reflective image generation</div>
            </div>
            <div className="four wide column">
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
}