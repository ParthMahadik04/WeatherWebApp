import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1701166575979-a0d8813390fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA5fHxkdXN0eSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1691265693071-17c35bc733d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxyYWluJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="InfoBox">
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL:COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}</p>
            <p>Min Temp: {info.tempMin}&deg;C</p>
            <p>Max Temp: {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
