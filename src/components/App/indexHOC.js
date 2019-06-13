import React from 'react';

export default (WrappedComponent) => {
    return class indexHOC extends React.Component {
        state = {}
        render() {
            if (this.state.length === 0) return <div>Loading..</div>
            return (
                    <WrappedComponent {...this.props} />
                    // context do sesji
            )
        }
    }
};
