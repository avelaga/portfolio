import React from 'react';
import Navbar from '../../layout/Navbar';
import ModularPhoto from './ModularPhoto';
import { userVoidImages } from './images.js';
import '../pages.scss';

// TODO: lazy load, add artist statement? 
export default function UserVoid() {
  return (
    <div className="page">
     <Navbar activeLink={"USERVOID"} />
      <div className="title">User Void</div>
      {/* <div className="section-subtitle">subtitle goes here</div> */}
      <div className="section-year">2019</div>
      <div className="photo-mobile-spacer" />
      <ModularPhoto img={userVoidImages[0]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[1]} width={900} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={userVoidImages[2]} width={600} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={userVoidImages[3]} width={700} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[4]} width={1000} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[5]} width={2000} padding={false} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[6]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[7]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[8]} width={900} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[9]} width={800} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={userVoidImages[10]} width={800} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[11]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[12]} width={800} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[13]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[14]} width={600} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[15]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[16]} width={800} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[17]} width={700} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[18]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[19]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[20]} width={700} padding={true} align={"right"} numColumns={1} />
    </div>
  )
};