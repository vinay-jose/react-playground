import '../AppPlayGround.css';

const Card = ({ header, title, desc }) => {
    return(
        <div className = "card">
            <h2>{header}</h2>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    )
};

export default Card;