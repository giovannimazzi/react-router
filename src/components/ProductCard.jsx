export default function ProductCard({ item }) {
  return (
    <div className="col">
      <div className="card bg-transparent g-0 h-100 text-start border-0">
        <div className="row g-0">
          <div className="col-4 img-card-container">
            <img
              src={item.image}
              className="w-100 h-100 object-fit-contain rounded-start"
              alt={item.title}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>

              <h6 className="card-subtitle mb-2 text-body-secondary d-flex align-items-center">
                {item.category} - € {item.price}
              </h6>
              <div className="card-description my-3">
                <p className="card-text">{item.description}</p>
              </div>

              <div className="card-text">
                <span>⭐{item.rating.rate}</span>{" "}
                <span>👁️‍🗨️{item.rating.count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
