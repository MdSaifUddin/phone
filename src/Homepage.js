import React, { Component } from 'react';
import './homepage.css';
import Header from './Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Homepage extends Component {

    constructor() {
        super();
        this.state={
            subscriberList : [
            { id: 1, name: 'Saif', phone: 234234234 },
            { id: 2, name: 'Hasbul', phone: 3453453443 }
        ]
        }
    }
    deleteHandler(sub_id){
        var list=this.state.subscriberList;
        var sub_index=0;
        list.forEach((sub,index)=>{
            if(sub.id==sub_id)
            {
                sub_index=index;
                
            }
        })
        list.splice(sub_index,1);
        this.setState({subscriberList:list});
        console.log(list);
    }
    render() {
        return (
            
            <div>
                <Header name="Phone Directory" />
                <Link to="/Add"><button className="btn btn-success m-2">Add</button></Link>
                <div className="list-container m-2">
                    <h5 className="list-item">Name</h5><h5 className="list-item">Phone</h5>
                </div>
                {
                    this.state.subscriberList.map(list => {
                        return <div key={list.id} className="list-container m-2">
                            <span className="list-item">{list.name}</span>
                            <span className="list-item">{list.phone}</span>
                            <button className="btn btn-danger" onClick={this.deleteHandler.bind(this,list.id)}>Delete</button>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default Homepage;