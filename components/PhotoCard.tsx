import styled from "styled-components";

import { Photo } from "../types";

export default function PhotoCard({ photo } : { photo: Photo}) {
    const Photo = styled.div`
    height: 100%;
    background-image: url(${photo.urls.regular});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `;


  return  <div className="h-60 md:h-80 rounded-lg overflow-hidden">    
    <Photo />
    </div>
}
