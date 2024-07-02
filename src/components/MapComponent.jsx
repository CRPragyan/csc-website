import React from 'react'
import { GoogleMap, useJsApiLoader,OverlayView } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 26.4629273,
  lng: 90.4229076
};

const renderMarker = (markerProps) => (
    <OverlayView
      position={center}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={(width, height) => ({
        x: -(width / 2),
        y: -(height / 2)
      })}
    >
      <div style={{ fontWeight: 'bold', fontSize: '14px', color: 'red', cursor: 'default' }}>
        CSC Computer Center
      </div>
    </OverlayView>
  );

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCdadn4q6TzQRM9W7VUBVP7i9zaDX_L8mk"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
   
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        {renderMarker()}
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)