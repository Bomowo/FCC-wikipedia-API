import PropTypes from 'prop-types';

export default function Panel ({link, title, snippet}) {
    //regex for clean up html tags in snippet from wikimedia API
    const regex = /(<([^>]+)>)/gi;

    return(
    <a href={link} target='_blank' rel="noreferrer">
        <h2>{title}</h2>
        <p>{snippet.replace(regex, "")+'...'}</p>
    </a>
    ) 

}

Panel.propTypes = {
    link: PropTypes.string.isRequied,
    title: PropTypes.string.isRequied,
    snippet: PropTypes.string.isRequied
}