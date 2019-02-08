function Application () {
    return (
        <div className="scoreboard">
            {/*header*/}
            <div className="header">
                <h1>Scoreboard</h1>
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

ReactDOM.render(<Application />, document.getElementById("container"));