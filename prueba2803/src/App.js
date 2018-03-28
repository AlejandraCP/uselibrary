import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Typography } from "stylelab";

class App extends Component {
  render() {
    return <div className="App bitter">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGhE2NOeXilkI5VkqNFLauPeyTkoi7mr1dp0tN8hc8PFHBnhf" alt="" />
        </div>
        <div>
          <Typography title1 under bold>
            Botones
          </Typography>
          <Button green small>
            Laboratoria
          </Button>
          <Button pink small>
            Laboratoria
          </Button>
          <Button yellow small>
            Laboratoria
          </Button>
          <Button green medium>
            Laboratoria
          </Button>
          <Button pink medium>
            Laboratoria
          </Button>
          <Button yellow medium>
            Laboratoria
          </Button>
          <Button green big>
            Laboratoria
          </Button>
          <Button pink big>
            Laboratoria
          </Button>
          <Button yellow big>
            Laboratoria
          </Button>
          <Button pink big white>
            Laboratoria
          </Button>
          <Button green big white>
            Laboratoria
          </Button>
          <Button yellow big white>
            Laboratoria
          </Button>
          <Button yellow bold>
            Laboratoria
          </Button>
          <Button green bold>
            Laboratoria
          </Button>
          <Button pink bold>
            Laboratoria
          </Button>
        </div>
        <div>
          <Typography title1 under bold>
            Tipografía
          </Typography>
          <Typography title2>Laboratoria</Typography>
          <Typography title2 under pink bold>
            Laboratoria
          </Typography>
          <Typography title3 green bold>
            Laboratoria
          </Typography>
          <Typography phrase yellow bold>
            Laboratoria
          </Typography>
          <Typography body>Laboratoria</Typography>
          <Typography body2>Laboratoria</Typography>
        </div>
        <div>
          <Typography title1 under bold>
            Card
          </Typography>
        </div>
        <div className="center">
          <Card pink big className="margin">
            <span>720</span>
            <p>Horas de rendimiento</p>
          </Card>
          <Card pink small className="margin">
            <span>720</span>
            <p>Horas de rendimiento</p>
          </Card>
          <Card green big className="margin">
            <span>720</span>
            <p>Horas de rendimiento</p>
          </Card>
          <Card green small className="margin">
            <span>720</span>
            <p>Horas de rendimiento</p>
          </Card>
          <Card yellow big className="margin">
            <span>720</span>
            <p>Horas de rendimiento</p>
          </Card>
          <Card yellow small className="margin">
            <span>720</span>
            <p>Horas de rendimiento</p>
          </Card>
        </div>
      </div>;
  }
}

export default App;
