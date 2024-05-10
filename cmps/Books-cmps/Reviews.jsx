const { useState, useEffect, useRef } = React

export function Reviews({ book, removeReview }) {
  // const { reviews } = book
  // const [reviews, setReviews] = useState(book.reviews)

  const reviews = book.reviews
  console.log(reviews)

  function onRemoveReview(id) {
    // console.log(id)

    const reviewIdx = reviews.findIndex((review) => review.id === id)
    console.log(reviewIdx)
    removeReview(reviewIdx)
  }
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 && <p>Couldn't find reviews...</p>}
      <div className='reviews-container'>
        {reviews.map((review) => {
          return (
            <div className='review' key={review.id}>
              <h4>{review.fullName}</h4>
              <h5>{review.date}</h5>
              <Stars rate={review.rating} />
              <p>{review.txt}</p>
              <button
                className='btn remove'
                onClick={() => onRemoveReview(review.id, reviews)}
              >
                X
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )

  function Stars({ rate }) {
    switch (rate) {
      case 1:
        return (
          <div>
            <i className='fa-solid fa-star star'></i>
          </div>
        )
      case 2:
        return (
          <div>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
          </div>
        )
      case 3:
        return (
          <div>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
          </div>
        )
      case 4:
        return (
          <div>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
          </div>
        )
      case 5:
        return (
          <div>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
            <i className='fa-solid fa-star star'></i>
          </div>
        )
    }
  }
}
