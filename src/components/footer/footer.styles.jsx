import styled from "styled-components";

export const FooterContainer = styled.div`
  font-family: quicksand;
  text-transform: capitalize;
  padding: 10px 90px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  background: rgba(29, 33, 35, 0.3);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 1200px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 830px) {
    padding: 0 10px;
    position: fixed;
    margin: 0 0 70px 0!important;
    top: 1;
    bottom: 0px;
    width: 100%;
  }
`;
export const Flex = styled.div`
  display: flex;
  gap: 20px;
`;
export const Col1 = styled.div`
  display: flex;
  gap: 10px;
`;
export const TrackImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 14px;
  margin: auto 0;

  @media screen and (max-width: 830px) {
    margin: auto 0;
  }
`;
export const TrackDetails = styled.div`
  margin: auto 0;

  @media screen and (max-width: 830px) {
    padding: 0 10px;
    // margin: auto 0;
  }
`;
export const Title = styled.h1`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 2px;
`;
export const Artist = styled.h1`
  color: rgba(255, 255, 255, 0.44);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 2px;
`;
export const Col2 = styled.div`
  width: 1000px;
`;
// export const Controls = styled.div`
//   display: flex;
//   gap: 50px;
//   margin: 0 0 0 250px;
// `;
// export const ShuffleImg = styled.img`
//   width: 25px;
//   height: 25px;
// `;
// export const PrevImg = styled.img`
//   width: 25px;
//   height: 25px;
// `;
// export const PlayImg = styled.img`
//   width: 15px;
//   height: 15px;
//   margin: auto 0;
//   background: #facd66;
//   border-radius: 50%;
//   padding: 10px;
//   margin: auto 0;
// `;
// export const NextImg = styled.img`
//   width: 25px;
//   height: 25px;
// `;
// export const ReapeatImg = styled.img`
//   width: 25px;
//   height: 25px;
// `;
// export const Progress = styled.div``;
// export const Col3 = styled.div`
// margin: 0 0 0 300px;
// `;
// export const VolumeImg = styled.img`
//   width: 25px;
//   height: 25px;
// `;
