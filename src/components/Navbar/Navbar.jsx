import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import diamond from "../../assets/diamond.mp3";

import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";

function Navbar() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link className="nav-link" to="/page">
              <HiIcons.HiOutlineHome className="nav-icon" title="Home" />
              <span className="nav-link-text">Home</span>
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="nav-link" to="/page/1">
              <BiIcons.BiSearchAlt2 className="nav-icon" title="Search" />
              <span className="nav-link-text">Search</span>
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="nav-link" to="/page/2">
              <img
                src="../../eth.svg"
                className="nav-icon"
                height={"0.75rem"}
                title="Hii"
                onMouseEnter={() => {
                  setHovered(!hovered);
                }}
              />
              <span className="nav-link-text">Hii</span>
            </Link>
            {hovered && <audio src={diamond} autoPlay />}
          </li>
          <li className="navbar-li">
            <Link className="nav-link" to="/page/3">
              <MdIcons.MdOutlineNotifications
                className="nav-icon"
                title="Notifications"
              />
              <span className="nav-link-text">Notifications</span>
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="nav-link" to="/page/3">
              <TbIcons.TbMessage2 className="nav-icon" title="Message" />
              <span className="nav-link-text">Message</span>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Hii pal!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate
          ut pharetra sit amet aliquam id diam maecenas. Neque sodales ut etiam
          sit amet nisl purus in mollis. Donec enim diam vulputate ut pharetra
          sit amet. Amet justo donec enim diam vulputate ut pharetra sit amet.
          Non curabitur gravida arcu ac. Viverra orci sagittis eu volutpat odio
          facilisis mauris. Nisl suscipit adipiscing bibendum est ultricies.
          Fames ac turpis egestas integer eget aliquet. Et tortor at risus
          viverra adipiscing at in tellus integer. Urna cursus eget nunc
          scelerisque. Elit eget gravida cum sociis natoque penatibus et magnis.
          Eget felis eget nunc lobortis mattis aliquam. Cras semper auctor neque
          vitae tempus quam. Nunc non blandit massa enim. Odio ut enim blandit
          volutpat maecenas volutpat blandit aliquam. A condimentum vitae sapien
          pellentesque habitant morbi tristique. Morbi tincidunt ornare massa
          eget egestas purus viverra accumsan in. Volutpat maecenas volutpat
          blandit aliquam etiam. Nisl nisi scelerisque eu ultrices vitae. Tortor
          vitae purus faucibus ornare. Non consectetur a erat nam at lectus.
          Massa tempor nec feugiat nisl pretium fusce. Integer feugiat
          scelerisque varius morbi enim. Vitae purus faucibus ornare suspendisse
          sed nisi lacus sed. Viverra maecenas accumsan lacus vel facilisis
          volutpat est velit egestas. Nunc non blandit massa enim nec dui nunc
          mattis enim. Vestibulum morbi blandit cursus risus at ultrices mi.
          Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus.
          Placerat orci nulla pellentesque dignissim enim sit. Pellentesque
          habitant morbi tristique senectus et netus. Augue eget arcu dictum
          varius. Aliquam eleifend mi in nulla posuere sollicitudin aliquam
          ultrices. Quisque id diam vel quam elementum pulvinar etiam. Id
          aliquet risus feugiat in ante. Nunc vel risus commodo viverra maecenas
          accumsan lacus vel facilisis. Egestas egestas fringilla phasellus
          faucibus. Integer quis auctor elit sed vulputate mi sit. Ut lectus
          arcu bibendum at varius vel pharetra vel turpis. Quam quisque id diam
          vel. Sit amet purus gravida quis blandit turpis cursus. Cras fermentum
          odio eu feugiat pretium nibh ipsum consequat. Quam quisque id diam vel
          quam elementum pulvinar. Sed libero enim sed faucibus turpis in.
          Euismod in pellentesque massa placerat duis ultricies lacus sed.
          Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt.
          Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet.
          Sapien eget mi proin sed libero enim. Semper viverra nam libero justo
          laoreet sit. Turpis massa tincidunt dui ut ornare lectus sit. Leo a
          diam sollicitudin tempor id eu. Massa tincidunt nunc pulvinar sapien
          et ligula ullamcorper malesuada. Facilisis mauris sit amet massa vitae
          tortor. Vitae tortor condimentum lacinia quis vel eros donec. Orci
          phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
          tortor. Ultricies integer quis auctor elit sed. Nunc scelerisque
          viverra mauris in aliquam. Enim praesent elementum facilisis leo vel
          fringilla est ullamcorper. Interdum varius sit amet mattis vulputate.
          Ullamcorper dignissim cras tincidunt lobortis feugiat. Urna cursus
          eget nunc scelerisque viverra mauris in aliquam. Elementum curabitur
          vitae nunc sed velit dignissim sodales ut eu. Integer vitae justo eget
          magna. Ornare arcu dui vivamus arcu felis bibendum. Arcu ac tortor
          dignissim convallis aenean et. Sed sed risus pretium quam vulputate
          dignissim suspendisse in. Pretium vulputate sapien nec sagittis
          aliquam malesuada. Nulla aliquet enim tortor at auctor urna nunc id.
          Auctor urna nunc id cursus metus aliquam eleifend mi in. At imperdiet
          dui accumsan sit amet nulla facilisi morbi tempus. Hendrerit dolor
          magna eget est lorem ipsum dolor sit. Posuere lorem ipsum dolor sit.
          Ipsum consequat nisl vel pretium lectus quam. Lorem dolor sed viverra
          ipsum nunc. Nunc aliquet bibendum enim facilisis. Ut ornare lectus sit
          amet est placerat in. Ac felis donec et odio. Et leo duis ut diam quam
          nulla porttitor massa id. Pellentesque id nibh tortor id aliquet
          lectus proin nibh. Gravida rutrum quisque non tellus orci ac auctor.
          Quis risus sed vulputate odio. Faucibus nisl tincidunt eget nullam non
          nisi est sit amet. Convallis tellus id interdum velit laoreet id
          donec. Lorem sed risus ultricies tristique nulla aliquet. Dolor sit
          amet consectetur adipiscing elit ut aliquam. Cras sed felis eget velit
          aliquet. Condimentum lacinia quis vel eros donec ac odio tempor orci.
          Pretium viverra suspendisse potenti nullam ac tortor vitae. Turpis
          egestas pretium aenean pharetra magna ac placerat vestibulum lectus.
          Turpis in eu mi bibendum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Vulputate ut pharetra sit amet aliquam id diam maecenas.
          Neque sodales ut etiam sit amet nisl purus in mollis. Donec enim diam
          vulputate ut pharetra sit amet. Amet justo donec enim diam vulputate
          ut pharetra sit amet. Non curabitur gravida arcu ac. Viverra orci
          sagittis eu volutpat odio facilisis mauris. Nisl suscipit adipiscing
          bibendum est ultricies. Fames ac turpis egestas integer eget aliquet.
          Et tortor at risus viverra adipiscing at in tellus integer. Urna
          cursus eget nunc scelerisque. Elit eget gravida cum sociis natoque
          penatibus et magnis. Eget felis eget nunc lobortis mattis aliquam.
          Cras semper auctor neque vitae tempus quam. Nunc non blandit massa
          enim. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam.
          A condimentum vitae sapien pellentesque habitant morbi tristique.
          Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
          Volutpat maecenas volutpat blandit aliquam etiam. Nisl nisi
          scelerisque eu ultrices vitae. Tortor vitae purus faucibus ornare. Non
          consectetur a erat nam at lectus. Massa tempor nec feugiat nisl
          pretium fusce. Integer feugiat scelerisque varius morbi enim. Vitae
          purus faucibus ornare suspendisse sed nisi lacus sed. Viverra maecenas
          accumsan lacus vel facilisis volutpat est velit egestas. Nunc non
          blandit massa enim nec dui nunc mattis enim. Vestibulum morbi blandit
          cursus risus at ultrices mi. Ipsum dolor sit amet consectetur
          adipiscing elit ut aliquam purus. Placerat orci nulla pellentesque
          dignissim enim sit. Pellentesque habitant morbi tristique senectus et
          netus. Augue eget arcu dictum varius. Aliquam eleifend mi in nulla
          posuere sollicitudin aliquam ultrices. Quisque id diam vel quam
          elementum pulvinar etiam. Id aliquet risus feugiat in ante. Nunc vel
          risus commodo viverra maecenas accumsan lacus vel facilisis. Egestas
          egestas fringilla phasellus faucibus. Integer quis auctor elit sed
          vulputate mi sit. Ut lectus arcu bibendum at varius vel pharetra vel
          turpis. Quam quisque id diam vel. Sit amet purus gravida quis blandit
          turpis cursus. Cras fermentum odio eu feugiat pretium nibh ipsum
          consequat. Quam quisque id diam vel quam elementum pulvinar. Sed
          libero enim sed faucibus turpis in. Euismod in pellentesque massa
          placerat duis ultricies lacus sed. Vulputate mi sit amet mauris
          commodo quis imperdiet massa tincidunt. Ut venenatis tellus in metus
          vulputate eu scelerisque felis imperdiet. Sapien eget mi proin sed
          libero enim. Semper viverra nam libero justo laoreet sit. Turpis massa
          tincidunt dui ut ornare lectus sit. Leo a diam sollicitudin tempor id
          eu. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
          malesuada. Facilisis mauris sit amet massa vitae tortor. Vitae tortor
          condimentum lacinia quis vel eros donec. Orci phasellus egestas tellus
          rutrum tellus pellentesque eu tincidunt tortor. Ultricies integer quis
          auctor elit sed. Nunc scelerisque viverra mauris in aliquam. Enim
          praesent elementum facilisis leo vel fringilla est ullamcorper.
          Interdum varius sit amet mattis vulputate. Ullamcorper dignissim cras
          tincidunt lobortis feugiat. Urna cursus eget nunc scelerisque viverra
          mauris in aliquam. Elementum curabitur vitae nunc sed velit dignissim
          sodales ut eu. Integer vitae justo eget magna. Ornare arcu dui vivamus
          arcu felis bibendum. Arcu ac tortor dignissim convallis aenean et. Sed
          sed risus pretium quam vulputate dignissim suspendisse in. Pretium
          vulputate sapien nec sagittis aliquam malesuada. Nulla aliquet enim
          tortor at auctor urna nunc id. Auctor urna nunc id cursus metus
          aliquam eleifend mi in. At imperdiet dui accumsan sit amet nulla
          facilisi morbi tempus. Hendrerit dolor magna eget est lorem ipsum
          dolor sit. Posuere lorem ipsum dolor sit. Ipsum consequat nisl vel
          pretium lectus quam. Lorem dolor sed viverra ipsum nunc. Nunc aliquet
          bibendum enim facilisis. Ut ornare lectus sit amet est placerat in. Ac
          felis donec et odio. Et leo duis ut diam quam nulla porttitor massa
          id. Pellentesque id nibh tortor id aliquet lectus proin nibh. Gravida
          rutrum quisque non tellus orci ac auctor. Quis risus sed vulputate
          odio. Faucibus nisl tincidunt eget nullam non nisi est sit amet.
          Convallis tellus id interdum velit laoreet id donec. Lorem sed risus
          ultricies tristique nulla aliquet. Dolor sit amet consectetur
          adipiscing elit ut aliquam. Cras sed felis eget velit aliquet.
          Condimentum lacinia quis vel eros donec ac odio tempor orci. Pretium
          viverra suspendisse potenti nullam ac tortor vitae. Turpis egestas
          pretium aenean pharetra magna ac placerat vestibulum lectus. Turpis in
          eu mi bibendum.
        </p>
      </main>
    </div>
  );
}

export default Navbar;
