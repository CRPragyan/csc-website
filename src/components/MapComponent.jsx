import React from "react";

import {
  GoogleMap,
  useJsApiLoader,
  OverlayView,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "1200px",
  height: "400px",
};

const center = {
  lat: 26.4638099,
  lng: 90.4229076,
};

const markers = [
  {
    id: 1,
    position: { lat: 26.4629273, lng: 90.4229076 },
    label: "CSC Computer Center",
  },
  // Add more markers here if needed
];

const renderMarker = markerProps => (
  <OverlayView
    position={center}
    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    getPixelPositionOffset={(width, height) => ({
      x: -(width / 2),
      y: -(height / 2),
    })}
  >
    <div
      style={{
        fontWeight: "bold",
        fontSize: "14px",
        color: "red",
        cursor: "default",
      }}
    >
      CSC Computer Center
    </div>
  </OverlayView>
);

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map(marker => (
        <Marker
          key={marker.id}
          position={marker.position}
          label={marker.label}
        />
      ))}
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
