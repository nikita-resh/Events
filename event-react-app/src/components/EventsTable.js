import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class EventsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };

    this.handleReload = this.handleReload.bind(this);
  }

  async handleReload(event) {
    const response = await api.events({ date: "" });
    this.setState({ events: response });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleReload}>Reload</button>
        <h3>Event table</h3>
        <table>
          {this.state.events.map((event) => (
            <tr>
              <td>{event.id} </td>
              <td>{event.name}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default EventsTable;
