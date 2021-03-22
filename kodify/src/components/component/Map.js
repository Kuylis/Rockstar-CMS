import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../../scss/main.scss';
import {useState} from 'react';


const MapContainer = () => {
    const [selected, setSelected] = useState({});
    const mapStyles = {        
        height: "50vh",
        width: "100%",
        fontSize: '2rem',

    };
    const defaultCenter = {
        name: 'B3 Kodify AB',
        location:{
        lat: 55.60442813681576, lng: 12.99820809325465
        }
    }

    const onSelect = defaultCenter => {
        setSelected(defaultCenter);
    }
  
    return (
        <>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={14}
                    center={defaultCenter.location}
                >
                    <Marker 
                        key={defaultCenter.name} 
                        position={defaultCenter.location}
                        onClick={() => onSelect(defaultCenter)}
                        
                    />
                        {selected.location && <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        ><>
                        <p>{selected.name}</p>
                       
                        
                        </></InfoWindow>
                        }
                </GoogleMap>
            </LoadScript>
        </>
    )
}
export default MapContainer;