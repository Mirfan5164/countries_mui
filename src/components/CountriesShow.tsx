import React from 'react';
import {CountiresType} from "../App";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';

 type prop = {
    countryProp: CountiresType;
 }

export default function CountriesShow({countryProp}: prop) {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={countryProp.flags.png}
        alt={countryProp.name.common}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         {countryProp.name.common}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         Official: {countryProp.name.official}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This country is situated in the region of {countryProp.region}, and has the capital named {countryProp.capital}. 
          The borders of this country are {countryProp.borders}
        </Typography>
        <Avatar 
        alt={countryProp.name.common}
        src={countryProp.flags.png}
        sx={{ width: 36, height: 36 }}
        />
      </CardContent>
    </CardActionArea>
  </Card>
  )
}