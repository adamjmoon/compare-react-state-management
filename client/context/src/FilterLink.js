import React from "react"
import PropTypes from "prop-types"
import { VisibilityContext } from "./VisibilityStore"
import { Link } from "react-todo-core/components"

const FilterLink = props => (
  <VisibilityContext.Consumer>
    {({ visibilityFilter, setVisibilityFilter }) => (
      <Link
        {...props}
        active={visibilityFilter === props.filter}
        onClick={() => setVisibilityFilter(props.filter)}
      />
    )}
  </VisibilityContext.Consumer>
)

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
}

export default FilterLink
