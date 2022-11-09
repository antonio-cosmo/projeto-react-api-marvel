/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface IMapComponentProps {
  location: {
    lat: number;
    lng: number;
  };
  clickMap: (lat: number, lng: number) => Promise<void>;
  zoom: number;
  marker: boolean;
}

export function Map({ location, zoom, marker, clickMap }: IMapComponentProps) {
  let key = '';
  if (import.meta.env.VITE_APP_GOOGLE_KEY) {
    key = import.meta.env.VITE_APP_GOOGLE_KEY;
  }
  const styleMap = {
    maxWidth: '1020px',
    height: '400px',
    borderRadius: '5px',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={styleMap}
      center={location}
      zoom={zoom}
      onClick={(e) => {
        const lat = e.latLng?.lat();
        const lng = e.latLng?.lng();
        clickMap(lat!, lng!);
      }}
    >
      {marker ? <Marker position={location} /> : <></>}
    </GoogleMap>
  ) : (
    <></>
  );
}
