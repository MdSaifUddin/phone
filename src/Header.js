import React,{Component} from 'react';
import './header.css';

class Header extends Component
{
    render(){
        return(
            <div className="container-fluid bg-dark text-white text-center p-4 text-uppercase display-1 header">
                {this.props.name}
            </div>
        )
    }
}
export default Header;