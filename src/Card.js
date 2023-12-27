import { AiFillLike, AiFillDislike } from "react-icons/ai";

function Card({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className="card">
          <h1>
            Hello <span style={{ color: "#0C356A" }}>{item.title}</span>
          </h1>
          <p>{item.description}</p>
          <div className="card-icons">
            <button>
              <AiFillLike className="like" />
              <span>{item.like}</span>
            </button>
            <button>
              <AiFillDislike className="dislike" />
              <span>{item.dislike}</span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
