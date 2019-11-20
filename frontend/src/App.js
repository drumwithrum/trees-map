import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    center: {
      lat: 52.2297,
      lng: 21.0122,
    },
    zoom: 10
  };

  handleClick() {
    fetch('http://localhost:4000/test.json')
      .then(resp => resp.json())
      .then(resp => this.setState({ data: resp.result.records }))
      .catch(e => alert(e));
  }
  // 52.2297° N, 21.0122° E
  render() {
    const data = this.state.data || [];
    return (
      <div className="App">
        <button onClick={this.handleClick}>Pobierz</button>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {data.map(item => (
              <Marker
                lng={item.x_wgs84}
                lat={item.y_wgs84}
                key={item._id}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
