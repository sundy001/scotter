import React, {Component} from 'react';
import './foundation.min.css';
import Tab from "./components/Tab";
import ListPage from "./pages/ListPage";
import MapPage from "./pages/MapPage";

class App extends Component {
  state = {
    currentTag: 'list'
  };

  onTabChange = (e) => {
    this.setState({
      currentTag: e.currentTarget.dataset.tabId
    });
  };

  render() {
    const { currentTag } = this.state;

    const tabs = [
      {
        id: 'list',
        name: 'List',
        component: () => {
          return (
            <ListPage />
          );
        }
      },
      {
        id: 'map',
        name: 'Map',
        component: () => {
          return (
            <MapPage />
          );
        }
      }
    ];

    return (
      <div className="App">
        <Tab tabs={ tabs } current={ currentTag } onTabChange={ this.onTabChange }/>
      </div>
    );
  }
}

export default App;
