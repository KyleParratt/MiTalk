import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">
          MARAGON OLYMPUS <strong>COMMUNICATOR</strong>
        </h2>
        <hr />
        <div className="jumbotron">
          <p>
            <strong></strong>
          </p>
          <p> The Maragon communicator is a turn-key solution that
          allows ease of acces to information. It provides a platform for parents and teachers alike to communicate
          and exchange ideas, photos, news and <strong>much</strong> more.
          </p>


          <ol className="lead">
          </ol>
        </div>
      </div>
    );
  }
}
