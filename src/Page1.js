import React from 'react';

class ProfilePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      flag: false,
      val1: '',
      selectVal: 'a2'
    };
    this.id = 2
  }

  componentWillUpdate (aaa) {
    console.log(aaa)
  }

  componentDidMount () {
    console.log('didMount')
  }

  showMessage = () => {
    alert('Followed ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  handleClick2 = () => {
    let _flag = !this.state.flag
    this.setState({
      flag: _flag,
    })
  }

  handleChange = (e) => {
    // console.log(this.id)
    // console.log(e.target.value)
    // console.log(this.state.val1)
    // this.setState({
    //   val1: e.target.value
    // })
  }

  handleSubmit = (e) => {
    console.log(this.state.val1)
    e.preventDefault();
  }

  handleSelect = (e) => {
    this.setState({
      selectVal: e.target.value
    })
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number}>{number}</li>
    );
    return (
      <div>
        <div>
          <select value={this.state.selectVal} onChange={this.handleSelect}>
            <option value="a1">a1</option>
            <option value="a2">a2</option>
            <option value="a3">a3</option>
          </select>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.val1} onChange={this.handleChange}></input>
            <input type="submit" value="提交" />
          </form>
        </div>
        {
          this.state.flag && 
          <ul>
            { numbers.map((number) =>
              <li key={number}>{number}</li>
            ) }
          </ul>
        }
        <button onClick={ this.handleClick2 }>change</button>
        <span>hello world</span>
        <button onClick={ this.handleClick }>Follow</button>
      </div>
    )
  }
}

export default ProfilePage;