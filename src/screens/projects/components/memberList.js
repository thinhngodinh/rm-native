import React from 'react'
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const MemberItem = ({member}) => (
    <ListItem thumbnail>
        <Left>
            <Thumbnail square source={{ uri: member.profile_picture }} />
        </Left>
        <Body>
            <Text>{member.firstname} {member.lastname}</Text>
            <Text note numberOfLines={1}>{member.roles}</Text>
        </Body>
        <Right>
            <Button transparent>
                <Text>{member.status.toUpperCase()}</Text>
            </Button>
        </Right>
    </ListItem>
)

const MemberList = ({members}) => {
    return (
        <List>
            {members.length && members.map((member, index) => (
                <MemberItem key={index} member={member} />
            ))}
        </List>
    );
};

export default MemberList;
