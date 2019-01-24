import React from "react";
import { connect } from 'react-redux';
import { FooterTab, Button, Icon, Badge, Text } from 'native-base';

import { userActions } from '../../../static/actionsIndex';

const ProjectListFooter = ({ user, projectTypes, status, dispatch}) => {
    if (!user) return null;
    const { init_number } = user;
    const _changeProjectType = (status) => {
        dispatch(userActions.changeProjectFilter.invoke({ status: status, page: 1 }));
        dispatch(userActions.getProjectList.invoke());
    }

    return (
        <FooterTab>
            {projectTypes.map((project, index) => (
                <Button
                    active={project.type === status}
                    onPress={() => _changeProjectType(project.type)}
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

const mapStateToProp = (state) => ({
    user: state.user.info
});

export default connect(mapStateToProp)(ProjectListFooter);
