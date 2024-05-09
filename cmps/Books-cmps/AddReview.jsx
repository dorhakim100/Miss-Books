export function AddReview() {
  function onStarClick({ target }) {
    const rating = +target.value
    console.log(rating)
  }
  return (
    <div className='new-review-container'>
      <h2>Add Review</h2>
      <div className='name-container'>
        <label htmlFor='review-name'>Name:</label>
        <input type='text' id='review-name' />
      </div>
      <input
        className='review-content'
        type='text'
        placeholder='Type here...'
      />

      <div className='stars-container'>
        <div class='rate'>
          <input
            type='radio'
            id='star5'
            name='rate'
            value='5'
            onClick={onStarClick}
          />
          <label for='star5' title='text'>
            5 stars
          </label>
          <input
            type='radio'
            id='star4'
            name='rate'
            value='4'
            onClick={onStarClick}
          />
          <label for='star4' title='text'>
            4 stars
          </label>
          <input
            type='radio'
            id='star3'
            name='rate'
            value='3'
            onClick={onStarClick}
          />
          <label for='star3' title='text'>
            3 stars
          </label>
          <input
            type='radio'
            id='star2'
            name='rate'
            value='2'
            onClick={onStarClick}
          />
          <label for='star2' title='text'>
            2 stars
          </label>
          <input
            type='radio'
            id='star1'
            name='rate'
            value='1'
            onClick={onStarClick}
          />
          <label for='star1' title='text'>
            1 star
          </label>
        </div>
        <button className='btn'>Submit</button>
      </div>
    </div>
  )
}
