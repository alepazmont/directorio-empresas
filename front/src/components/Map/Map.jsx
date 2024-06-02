import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};
 
const center = {
  lat: 40.484859888817205,
  lng: -3.7230726779006367
};

const Map = ({ locations }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCj09lN8tpjDD7lrEyumuqOGEtG3_utP8k">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

Map.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  })).isRequired
};

export default Map;

