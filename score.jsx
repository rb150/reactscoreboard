
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


function Application (props) {
    return (
        <div className="scoreboard">
            <Header title={props.title}/>
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
    title: React.PropTypes.string, //defines propTypes as with lower case p, React definition is in upper case
};

Application.defaultProps = { //makes .isRequired unnecessary in above definition. Still works though.
    title: "Scoreboard"
};



ReactDOM.render(<Application />, document.getElementById("container"));