function Application (props) {
    return (
        <div className="scoreboard">
            {/*header*/}
            <div className="header">
                <h1>{props.title}</h1>
            </div>
            {/*players, scores, plus/minus*/}
            <div className="players">
                {/*player*/}
                <div className="player">
                    <div className="player-name">
                        Awesome awesomeson
                    </div>
                    {/*scores*/}
                    <div className="player-score">
                        {/*counter*/}
                        <div className="counter">
                            <button className="counter-action decrement"> - </button>
                            <div className="counter-score">31</div>
                            <button className="counter-action increment"> + </button>   
                        </div>
                    </div>
                </div>

                {/*player*/}
                <div className="player">
                    <div className="player-name">
                        Awesome awesomeson
                    </div>
                    {/*scores*/}
                    <div className="player-score">
                        {/*counter*/}
                        <div className="counter">
                            <button className="counter-action decrement"> - </button>
                            <div className="counter-score">31</div>
                            <button className="counter-action increment"> + </button>   
                        </div>
                    </div>
                </div>              
                
            </div>
        </div>

    );
}

Application.propTypes = {
    title: React.PropTypes.string.isRequired, //defines propTypes as with lower case p, React definition is in upper case
}

ReactDOM.render(<Application />, document.getElementById("container"));