
import './card.css';
export const Card = ({image, description}: any) => {
  return (
    <>
        <div className="sliderCard">
            <div className="content">
                <div className="image">
                    <img src={ image } alt="" />
                </div>
                <div className="description">
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
        </div>
    </>
  )
}
