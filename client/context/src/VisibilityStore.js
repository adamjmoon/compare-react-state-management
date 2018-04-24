import React from "react"

const defaultState = {
  visibilityFilter: "SHOW_ALL",
}

export const VisibilityContext = React.createContext(defaultState)

export default class VisibilityStore extends React.Component {
  state = defaultState

  setVisibilityFilter = visibilityFilter => {
    this.setState({ visibilityFilter })
  }

  render() {
    return (
      <VisibilityContext.Provider
        value={{
          visibilityFilter: this.state.visibilityFilter,
          setVisibilityFilter: this.setVisibilityFilter,
        }}>
        {this.props.children}
      </VisibilityContext.Provider>
    )
  }
}
