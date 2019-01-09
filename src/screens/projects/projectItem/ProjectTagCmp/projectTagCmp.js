import React from 'react';
import { Text, View } from 'native-base';
import { Row } from 'react-native-easy-grid';
import projectTagStyle from './projectTagCmpStyle';

const TagItem = (props) => {
    const tagList = props.listTag
    return(
        <Text style={projectTagStyle.cardTagTextItem}>{tagList.join(', ')}</Text>
    )
}

const TagList = (props) => (
    <Row style={projectTagStyle.cardTag}>
        <View style={projectTagStyle.cardTagItem}>
            <Text style={projectTagStyle.cardTagTextLabel}>Tags: </Text>
            <TagItem 
                listTag = {this.props.tags}
            />
        </View>
    </Row>
);

export default TagList
