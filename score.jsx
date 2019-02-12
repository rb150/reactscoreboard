
var PLAYERS = [
    {
        name: "someone",
        score: 10,
    },
    {
        name: "aguy",
        score: 20,
    },
    {
        name: "person",
        score: 30,
    },
]

function Header(props) {
    return (
            /*header*/
            <div className="header">
                <h1>{props.title}</h1>
            </div>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired, //.isRequired here, because it always requires a value?
};

function Counter(props) {
    return (
        //Counter
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment"> + </button>   
        </div>
    );
}

Counter.propTypes = {
    score: React.PropTypes.number.isRequired
}

function Player(props) {
    return (
         /*player*/
        <div className="player">
        <div className="player-name">
            {props.name}
        </div>
        {/*scores*/}
        <div className="player-score">
            {/*counter*/}
            <Counter score={props.score}/>
        </div>
    </div>
    );

}

Player.propTypes = {
    name: React.PropTypes.string.isRequired
   }

function Application (props) {
    return (
        <div className="scoreboard">
            <Header title={props.title}/>
            {/*players, scores, plus/minus*/}
            <div className="players">
                {/*player*/}
                {props.players.map(function(player) {
                    return <Player name={player.name} score={player.score} />
                })}

            </div>
        </div>

    );
}

Application.propTypes = {
    title: React.PropTypes.string, //defines propTypes as with lower case p, React definition is in upper case
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
    })).isRequired
};

Application.defaultProps = { //makes .isRequired unnecessary in above definition. Still works though.
    title: "Scoreboard"
};



ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById("container"));