import React from 'react';
import PinSrc from './map-pin.svg';

// const AnyReactComponent = ({ text }) => <div style={{ width: 20, height: 20, borderRadius: 100, backgroundColor: 'red' }} />;

const Marker = ({ text }) => <img src={PinSrc} className="marker">{text}</img>;

export default Marker;
