import './ProductDemo.css'

function ProductDemo() {
  return (
    <section id="features" className="product-demo">
      <div className="container">
        <h2 className="section-title">See MySalesBot in Action</h2>
        <div className="video-container">
          <video 
            className="demo-video" 
            controls 
            preload="metadata"
            poster="/video-placeholder.jpg"
            loading="lazy"
          >
            <source src="/video/product-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

export default ProductDemo
