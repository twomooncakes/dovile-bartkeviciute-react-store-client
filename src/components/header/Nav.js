import { Component } from "react";
import css from "./styles/Nav.module.css";
import { NavLink } from "react-router-dom";
import ShopContext from "../../store/ShopContext";
import { queryFetch } from "../../utils/helpers";

const categoriesQuery = `
  {
    categories {
      name
    }
  }
`;

class Nav extends Component {
  static contextType = ShopContext;
  
  state = { categories: [] };

  async componentDidMount() {
    const navData = await queryFetch(categoriesQuery);
    this.setState({ categories: navData.data.categories }); 
    localStorage.setItem("currentCategory", window.location.pathname.slice(1));
  }

  render() { 
    return (
      <nav>
        {this.state.categories.map(cat => (
          <NavLink className={(this.context.currentCat === cat.name) ? "active" : ""} onClick={() => this.context.changeCurrentCat(cat.name)} key={cat.name} to={cat.name}>
            {cat.name}
          </NavLink>
        ))}
      </nav>
    );
  }
}

export default Nav;