import React, { useState } from 'react';
import "./projSec.css"
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function ProjSec() {

    const [page, setPage] = useState(0);

    return (
      <div className="proj-sec section row-container">

        <div className="row-container">

          <div className="_headline small-headline">Past projects</div> 

          <div className="col-conteiner _content"> 

            <div className="tags">

              <Chip avatar={<Avatar>G</Avatar>} label="Github" color="primary" onClick={()=>setPage(0)}/>
              <Chip avatar={<Avatar>K</Avatar>} label="Kaggle" color="primary" onClick={()=>setPage(1)}/>
              <Chip avatar={<Avatar>N</Avatar>} label="Other notebooks" color="primary" onClick={()=>setPage(2)}/>

            </div>

            <div className="result">
              {
                  page==0? <div>
                            
                              <Card>
                                <CardActionArea href="https://nbviewer.jupyter.org/github/ppoyusecci/2D-reflective-image-generation/blob/master/reflect_gan.ipynb"
                                                target="_blank"
                                >
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      Some cloud project
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      Amazon AWS project
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                              </Card>
                            </div>

                : page==1? <div>
                              
                            <Card>
                                <CardActionArea href="https://nbviewer.jupyter.org/github/ppoyusecci/2D-reflective-image-generation/blob/master/reflect_gan.ipynb"
                                                target="_blank"
                                >
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      Auto driving image analysis
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      some competition
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                              </Card>
                            </div>

                : page==2? <div>

                            <Card>
                              <CardActionArea href="https://nbviewer.jupyter.org/github/ppoyusecci/2D-reflective-image-generation/blob/master/reflect_gan.ipynb"
                                              target="_blank"
                              >
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    FYP: 2D reflective image generation
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Final Year Project
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              </Card>

                            </div>

                :           <div></div>
              }
            </div>

          </div> 
          
        </div>    

      </div>
    );

}

/*
<a
                    className='proj-link'
                    href="https://nbviewer.jupyter.org/github/ppoyusecci/2D-reflective-image-generation/blob/master/reflect_gan.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    nbviewer link
                    </a>

              */