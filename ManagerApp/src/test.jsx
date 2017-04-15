import React from 'react';
import {Toolbar, Page, Button} from 'react-onsenui';
import List from './List';
import Qaa from './Qaa';

export default class MainPage extends React.Component {
    constructor(){
        super();
        this.state = {
            number:1
        };
    }
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  math(){
     const newState = {}
     newState.number = this.state.number + 1;
     this.setState(newState)
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
            <lable>{this.state.number}</lable>
          <Button onClick={this.math.bind(this)}>go</Button>

        </p>

        <Qaa color={1} />
        <Qaa color={2} />
      </Page>
    );
  }
}