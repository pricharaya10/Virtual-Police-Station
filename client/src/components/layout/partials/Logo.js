import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-2">
        <Link to="/">
          {/* <p style={{color:'whitesmoke',fontWeight:"bold",fontSize:"1.5rem"}}>HealthSystem</p> */}
          <Image
            className="has-shadow"
            src={require('../../../assets/images/logo.png')}
            alt="logo"
            width={70}
            height={70} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;