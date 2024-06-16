import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { getPeople } from "../../api";
import { getIdFromUrl } from "../../utils";
import { Carousel } from 'react-bootstrap';


 const Home = () => {
    const [page, setPage] = useState(null);
	const [people, setPeople] = useState([]);

    useEffect(() => {
        getPeople(page).then((res) => {
            setPeople(res.data.results)
			});
    }, [page]);

    return (
		
		
			<div className="container">
			  <h1 className="my-4 text-center">Star Wars Characters</h1>
			  <Carousel>
				{people.map((person, index) => (
				  <Carousel.Item key={index}>
					<div className="card" style={{ width: "18rem" }}>
					  <img
						src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
						  person.url
						)}.jpg`}
						className="card-img-top"
						alt={person.name}
					  />
					  <div className="card-body">
						
					  </div>
					</div>
				  </Carousel.Item>
				))}
			  </Carousel>
			</div>
		  );
		};
		
		export default Home;
		
