/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface IMapComponentProps {
  location: {
    lat: number;
    lng: number;
  };
  click: (lat: number, lng: number) => void;
  zoom: number;
  marker: number;
}
export function Map({ location, zoom, marker, click }: IMapComponentProps) {
  const key = process.env.REACT_APP_GOOGLE_KEY;
  const styleMap = {
    maxWidth: '1020px',
    height: '400px',
    borderRadius: '5px',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(key),
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={styleMap}
      center={location}
      zoom={zoom}
      onClick={(e) => {
        const lat = e.latLng?.lat();
        const lng = e.latLng?.lng();
        click(lat!, lng!);
      }}
    >
      {marker ? <Marker position={location} /> : <></>}
    </GoogleMap>
  ) : (
    <></>
  );
}
