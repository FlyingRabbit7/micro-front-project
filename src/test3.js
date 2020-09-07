import React from 'react';

class Test3 extends React.Component {
    state = {
        num: 0
    }

    componentDidUpdate() {
        console.log('test3')
    }

    onAdd = (e) => {
        console.log(e.target)
        this.setState({
            num: 1
        })
        e.stopPropagation()
        // e.preventDefault()
    }

    render() {
        return (
            <span onClick={this.onAdd}>test3</span>
        )
    }
}


export default Test3