// TODO
var Apples = () => (
  <li>Apples</li>
);

var Oranges = () => (
  <li>Oranges</li>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  onItemHover() {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hovered ? '800' : '200'
    }

    return (
      <li style={style} onMouseEnter={this.onItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>Grocery List
    <GroceryListItem groceryItem={'Apples'} />
    <GroceryListItem groceryItem={'Oranges'} />
  </ul>
  
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));