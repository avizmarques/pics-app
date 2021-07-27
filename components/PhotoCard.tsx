import styled from "styled-components";

import { Photo } from "../types";

export default function PhotoCard({ photo } : { photo: Photo}) {

  return  <div className="h-60 md:h-80 rounded-lg overflow-hidden">    
    <PhotoBg url={photo.urls.regular} />
    </div>
}


const PhotoBg = styled.div`
height: 100%;
background-image: url(${props => props.url});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;