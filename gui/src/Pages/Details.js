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
    }, [])

    console.log('details: ', details)
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
                        {details.directors.map(director => (director))}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Cast</Accordion.Header>
                    <Accordion.Body>
                        {details.stars.map(star => (star))}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Globalization</Accordion.Header>
                    <Accordion.Body>
                        {details.countries.map(country => (country))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}