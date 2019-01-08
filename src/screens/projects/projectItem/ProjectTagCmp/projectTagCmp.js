import React from 'react';
import { Text, View } from 'native-base';
import { Row } from 'react-native-easy-grid';
import projectTagStyle from './projectTagCmpStyle';

const TAG_LIST = {
    LIST: 'apollo, Jest, Arsopolis'
}

const TagItem = (props) => {
    const tagList = props.listTag
    return(
        <Text style={projectTagStyle.cardTagTextItem}>{tagList}</Text>
    )
}

class TagList extends React.Component{
    render() {
        return (
            <Row style={projectTagStyle.cardTag}>
                <View style={projectTagStyle.cardTagItem}>
                    <Text style={projectTagStyle.cardTagTextLabel}>Tags: </Text>
                    <TagItem 
                        listTag = {TAG_LIST.LIST}
                    />
                </View>
            </Row>
        )
    }
};

export default TagList
