import React from 'react';

import { View } from 'react-native';
import { Spinner, Text, Icon } from 'native-base'

import { ProjectItem } from '../projectItem'

const ProjectListContent = ({projectListData, loadingData }) => {
    return (
        <React.Fragment>
            <View style={{ marginTop: 5 }}>
                {projectListData && projectListData.projects.map((project, index) =>
                    <ProjectItem
                        key={index}
                        projectInfo={project}
                    />
                )}
                {(loadingData || (projectListData && projectListData.total_pages > 0 && (projectListData.paged < projectListData.total_pages))) &&
                    <Spinner
                        color={loadingData ? '#04b6fe' : '#fff'} />
                }
                {projectListData && projectListData.total_pages > 0 && (projectListData.paged === projectListData.total_pages) &&
                    <Text style={{ color: '#00000050', paddingLeft: 16, paddingRight: 16 }}>All Projects are loaded.</Text>
                }
                {projectListData && projectListData.projects.length == 0 && !loadingData &&
                    <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Icon name='md-folder-open' style={{ fontSize: 50, color: '#77777770', marginTop: 80 }}></Icon>
                        <Text style={{ display: 'flex', width: '100%', textAlign: 'center', color: '#77777770' }}>No Project Found</Text>
                    </View>
                }
            </View>
        </React.Fragment>
    );
}

export default ProjectListContent;
