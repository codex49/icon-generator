import React, { Component } from 'react';

import Icon from './components/Icon';
import Upload from '../Upload';
import TitleCategorie from '../TitleCategorie';

export default class Icons extends Component {
    renderListIcons () {
        return(
            this.props.listCategories.map(function(catagorie, i){
                const items = catagorie.items.map(function(item, f){
                    return(
                        <Icon
                            id={catagorie.name+f}
                            key={f}
                            link={item}/>
                    );
                });
                return (
                    <li key={i} className="catagorie">
                        <TitleCategorie link={catagorie.iconCat}>{catagorie.name}</TitleCategorie>
                        <ul className="items">{items}</ul>
                    </li>
                );
            })
        );
    }

    render (){
        return (
            <div className="nav-element">
                <h2 className="title-catagories">Design Elements</h2>
                <ul className="catagories">
                    <Upload
                        active='active'
                        link="img/icons/upload.png"
                    />
                    {this.renderListIcons()}
                </ul>
            </div>
        );
    }
}