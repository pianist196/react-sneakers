function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src={props.imageURL} alt="sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button">
                    <img width={32} height={32} src="/img/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    )
}

export default Card
