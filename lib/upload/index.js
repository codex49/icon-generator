import $ from 'jquery';

export default (link, elem) => {
    const fReader = new FileReader();

    fReader.readAsDataURL(link.files[0]);

    $(fReader).on('loadend', function(){
        const img = $(elem).find('img')[0];
        img.src = event.target.result;
    });
}