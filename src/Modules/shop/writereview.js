import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { Popover, Pane, Button } from 'evergreen-ui';
import '../../css/sectionB.css';
import { SearchInput } from 'evergreen-ui'

function ReviewForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");



  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, rating, comment });
    setName("");
    setRating(0);
    setComment("");
  }

  return ( 


      
    <form onSubmit={handleSubmit}>
      <div className="writereview-btn">
        <p>Name: </p>
        <textarea
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div  className="writereview-btn">
        <p>Rating: </p>
        <Stack>
          <Rating
            value={rating}
            type="number"
            id="rating"
            onChange={(event) => setRating(Number(event.target.value))}
          />
        </Stack>
      </div>

      <div  className="writereview-btn">
        <p htmlFor="comment">Comment:</p>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>

      <button className="submit" type="submit">Submit</button>
    </form>
  );
}



   


function Review({ name, rating, comment }) {
  return (<>





    <div>
 
      <p> {name}</p>
      <p>{rating}</p>
      <p>{comment}</p>
    </div></>
  );
}

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
}

function Writereview() {
  const [reviews, setReviews] = useState([]);

  function handleReviewSubmit(review) {
    setReviews([...reviews, review]);
  }

  return (
    <div>
     
      <Popover
        content={
          <Pane width={220} height={240} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <ReviewForm onSubmit={handleReviewSubmit} />
          </Pane>
        }
        position="bottom-center"
      >
        <Button 
          sx={{
            fontFamily: "Gill Sans",
            fontSize: "18px",
          }}
          style={{
            color: "black",
            backgroundColor: "white",
            border: "1px solid red",
            marginLeft: "1%",
            textTransform: "none",
          }}
        >
          WRITE REVIEW
        </Button>
      </Popover>
     
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default Writereview;
