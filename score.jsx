/*score1: add class with "className" attribute. class is reserved word in javascript
which jsx gets compiled into, so "className" is used. Quotes are required */

/*score2: addition of other elements to make our skeleton for our application
In React className not used to retrieve elements from the page. Mainly used for styling.
If div with no styling, className may not be necessary*/

/*score3: addition of properties. Components (Application function in this case) take an argument.
Argument is an object that takes in all the properties used when the instance of component was written out
Property (title="My Scoreboard") added in ReactDOM.render. 
To use roperty, wrap in curly braces otherwise it will be treated as text*/

/*score4: addition of propTypes property. propTypes are application specific object that contains all
the keys that a component can take, as well as a special type operation
  score4.1: use .isRequired to require certain properties
  score4.2: give a property a default value using "defaultProps" */

/*score5: partialization of components into smaller components.
Create function for partial (Header) and insert partial in main application by using
self-closing tag.  If there are props (properties), add them in tag.
  score5.1: made function for player (Player) component.  Added propTypes name (string) and score (number)
  score5.2: made function for counter component (Counter) and moves counter and score outside macro component */

/*score6: adds array with list of players in object form.  Must update propTypes in application to allow
for (and require) array.  Use arrayOf() instead of array.  arrayOf() takes argument that is the type of object in array
Instead of object, use shape() method.  Like arrayOf(), shape() takes argument that describes shape of object. This object
looks like propType definition using keys and values
In order to add players array to component, use .map() method on props.players (no for loops in react)
map() method takes function which will take each player in player array. Return what should be rendered for each player
  score6.1: adds keys to absolve: "Warning: Each child in an array or iterator should have a unique "key" prop" 
  Keys help react know which items in loop are being re-arranged, added, or deleted. Key must be unique.  
  Helps react recognize when it is being re-ordered so it can re-order each node instead of entire list
  Id keys must be added to application propTypes and added in Player component (key=player.id) in Application component

score7: Convert counter component to component class to allow for state (element that changes over time, as opposed to stateless).
Object that createClass takes is an object that will define the methods in our class.  Some methods are in React for speacial purposes, but we can add our own.
Must use this.props.score instead of props.score.  In a component class, props is actually a property of the class itself.
it does not get passed into the render function like it does in a stateless functional component.
Put propTypes in component class. When doing component classes, it is easier to put propTypes in component class 

score8: Use state management mechanism in React (not as good as state management tools from the community).
There are libraries to help manage state (flux, redux, etc.).
Create getInitialState() method to set counter state.  Add to counter class.  Replace "props. in this.props.score with "state"
Since we don't need props, remove from propTypes (can still keep object empty). Update player function to no longer pass score in <Counter/>*/

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

    getInitialState: function() {
        return {
            score: 0,
        }
    },

   render: function () {
    return (
        //Counter
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score">{this.state.score}</div>
            <button className="counter-action increment"> + </button>   
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