import React from 'react';
import { Text, View } from 'native-base';
import { Row } from 'react-native-easy-grid';
import projectTagStyle from './projectTagCmpStyle';

const TagItem = (props) => {
    const tagList = props.listTag
    return(
        <Text style={tagList.length > 0 ? projectTagStyle.cardTagTextItem : projectTagStyle.noCardTagItem}>
            {tagList.length > 0 ? tagList.join(', ') : 'N/A'}
        </Text>
    )
}

const TagList = (props) => (
    <Row style={projectTagStyle.cardTag}>
        <View style={projectTagStyle.cardTagItem}>
            <Text style={projectTagStyle.cardTagTextLabel}>Tags: </Text>
            <TagItem 
                listTag = {props.tags}
            />
        </View>
    </Row>
);

export default TagList
