import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../Actions/movieDetails.actions';
import {
    Accordion,
    Badge
} from 'react-bootstrap';
import YouTubeFrame from '../Components/YouTubeFrame';

export default function DetailsPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const { details, success, loading } = useSelector(state => state.movieDetails);

    useEffect(() => {
        dispatch(getMovieDetails(params.movieId));
    }, [params.movieId])

    if (success) {
        return (
            <div>
                <h1>{details.title}</h1>
                <div>
                    {details.year} | {details.rated} | {Math.floor(details.runtime / 60)}h {details.runtime % 60}m
                </div>
                <YouTubeFrame embedId={details.youtube_trailer_key} />
                <div>
                    {details.genres.map((genre, index) => {
                        return <Badge key={index} pill bg="warning" text="dark">{genre}</Badge>
                    })}
                </div>
                <p>{details.description}</p>

                <div>⭐ {details.imdb_rating}/10</div>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Directors</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                {details.directors.map(director => (<li>{director}</li>))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Cast</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                {details.stars.map(star => (<li>{star}</li>))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Globalization</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                {details.countries.map(country => (<li>{country}</li>))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    } else if(loading) {
        return <p>Loading</p>
    } else {
        return <p>Error</p>
    }
}