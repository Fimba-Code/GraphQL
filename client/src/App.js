import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const API = "http://localhost:4000/graphql";

  const [team, setTeam] = useState([]);

  const [name, setName] = useState();
  const [id, setId] = useState();
  const [age, setAge] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    teams();
  }, [])

  function teams() {
    axios.post(API, {
      query:`
        query findManyTeams($team: FindManyTeamInput) {
          team: findManyTeams(team: $team) {
            id
            name
            thirst
            stadium
            image
            players {
              name
              image
              age
              height
              salary
            }
          }
        }`,
      variables: {
        team: {
          name: ""
        }
      }
    })
    .then((resp) => {
      if(resp) {
        setTeam(resp.data.data.team)
        console.log(resp)
      }
    });
  }

  function choiceClub(id) {
    setId(id);
    console.log(id)
  }
  
  function createPlayer() {
    axios.post(API, {
      query: `
        mutation createPlayer($player: CreatePlayerInput) {
          createPlayer(player: $player) {
            id
            name
            image
            age
            height
            salary
            gold_balls
            foot
            nickname
            number
            position
          }
        }
      `,
      variables: {
        player: {
          name: name,
          age: parseInt(age),
          image: image,
          nickname: name,
          "team_id": id
        }
      }
    })
    .then((resp) => {
      teams();
    });
  }

  return (
    <div className="App">
      {
        team && team.map((el, index) => {
          return (
            <div className="container" key={index} style={{ marginBottom: 150 }}>
              <div className="row">
              <div className="jumbotron team-container" style={{ padding: '5px'}}>
                <div className="image-container"
                  style={{ backgroundImage: `url(${el.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center'}}
                ></div>
                <div className="inf-container">
                  <p>Clube: { el.name }</p>
                  <p>Estádio: { el.stadium }</p>
                  <p>Sede: { el.thirst }</p>
                  <hr />
                  <button type="button" style={{marginRight: 10}} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => choiceClub(el.id)}>
                    Editar
                  </button>
                </div>
              </div>
              </div>
              <div className="row">
                {
                  el.players.map((player) => {
                    return (
                      <div className="col-sm-4 col-md-4">
                        <div className="card" style={{width: '18rem'}}>
                          <img src={player.image} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <p className="card-text">{ player.name }</p>
                            <p className="card-text">{ player.age }</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }






      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form style={{ width: '400px', margin: '40px auto'}}>
                <div className="form-group">
                  <label>Nome</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Idade</label>
                  <input type="text" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Irl imagem</label>
                  <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={createPlayer}>Salvar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
