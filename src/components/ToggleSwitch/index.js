import classnames from 'classnames';
import styles from './index.module.css';

const ToggleSwitch = ({ toggled, id, name, label, toggle }) => (
  <div className={classnames(
    styles['toggle-switch'],
    {
      [styles['toggle-switch--is-toggled']]: toggled
    }
  )}>
    <input
      className={styles['toggle-switch__input']}
      type="checkbox"
      id={id}
      name={name}
      checked={toggled}
      onChange={toggle}
    />
    <label
      className={styles['toggle-switch__slider']}
      htmlFor={id}
    />
    <label
      className={styles['toggle-switch__label']}
      htmlFor={id}
    >
      {label}
    </label>
  </div>
);

export default ToggleSwitch;