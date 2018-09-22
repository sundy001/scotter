import React, { Component } from 'react';
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ScootterList from "../components/ScooterList";
import getData from "../services/getData";
import filterScooters from "../services/filterScooters";

const SCOOTER_PER_PAGE = 10;
const PULL_INTERVAL = 10 * 1000;

export default class ListPage extends Component {
  state = {
    modelFilter: '',
    minValue: null,
    maxValue: null,
    pageIndex: 0,
    scooters: []
  };

  async updateScooters() {
    const scooters = await getData();

    this.setState({
      scooters
    }, () => {
      this.scheduleNextPull();
    });
  }

  scheduleNextPull() {
    this.timeoutId = setTimeout(() => {
      this.updateScooters();
    }, PULL_INTERVAL);
  }

  componentDidMount() {
    this.updateScooters();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  onModelChange = (event) => {
    this.setState({
      modelFilter: event.currentTarget.value.toLowerCase(),
      pageIndex: 0
    });
  };

  onMinChange = (event) => {
    const value = parseInt(event.currentTarget.value, 10);
    this.setState({
      minValue: isNaN(value) ? null : value,
      pageIndex: 0
    });
  };

  onMaxChange = (event) => {
    const value = parseInt(event.currentTarget.value, 10);
    this.setState({
      maxValue: isNaN(value) ? null : value,
      pageIndex: 0
    });
  };

  onPageChange = (event) => {
    this.setState({
      pageIndex: parseInt(event.currentTarget.dataset.pageIndex, 10)
    });
  };

  render() {
    const { modelFilter, pageIndex, scooters, minValue, maxValue } = this.state;

    const filteredScooters = filterScooters(scooters, modelFilter, minValue, maxValue);

    const start = pageIndex * SCOOTER_PER_PAGE;
    const end = start + SCOOTER_PER_PAGE;
    const totalPages = Math.ceil(filteredScooters.length / SCOOTER_PER_PAGE);
    const paginatedScooters = filteredScooters.slice(start,  end);

    return (
      <React.Fragment>
        <Filter
          onModelChange={ this.onModelChange }
          onMinChange={ this.onMinChange }
          onMaxChange={ this.onMaxChange }
        />
        <Pagination totalPages={ totalPages } current={ pageIndex } onPageChange={ this.onPageChange } />
        <ScootterList scooters={ paginatedScooters }/>
        <Pagination totalPages={ totalPages } current={ pageIndex } onPageChange={ this.onPageChange } />
      </React.Fragment>
    );
  }
}