import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../../scss/Main.scss';
import {useState} from 'react';

const MapContainer = () => {
    const [selected, setSelected] = useState({});
    const mapStyles = {        
        height: "50vh",
        width: "25%",
    };
    
    const defaultCenter = {
        name: 'B3 Kodify AB',
        lat: 55.60442813681576, lng: 12.99820809325465
    }

    const onSelect = defaultCenter => {
        setSelected(defaultCenter)
    }
  
    return (
        <LoadScript
            googleMapsApiKey=''>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={14}
                center={defaultCenter}
            />
            <Marker 
                key={defaultCenter.name} 
                position={defaultCenter.location}
                onClick={() => onSelect(defaultCenter)}
            />
        </LoadScript>
    )
}
export default MapContainer;