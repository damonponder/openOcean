import React, { Component } from "react";
// import ReactDOM from "react-dom";
import './reasearchPage.style.scss'
import {Accordion, Card, Button} from "react-bootstrap";
import { connect } from 'react-redux'
// import { Card, Feed } from 'semantic-ui-react'
import {fetchDataSuccess} from "../../Redux/actions/dataAction";


class ResearchPage extends Component {
    componentDidMount() {
        this.props.fetchDataSuccess();
    }

    render() {
        const { data } = this.props;

        return (
            <>
                <h1 className='page-title'>Record MetaData</h1>
                {data.map(({ id, _index, ContentTypeId, indexed}) => (
                <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                {_index}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body eventKey="0">
                                    {ContentTypeId}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                </Accordion>
                ))}
            </>

        );

    }
};

const mapStateToProps = state => ({
    data: state.data.data
});

const mapDispatchToProps = dispatch => ({
    fetchDataSuccess: () => fetchDataSuccess(dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ResearchPage);