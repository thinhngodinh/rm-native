import React from "react";
import { connect } from 'react-redux';
import { FooterTab, Button, Icon, Badge, Text } from 'native-base';

import { userActions } from '../../../static/actionsIndex';

class ProjectListFooter extends React.Component {

    componentDidMount() {
        this.props.dispatch(userActions.getProjectList.invoke());
    }

    _changeProjectType (status) {
        this.props.dispatch(userActions.changeProjectFilter.invoke({status: status}));
        this.props.dispatch(userActions.getProjectList.invoke());
    }

    render() {

        if (!this.props.user) return null;
        const { init_number } = this.props.user;
        const {projectTypes, status} = this.props;
        return (
            <FooterTab>
                {projectTypes.map((project, index) => (
                    <Button
                        active={ project.type === status }
                        onPress={() => this._changeProjectType(project.type)}
                        key={index} badge vertical>
                        <Badge
                            primary={project.type === status}
                            info={project.type !== status}>
                            <Text>{init_number ? init_number[`total_${project.type}_projects`] : '--'}</Text>
                        </Badge>
                        <Icon name={project.icon} />
                    </Button>
                ))}
            </FooterTab>
        );
    }
}

const mapStateToProp = (state) => ({
    user: state.user.info
});

export default connect(mapStateToProp)(ProjectListFooter);
