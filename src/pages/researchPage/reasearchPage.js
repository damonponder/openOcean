import React, { Component } from "react";
import './reasearchPage.style.scss'
import {Accordion, Card} from "react-bootstrap";
import { connect } from 'react-redux'
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
                    <Accordion>
                        <Card>
                            <h1>This is a Comment</h1>
                        </Card>
                    </Accordion>
                </div>
                <div>
                {data.map(({ id, _index, ContentTypeId, indexed}) => (
                <Accordion defaultActiveKey='0'>
                        <Card>
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