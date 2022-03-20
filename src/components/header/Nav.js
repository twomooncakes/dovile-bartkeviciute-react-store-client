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
    this.setState({ categories: navData.data.categories.map(cat => cat.name) }); 
    // window.location.pathname !== "/" && this.context.changeCurrentCat(window.location.pathname.slice(1));

    // if(window.location.pathname === "/") {
    //   this.context.changeCurrentCat("all");
    // } 
    if(this.state.categories.includes(window.location.pathname.slice(1))) {
      this.context.changeCurrentCat(window.location.pathname.slice(1));
    }
  }

  render() { 
    return (
      <nav>
        {this.state.categories.map(cat => (
          <NavLink className={(this.context.currentCat === cat) ? "active" : ""} onClick={() => this.context.changeCurrentCat(cat)} key={cat} to={`/${cat}`}>
            {cat}
          </NavLink>
        ))}
      </nav>
    );
  }
}

export default Nav;