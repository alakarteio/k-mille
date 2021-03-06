import React from 'react'
import PropTypes from 'prop-types'
import { component } from 'ui-hocs'
import styles from './context.styles'

const Context = ({
  classes,
  name,
  src,
  selected,
  onChange,
}) => {
  if (name === 'input') {
    return (
      <div>
        <label htmlFor="other">
          Autre:
          <input id="other" type="text" onChange={onChange} />
        </label>
      </div>
    )
  }

  return (
    <label htmlFor={name} className={classes.main}>
      <input type="radio" id={name} name="context" className={classes.input} defaultChecked={selected} onChange={onChange} />
      <img src={src} alt={name} className={classes.avatar} />
    </label>
  )
}

Context.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
}

Context.defaultProps = {
  classes: {},
  src: undefined,
  selected: false,
  onChange: undefined,
}

export default component({ styles })(Context)
