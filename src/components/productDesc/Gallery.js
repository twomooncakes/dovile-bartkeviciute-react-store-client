import { Component } from "react";
import css from "./styles/Gallery.module.css";

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = { galleryImages: [], spotlightImageID: 0 }
  }
  
  componentDidMount() {
    this.setState({ galleryImages: this.props.gallery });
  }

  componentDidUpdate() {
    if(this.props.gallery !== this.state.galleryImages) {
      this.setState({ galleryImages: this.props.gallery })
    }
  }

  changeSpotlightImage(imageID) {
    this.setState({ spotlightImageID: imageID });
  }

  componentWillUnmount() {
    this.setState({ galleryImages: [], spotlightImageID: 0 });
  }

  render() { 
    const { galleryImages, spotlightImageID } = this.state;
    const { name } = this.props;
    return (
      <section className={css.gallery}>
        <div className={css.gallery_side}>
          {galleryImages.length > 0 && galleryImages.map((image,idx) => {
            return (
              <div className={css.thumbnail_container} key={idx} onClick={() => this.changeSpotlightImage(idx)}>
                <img src={image} alt={`${name}-${idx}`}/>
              </div>
            );
          })}
        </div>
        <div className={css.gallery_spotlight}>
          <img src={galleryImages[spotlightImageID]} alt="-"/>
        </div>
      </section>
    );
  }
}
 
export default Gallery;