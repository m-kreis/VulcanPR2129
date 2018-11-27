import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Row, Col } from 'reactstrap';
import { Components, registerComponent, withSingle, Loading, getFragment, Locales } from 'meteor/vulcan:core';

import Modules from '../modules/event-modules/collection.js';

class ModuleEdit extends Component {
  render() {
    const { params } = this.props;
    return (
          <Row>
            <Col xl={12} lg={12} md={12}>
              <Card>
                <CardBody>
                  <Components.SmartForm
                  className="row"
                    collection={Modules}
                    documentId={'H2HaXMBDMMg7ujBBk'}
                    /*
                    */
                    fields={[
                      'title',
                      'maxParticipants',
                    ]}
                    queryFragment={getFragment('ModulesItemFragment')}
                    mutationFragment={getFragment('ModulesItemFragment')}
                    showRemove={false}
                    successCallback={document => {
                      console.log('sukzess');
                    }}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
    )
  }
}

// registerComponent('ModuleEdit', ModuleEdit, [withSingle, options]);
registerComponent({ name: 'ModuleEdit', component: ModuleEdit });
