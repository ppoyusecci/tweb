import React from 'react';
import "./projSec.css"

export default class ProjSec extends React.PureComponent {

  render() {
    return (
        <div className="project-sec">
          <div className="headline" style={{color: 'rgba(88, 4, 4, 0.9)'}}>Project</div>

          <div class="ui grid" style={{width: '80vw'}}>

{// startttttttttttttttttttttttttttttttttttt-------------
}
            <div class="twelve wide column">
              <div className='proj-title'>FYP project: 2D reflective image generation</div>
            </div>
            <div class="four wide column">
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
            <div class="sixteen wide column"></div>
            <div class="sixteen wide column"></div>
            
            <div class="twelve wide column">
              <div className='proj-title'>Serverless blog</div>
            </div>
            <div class="four wide column">
              <a
                    className='proj-link'
                    href="https://github.com/ppoyusecci/COMP4651-PJ-Serverless-Blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Github Link
                    </a>
            </div>

{// endddddddddddddddddddddddddddddddddddddd
}
          </div>

      </div>
    );
  }
}