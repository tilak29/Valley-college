import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img1 from '../../src/assets/images/1.png';
import img2 from '../../src/assets/images/2.png'
import img3 from '../../src/assets/images/3.png'
import img4 from '../../src/assets/images/4.png'
import img5 from '../../src/assets/images/5.png'
import img6 from '../../src/assets/images/6.png'
import img7 from '../../src/assets/images/7.png'
import img8 from '../../src/assets/images/8.png'
import img9 from '../../src/assets/images/9.png'
import { useCarousel } from 'use-carousel-hook';

export default function ActionAreaCard() {
  const {ref, previous, next } = useCarousel();

  return (
    <div ref={ref}>

    <div className="cards">
<Card sx={{ Width: 350, height:350 ,boxShadow:'none' }}>      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ Width: 350, height:350 ,boxShadow:'none'}}>      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: 350, height:350,boxShadow:'none' }}>      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: 350, height:350 ,boxShadow:'none'}}>      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img4}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: 350, height:350 ,boxShadow:'none'}}>      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img5}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: 350, height:350 ,boxShadow:'none'}}>      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img6}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: 350, height:350,boxShadow:'none' }}>      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img7}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: 350, height:350 ,boxShadow:'none'}}>      
    <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img8}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ Width: 350, height:350,boxShadow:'none' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={img9}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,textAlign:"start",marginLeft:-2}}component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Typography sx={{fontSize:12,textAlign:"start",marginLeft:-2}} color="text.secondary">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui....
          <br/><br/>14 Dec 2022</Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>

    
    </div>

   );
}