
import './cardClients.css';

export const CardClients = ({description, profileInfo, backgroundColor, colorFooter}: any) => {
  return (
    <>
        <div className="sliderCardClients" style={{ backgroundColor }}>
            <div className="content">
                <div className="description">
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
                <div className="image">
                    <div className="line"></div>
                    <div className="imageFooter">
                        {/* <img src={ image } alt="" /> */}
                        <p dangerouslySetInnerHTML={{ __html: profileInfo }} style={{ color: colorFooter }}></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
