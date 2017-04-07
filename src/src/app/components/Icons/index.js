import React, { Component } from 'react';

import Icon from './components/Icon';
import Upload from '../Upload';
import TitleCategorie from '../TitleCategorie';

export default class Icons extends Component {
    componentDidMount () {
        $('.items .icon-svg').each(function(){
            const $img = $(this);
            const imgID = $img.attr('id');
            const imgClass = $img.attr('class');
            const imgURL = $img.attr('src');

            $.get(imgURL, function(data) {
                let $svg = $(data).find('svg');
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }

                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass);
                }
                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);
            }, 'xml');
        });
    }

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