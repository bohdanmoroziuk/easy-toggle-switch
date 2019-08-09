import { Component, linkEvent } from 'inferno';
import ToggleSwitch from './components/ToggleSwitch';
import styles from './App.module.css';

const toggle = (instance, event) => {
  const { name, checked } = event.target;

  instance.setState({
    [name]: checked
  });
};
export default class App extends Component {
  state = {
    'toggle-1': true,
    'toggle-2': false,
    'toggle-3': false,
  }

  renderToggleSwitch = (_, index) => {
    const key = `toggle-${index}`;

    return (
      <ToggleSwitch
        toggled={this.state[key]}
        id={key}
        name={key}
        label="Toggle Switch"
        toggle={linkEvent(this, toggle)}
      />
    );
  }

  render() {
    return (
      <div className={styles['app']}>
        {[...new Array(3)].map(this.renderToggleSwitch)}
      </div>
    );
  }
}