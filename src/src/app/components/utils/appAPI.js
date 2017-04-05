var  AppActions = require('../actions/AppActions');

module.exports = {
    upload: function(link, elem){
        var fReader = new FileReader();
        fReader.readAsDataURL(link.files[0]);
        $(fReader).on('loadend', function(){
            var img = $(elem).find('img')[0];
            img.src = event.target.result;
        }); 
    },
    getMenuItems: function() {
        var menuItems = [
            {item: 'Useful link', url: 'http://www.google.com'},
            {item: 'An other useful website', url: 'http://www.yahoo.com'}
        ];
        return menuItems;
    },
    getIcons: function() {
        var icons = [
            {
                'name': 'All',
                'iconCat': 'img/icons/all.png',
                'items': [

                    'img/svg/add-button-inside-black-circle.svg',
                    'img/svg/apple-black-logo.svg',
                    'img/svg/apple-black-silhouette-with-a-leaf.svg',
                    'img/svg/arrow-down-on-black-circular-background.svg',
                    'img/svg/black-back-closed-envelope-shape.svg',
                    'img/svg/check-mark-white-on-black-circular-background.svg',
                    'img/svg/favourites-filled-star-symbol.svg',
                    'img/svg/idea-and-creativity-symbol-of-a-lightbulb.svg',
                    'img/svg/mobileme-logo-of-black-cloud.svg'
                ]
            },
            {
                'name': 'Shapes',
                'iconCat': 'img/icons/categorie.png',
                'items': [
                    'img/svg/question-mark-on-a-circular-black-background.svg',
                    'img/svg/tree-silhouette.svg',
                    'img/svg/t-shirt-black-silhouette.svg',
                    'img/svg/twitter-black-shape.svg',
                    'img/svg/twitter-logo-on-black-background.svg',
                    'img/svg/twitter-logo-on-black-background.svg'
                ]
            }
        ];
        return icons;
    },
    getBackgrounds: function() {
        var backgrounds = [
            {
                'name': 'All',
                'iconCat': 'img/icons/all.png',
                'items': [
                    'img/bg/orange.png',
                    'img/bg/bleu.png'
                ]
            },
            {
                'name': 'Gradients',
                'iconCat': 'img/icons/categorie-bg.png',
                'items': [
                    'img/bg/bleu.png',
                    'img/bg/orange.png',
                    'img/bg/bleu.png',
                    'img/bg/orange.png',
                  ]
            }
        ];
        return backgrounds;
    },
    getSocialsMedia: function() {
        var socialsMedia = [
            {url: 'img/icons/facebook.png', text: 'Facebook'},
            {url: 'img/icons/twitter.png', text: 'Twitter'},
            {url: 'img/icons/google.png', text: 'Google'},
            {url: 'img/icons/pinterest.png', text: 'Pinterest'}
        ];
        return socialsMedia;
    },
    getNumberBorderRadius: function(){
        return 600;
    }
};