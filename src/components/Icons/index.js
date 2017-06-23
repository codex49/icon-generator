import React, { Component } from 'react';

import Icon from './components/Icon';
import Upload from '../Upload';
import TitleCategory from '../TitleCategorie';

import uploadIcon from '../../public/assets/img/icons/upload.png';

export default class Icons extends Component {
    renderListIcons = () => {
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
                        <TitleCategory link={catagorie.iconCat}>{catagorie.name}</TitleCategory>
                        <ul className="items">{items}</ul>
                    </li>
                );
            })
        );
    }

    render () {
        return (
            <div className="nav-element">
                <h2 className="title-catagories">Design Elements</h2>
                <ul className="catagories">
                    <Upload
                        active='active'
                        link={uploadIcon}
                    />
                    {this.renderListIcons()}
                </ul>
            </div>
        );
    }
}