"use client"
import React, { useEffect, useRef } from 'react'
import mapboxgl, { MapMouseEvent } from 'mapbox-gl'


const ArrowMapPage = () => {

    const mapContainer = useRef<HTMLInputElement>(null)

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYW5keTkxMDYxNCIsImEiOiJjbG5heGQ0YnAwN2hoMmxvMm1rbjR5aW9jIn0.HD5O5lWSWsJUMfKkW-WDaQ"


        const lng = -73.913;
        const lat = 40.763;
        const zoom = 11;

        const m = new mapboxgl.Map({
            container: mapContainer.current || "",
            style: "mapbox://styles/andy910614/clvd8escd01r401ph6uue19hy",
            center: [lng, lat],
            zoom: zoom,
            minZoom: 10,
            maxZoom: 15,
            interactive: false,
            doubleClickZoom: false,
        })

        m.dragRotate.disable();
        m.touchZoomRotate.disableRotation();
        return () => {
            m.remove();
        };
    }, [])



    return (
        <div className="w-[100vw] h-[100vh]" ref={mapContainer} />
    )
}

export default ArrowMapPage