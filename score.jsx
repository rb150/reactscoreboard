var PLAYERS = [
    {
        name: "someone",
        score: 10,
        id: 1,
    },
    {
        name: "aguy",
        score: 20,
        id: 2,
    },
    {
        name: "person",
        score: 30,
        id: 3,
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

var Counter = React.createClass({
    propTypes: {},

    incrementScore: function(e) {
        this.setState({
            score : (this.state.score + 1)
        })
    },

    decrementScore: function(e) {
        this.setState({
            score : (this.state.score - 1)
        })
    },

    getInitialState: function() {
        return {
            score: 0,
        }
    },

   render: function () {
    return (
        //Counter
        <div className="counter">
            <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
            <div className="counter-score">{this.state.score}</div>
            <button className="counter-action increment" onClick={this.incrementScore}> + </button>   
        </div>
    );
   } 
});


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
            <Counter />
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
                    return <Player name={player.name} score={player.score} key={player.id} />
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
        id: React.PropTypes.number.isRequired,
    })).isRequired,
    
};

Application.defaultProps = { //makes .isRequired unnecessary in above definition. Still works though.
    title: "Scoreboard"
};



ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById("container"));