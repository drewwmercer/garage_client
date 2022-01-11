import React from 'react';
import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap';

export class VehicleView extends React.Component {

    render() {
        const { vehicle, onBackClick } = this.props;

        return (
            <div className="vehicle-view">
                <div className="vehicle-image">
                    <img src={vehicle.ImagePath} />
                </div>
                <div className="vehicle-nickname">
                    <span className="label">Nickname: </span>
                    <span className="value">{vehicle.Nickname}</span>
                </div>
                <div className="vehicle-description">
                    <span className="label">Description: </span>
                    <span className="value">{vehicle.Year} {vehicle.Model}</span>
                </div>
                <button onClick={() => { onBackClick(null); }}>Back to Garage</button>
            </div>
        );
    }
}