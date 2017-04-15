import React from 'react';

export default class Qaa extends React.Component {

    renderBox(){
        if (this.props.color === 1) {
            return <div className="redbox"></div>
        } else {
            return <div className="redbox1"></div>
        }
    }

    render() {
        console.log(this.props.color);

        return (
            <div>
                {
                  this.renderBox.bind(this)()
                }
            </div>
        );
    }

}