import './notFound.css'

const NotFound = () => {
  return (
    <section className='not-found-container'>
      <div className='not-found-wrapper'>
        <h1 style={{ fontSize: '5rem', color: '#1F86D03D' }}>404</h1>
        <h2 style={{ color: '#1F86D0' }}>Oops Page Not Found</h2>
        <p>
          It seems we can&#39;t find the page you&#39;re looking for, Let&#39;s
          get you back on track!
        </p>
        <button className='error-btn'>Back to Home</button>
      </div>
    </section>
  );
}

export default NotFound;