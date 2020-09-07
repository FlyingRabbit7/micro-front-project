import React from 'react';

class News extends React.Component{
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>news</div>
        )
    }
}

export default News
