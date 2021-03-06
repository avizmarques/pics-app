import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

import axios from "axios";
import styled from "styled-components";

import { Photo } from "../../types";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import Footer from "../../components/Footer";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data: photo } = await axios.get(
    `https://api.unsplash.com/photos/${
      params ? params.id : "Cr9hZrpC1Oc"
    }?client_id=nqX4rDuguWWfD0YlLy_u5V9T7LaUoyIquPTxHZ0md1E`
  );
  // client_id=oqZA5hBGwDX5N2bzWxoZ8Ni4oaC1gFtuRa0bV4qjBbk

  return {
    props: {
      photo,
    },
  };
};

export default function PhotoPage({ photo }: { photo: Photo }) {
  return (
    <div>
      <Head>
        <title>Photo by </title>
        <meta name="description" content="" />
      </Head>

      <main className="h-screen">
        <div className="w-screen h-3/5 mb-8 relative">
          <PhotoCont url={photo.urls.regular} />
          <Link href="/" passHref>
            <div className="absolute top-12 left-8 h-8">
              <ArrowBackIcon color="white" />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 px-8">
          <div>
            <div className="text-gray text-base">Downloads</div>
            <div className="text-xl text-darkest-gray">{photo.downloads}</div>
          </div>
          <div>
            <div className="text-gray text-base">Country</div>
            <div className="text-xl text-darkest-gray">
              {photo.location.country ? photo.location.country : "Unknown"}
            </div>
          </div>
          <div>
            <div className="text-gray text-base">User</div>
            <div className="text-xl text-darkest-gray">{photo.user.name}</div>
          </div>
          <div>
            <div className="text-gray text-base">Likes</div>
            <div className="text-xl text-darkest-gray">
              {photo.likes ? photo.likes : "0"}
            </div>
          </div>
        </div>
        <div className="h-52" />
      </main>
      <Footer />
    </div>
  );
}

const PhotoCont = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props: { url: string }) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
