import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  signin:Signin,
  reg : Reg,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout signin={Signin} reg={Reg}>
          <Component {...props} />
        </Layout>
      )} />
  );
}

export default AppRoute;