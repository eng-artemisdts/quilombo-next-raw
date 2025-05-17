"use client";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

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
  width = "524px",
  height = "313px",
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
      mapTypeId: "satellite",
    }),
    []
  );

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
      options={mapOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
