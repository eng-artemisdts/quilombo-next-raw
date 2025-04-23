"use client";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useMemo } from "react";

interface GoogleMapsClientProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  width?: string;
  height?: string;
}

export default function GoogleMaps({
  lat = -20.37993,
  lng = -43.231381,
  zoom = 18,
  width = "100%",
  height = "500px",
}: GoogleMapsClientProps) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
  });

  const center = useMemo(
    () => ({
      lat,
      lng,
    }),
    [lat, lng]
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
    }),
    []
  );

  // Controla o callback quando o mapa é carregado
  const onLoad = useCallback((map: google.maps.Map) => {
    console.log("Mapa carregado:", map);
  }, []);

  if (!isLoaded) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={{
        width: width,
        height: height,
      }}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      options={mapOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
