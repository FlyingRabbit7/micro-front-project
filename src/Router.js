import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App'
import News from './News'

class RouterComponent extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    
                    <Route exact path="/" component={App} />
                    {/* <Redirect to="/somewhere/else" /> */}
                    <Route path="/news" component={News} />
                    <Route path="/children" children={(obj) => {
                        console.log(obj)
                        return (
                            <div className={obj.match ? 'active' : ''}>
                                children
                            </div>
                        )
                    }} />
                </div>
            </Router>
        )
    }
}

export default RouterComponent
