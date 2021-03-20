import React, { Component } from "react";
// import ReactDOM from "react-dom";
import './home.style.scss'
import {Accordion, Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { connect } from 'react-redux'
// import { Card, Feed } from 'semantic-ui-react'
import {fetchDataSuccess} from "../../Redux/actions/dataaction/dataAction";
import MenuContainerRight from "../../components/menu/menuContainer/menuContainerRight";
import MenuContainerLeft from "../../components/menu/menuContainer/menuContainerLeft";

class ResearchPage extends Component {
    componentDidMount() {
        this.props.fetchDataSuccess();
    }

    render() {
        const { data } = this.props;

        return (
            <>
                <div className='menuContainer'>
                    <MenuContainerRight className='menuContainerRight'/>
                    <MenuContainerLeft className='menuContainerLeft'/>

                </div>

                <div>
                    <h1 className='page-title'>Create Post</h1>
                </div>
                <div>
                    <Accordion>
                        <Card className='post-card'>
                            <input type='text' name='post' className='post-input'/>
                        </Card>
                    </Accordion>
                </div>

                <div>
                    {data.map(({ id, _index, ContentTypeId, indexed}) => (
                        <Accordion defaultActiveKey='0'>
                            <Card className='feed-card'>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Title
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body eventKey="0">
                                            {ContentTypeId}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Accordion.Toggle>
                            </Card>
                        </Accordion>
                    ))}
                </div>
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