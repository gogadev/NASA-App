import React, { Component } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import { NASA_API_KEY } from "../../config";

import "./nasa-rover.style.css";

const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=${NASA_API_KEY}`;

class NasaRover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      fetching: false,
      error: null,
    };
  }

  componentDidMount = () => {
    this.setState({
      fetching: true,
    });
    axios
      .get(apiUrl)
      .then((res) => {
        this.setState({
          images: res.data.photos,
          fetching: false,
        });
      })
      .catch((err) => {
        this.setState({
          fetching: false,
          error: err,
        });
      });
  };

  render() {
    const { images } = this.state;
    return (
      <div className="container">
        <h2 className="main-title">Mars Curiosity Image Gallery</h2>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam atque
          sapiente veniam, nulla natus quis sint molestiae iusto nesciunt
          perferendis sunt cum amet ad aspernatur expedita consequuntur autem
          quidem accusantium molestias sed porro nisi! Distinctio mollitia illum
          nisi iure voluptate, quibusdam accusantium earum sapiente recusandae
          tempore magnam facere consequatur rem, ipsum voluptatem alias cumque?
          Officiis quaerat molestiae eaque esse ipsam accusamus modi quasi earum
          ea magni? Quibusdam quidem dignissimos nostrum ipsum autem,
          voluptatibus est eligendi qui repellat asperiores quisquam
          perspiciatis error quis! Consequuntur sunt ipsa corporis maiores
          assumenda aspernatur recusandae animi officiis. Atque voluptatibus
          ipsum vero a mollitia, maxime quos nobis consectetur culpa dolores ab
          tempore accusantium tempora fugiat earum magni similique, totam et
          impedit quia omnis. Numquam alias cumque qui veniam aut! Inventore
          delectus deleniti maxime ducimus aliquid magnam ratione quisquam
          voluptates minus perspiciatis eaque quidem illum laborum, labore nulla
          ad! Accusamus, cupiditate fugiat! Recusandae non nihil quas explicabo.
        </p>
        <div className="nasa-rover">
          {images.map((image) => {
            return (
              <div key={image.id} className="rover-imgs">
                <h5 className="name">{image.camera.name}</h5>
                <img className="images" src={image.img_src} alt="" />
              </div>
            );
          })}
        </div>
        <Link to="/">
          {" "}
          <button className="btn home">Home</button>
        </Link>
      </div>
    );
  }
}

export default NasaRover;
