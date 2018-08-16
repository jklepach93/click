import React from "react";
import Characters from "../../friends.json";


console.log(Characters);


class Counter extends React.Component {
    state = {
        count: 0,
        highScore: 0,
        clicked1: false,
        clicked2: false,
        clicked3: false,
        clicked4: false,
        clicked5: false,
        clicked6: false,
        clicked7: false,
        clicked8: false

    };

    Shuffle = (o) => {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    handleWin = () => {
        if (this.state.count === 7) {
            alert("You Won!");
            this.setState({
                count: 0,
                clicked1: false,
                clicked2: false,
                clicked3: false,
                clicked4: false,
                clicked5: false,
                clicked6: false,
                clicked7: false,
                clicked8: false
            });
        }
    }

    handleScore = () => {
        if (this.state.count >= this.state.highScore) {
            this.setState({
                highScore: this.state.count
            });
            console.log(`High Score: ${this.state.highScore}`);
        }
    }


    handleClick = event => {

        let id = event.target.getAttribute("dataclicked");


        if (id == 1 && this.state.clicked1 === false) {
            this.setState({
                count: this.state.count + 1,
                clicked1: this.state.clicked1 = true
            });
            this.handleWin();
        }
        else if (id == 2 && this.state.clicked2 === false) {
            this.setState({
                count: this.state.count + 1,
                clicked1: this.state.clicked2 = true
            });
            this.handleWin();
        }
        else if (id == 3 && this.state.clicked3 === false) {
            this.setState({
                count: this.state.count + 1,
                clicked3: this.state.clicked3 = true
            });
            this.handleWin();
        }
        else if (id == 4 && this.state.clicked4 === false) {
            this.setState({
                count: this.state.count + 1,
                clicked4: this.state.clicked4 = true
            });
            this.handleWin();
        }
        else if (id == 5 && this.state.clicked5 === false) {
            this.setState({
                count: this.state.count + 1,
                clicked5: this.state.clicked5 = true
            });
            this.handleWin();
        }
        else if (id == 6 && this.state.clicked6 === false) {
            this.setState({
                count: this.state.count + 1,
                clicked6: this.state.clicked6 = true
            });
            this.handleWin();
        }
        else if (id == 7 && this.state.clicked7 === false) {
            this.setState({
                count: this.state.count + 1,
                clicked1: this.state.clicked7 = true
            });
            this.handleWin();
        }
        else if (id == 8 && this.state.clicked8 === false) {
            this.setState({
                count: this.state.count + 1,
                clicked8: this.state.clicked8 = true
            });
            this.handleWin();
        }
        else {
            alert("You Lose!");
            this.setState({
                count: 0,
                clicked1: false,
                clicked2: false,
                clicked3: false,
                clicked4: false,
                clicked5: false,
                clicked6: false,
                clicked7: false,
                clicked8: false
            });
        }

        this.Shuffle(Characters);
        this.handleScore();



    }



    render() {
        return (
            <div className="img-container">
                <h1>
                    High Score: {this.state.highScore}
                    <br />
                    Score: {this.state.count}
                </h1>
                {Characters.map((character) => {
                    return (
                        <img
                            alt={character.name}
                            src={character.image}
                            key={character.name}
                            height="200px"
                            width="200px"
                            dataclicked={character.id}
                            onClick={this.handleClick}
                        />
                    )
                    {" "}


                })}
            </div>

        );
    }
}

export default Counter;