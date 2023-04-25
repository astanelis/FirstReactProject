const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="product"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">submit</button>
        <div>
          <button onClick={() => console.log('click me')}>click me</button>
        </div>
      </form>
    </section>
  )
}

export default EventExamples
