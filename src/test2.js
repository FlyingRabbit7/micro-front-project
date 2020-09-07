import React from 'react';
import { MyContext } from './context'

class Test2 extends React.Component {
    // static contextType = MyContext;
    componentDidMount() {
        console.log(this.context)
    }

    componentWillUpdate() {
        console.log(this.context)
    }

    render() {
        return (
            <MyContext.Consumer>
                {(value) => (
                    <div>
                        {value}
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

Test2.contextType = MyContext;

export default Test2